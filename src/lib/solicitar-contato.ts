import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { segmentos } from "@/content/segmentos";

/** Motivos do formulário Fale Conosco. Visita e matrícula pedem os dados do aluno. */
export const assuntos = [
  { valor: "visita", rotulo: "Agendar uma visita", escolar: true },
  { valor: "matricula", rotulo: "Informações sobre matrículas", escolar: true },
  { valor: "duvida", rotulo: "Esclarecer uma dúvida", escolar: false },
  { valor: "outros", rotulo: "Outros assuntos", escolar: false },
] as const;

export type Assunto = (typeof assuntos)[number]["valor"];

export function dadosDoAssunto(valor: Assunto) {
  return assuntos.find((a) => a.valor === valor) ?? assuntos[0];
}

/** Regras compartilhadas pelo formulário Fale Conosco e pela validação no servidor. */
export const solicitacaoSchema = z
  .object({
    // Sem o campo (envio no formato antigo), vale "visita"; vazio é recusado.
    assunto: z
      .enum(["visita", "matricula", "duvida", "outros"], {
        errorMap: () => ({ message: "Selecione o motivo do contato." }),
      })
      .optional()
      .default("visita"),
    responsavel: z.string().trim().min(3, "Informe o nome do responsável.").max(120),
    aluno: z.string().trim().max(120).optional().default(""),
    telefone: z
      .string()
      .trim()
      .max(30)
      .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um telefone com DDD."),
    email: z.string().trim().max(160).email("Informe um e-mail válido."),
    segmento: z.string().optional().default(""),
    mensagem: z.string().trim().max(2000).optional().default(""),
    /** Campo invisível: só robôs o preenchem. */
    site: z.string().max(200).optional().default(""),
  })
  .superRefine((s, ctx) => {
    if (dadosDoAssunto(s.assunto).escolar) {
      if (s.aluno.length < 2)
        ctx.addIssue({ code: "custom", path: ["aluno"], message: "Informe o nome do aluno." });
      if (!segmentos.some((seg) => seg.nome === s.segmento))
        ctx.addIssue({
          code: "custom",
          path: ["segmento"],
          message: "Selecione o nível de ensino.",
        });
    } else if (s.mensagem.length < 5) {
      ctx.addIssue({
        code: "custom",
        path: ["mensagem"],
        message: "Conte-nos como podemos ajudar.",
      });
    }
  });

export type Solicitacao = z.input<typeof solicitacaoSchema>;
export type CampoSolicitacao = Exclude<keyof Solicitacao, "site">;

type ErrosDosCampos = Partial<Record<CampoSolicitacao, string>>;

/** Primeira mensagem de erro de cada campo, no formato usado pelo formulário. */
export function errosDaValidacao(erro: z.ZodError): ErrosDosCampos {
  const erros: ErrosDosCampos = {};
  for (const e of erro.issues) erros[e.path[0] as CampoSolicitacao] ??= e.message;
  return erros;
}

export type ResultadoSolicitacao =
  | { ok: true }
  | { ok: false; motivo: "validacao"; erros: ErrosDosCampos }
  | { ok: false; motivo: "configuracao" | "servico" };

/** Lê a variável no Worker da Cloudflare (process.env com nodejs_compat) ou no Node local. */
function variavel(nome: string) {
  const doWorker = (globalThis as { __env__?: Record<string, unknown> }).__env__?.[nome];
  const valor = process.env[nome] ?? (typeof doWorker === "string" ? doWorker : undefined);
  return valor?.trim() || undefined;
}

export const solicitarContato = createServerFn({ method: "POST" })
  .validator((dados: unknown) => dados as Solicitacao)
  .handler(async ({ data }): Promise<ResultadoSolicitacao> => {
    const lido = solicitacaoSchema.safeParse(data);
    if (!lido.success)
      return { ok: false, motivo: "validacao", erros: errosDaValidacao(lido.error) };
    const s = lido.data;
    // Robô: responde como enviado para não ensinar a contornar a proteção.
    if (s.site) return { ok: true };

    const chave = variavel("RESEND_API_KEY");
    const remetente = variavel("CONTATO_EMAIL_REMETENTE");
    const destinos = variavel("CONTATO_EMAIL_DESTINO")
      ?.split(",")
      .map((d) => d.trim())
      .filter(Boolean);
    if (!chave || !remetente || !destinos?.length) {
      console.error(
        "[solicitar-contato] configuração ausente:",
        [
          !chave && "RESEND_API_KEY",
          !remetente && "CONTATO_EMAIL_REMETENTE",
          !destinos?.length && "CONTATO_EMAIL_DESTINO",
        ]
          .filter(Boolean)
          .join(", "),
      );
      return { ok: false, motivo: "configuracao" };
    }

    const assunto = dadosDoAssunto(s.assunto);
    const texto = [
      "Nova mensagem enviada pelo formulário Fale Conosco do site.",
      "",
      `Motivo: ${assunto.rotulo}`,
      `Responsável: ${s.responsavel}`,
      `Telefone/WhatsApp: ${s.telefone}`,
      `E-mail: ${s.email}`,
      ...(assunto.escolar ? [`Aluno: ${s.aluno}`, `Nível de ensino: ${s.segmento}`] : []),
      "",
      "Mensagem:",
      s.mensagem || "(sem mensagem)",
    ].join("\n");
    const resumo = assunto.escolar ? [s.segmento, s.aluno] : [s.responsavel];

    try {
      const resposta = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${chave}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: remetente,
          to: destinos,
          reply_to: s.email,
          subject: [assunto.rotulo, ...resumo].join(" — "),
          text: texto,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!resposta.ok) {
        console.error(
          "[solicitar-contato] Resend recusou o envio:",
          resposta.status,
          (await resposta.text()).slice(0, 300),
        );
        return { ok: false, motivo: "servico" };
      }
      return { ok: true };
    } catch (erro) {
      console.error("[solicitar-contato] falha ao chamar o Resend:", erro);
      return { ok: false, motivo: "servico" };
    }
  });
