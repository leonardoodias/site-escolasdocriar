import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { segmentos } from "@/content/segmentos";

/** Regras compartilhadas pelo formulário de Matrículas e pela validação no servidor. */
export const solicitacaoSchema = z.object({
  responsavel: z.string().trim().min(3, "Informe o nome do responsável.").max(120),
  aluno: z.string().trim().min(2, "Informe o nome do aluno.").max(120),
  telefone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um telefone com DDD."),
  email: z.string().trim().max(160).email("Informe um e-mail válido."),
  segmento: z
    .string()
    .refine((v) => segmentos.some((s) => s.nome === v), "Selecione o segmento de interesse."),
  mensagem: z.string().trim().max(2000).optional().default(""),
  /** Campo invisível: só robôs o preenchem. */
  site: z.string().max(200).optional().default(""),
});

export type Solicitacao = z.input<typeof solicitacaoSchema>;
export type CampoSolicitacao = Exclude<keyof Solicitacao, "site" | "mensagem">;

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

    const texto = [
      "Nova solicitação de contato enviada pelo site (página Matrículas).",
      "",
      `Responsável: ${s.responsavel}`,
      `Aluno: ${s.aluno}`,
      `Telefone/WhatsApp: ${s.telefone}`,
      `E-mail: ${s.email}`,
      `Nível de ensino: ${s.segmento}`,
      "",
      "Mensagem:",
      s.mensagem || "(sem mensagem)",
    ].join("\n");

    try {
      const resposta = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${chave}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: remetente,
          to: destinos,
          reply_to: s.email,
          subject: `Solicitação de visita — ${s.segmento} — ${s.aluno}`,
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
