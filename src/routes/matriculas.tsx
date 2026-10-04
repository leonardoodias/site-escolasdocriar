import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContatoDialog } from "@/components/site/ContatoDialog";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { segmentos } from "@/content/segmentos";

export const Route = createFileRoute("/matriculas")({
  head: () => ({
    meta: [
      { title: "Matrículas e Agendamento de Visita — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Matrículas abertas na Escola Castelo do Criar, em Santa Rosa de Viterbo/SP. Agende uma visita e conheça a escola de perto.",
      },
      { property: "og:title", content: "Matrículas — Castelo do Criar" },
      {
        property: "og:description",
        content: "Agende uma visita, conheça a proposta pedagógica e garanta a vaga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Matriculas,
});

const etapas = [
  "Entre em contato e agende uma visita",
  "Conheça a escola, a equipe e a proposta pedagógica",
  "Receba as informações de vagas, turnos e valores",
  "Entregue a documentação e finalize a matrícula",
];

const faq = [
  {
    pergunta: "Como faço a matrícula do meu filho?",
    resposta:
      "A matrícula pode ser realizada após o contato com nossa equipe e a confirmação da disponibilidade de vaga para a turma. Nossa equipe orientará a família sobre todas as etapas e documentos necessários.",
  },
  {
    pergunta: "Como funciona a rematrícula dos alunos que já estudam nas Escolas do Criar?",
    resposta:
      "As famílias dos alunos que já fazem parte da escola têm prioridade no período de rematrículas. O processo é realizado dentro do prazo informado pela escola, garantindo a continuidade da vaga para o próximo ano letivo.",
  },
  {
    pergunta: "Existe prazo para realizar a rematrícula?",
    resposta:
      "Sim. A escola estabelece um período específico para as rematrículas. Após esse prazo, as vagas não confirmadas poderão ser disponibilizadas para novas famílias, conforme a disponibilidade de cada turma.",
  },
  {
    pergunta: "Como saber se há vaga para a turma e período que desejo?",
    resposta:
      "A disponibilidade depende da turma e do período escolhido. Entre em contato com nossa equipe para consultar as vagas disponíveis.",
  },
  {
    pergunta: "Quais documentos são necessários para a matrícula?",
    resposta:
      "A documentação pode variar de acordo com a idade e a situação escolar do aluno. Nossa equipe fornecerá a relação completa de documentos no momento da matrícula.",
  },
  {
    pergunta: "É possível escolher entre período da manhã, tarde (1°ano) ou período estendido?",
    resposta: "Sim. A escola oferece essas opções.",
  },
  {
    pergunta: "A matrícula garante a vaga no período escolhido?",
    resposta:
      "A vaga é confirmada após a conclusão do processo de matrícula e o cumprimento das condições estabelecidas pela escola. A disponibilidade deve ser confirmada previamente com a equipe.",
  },
  {
    pergunta: "Quais são as formas de pagamento da matrícula?",
    resposta:
      "As condições e forma de pagamento são informadas pelo setor financeiro no período de matrículas.",
  },
  {
    pergunta: "Há benefícios para irmãos que estudam na escola?",
    resposta:
      "Sim. As Escolas do Criar possuem condições especiais para famílias com mais de um filho matriculado, conforme as regras e condições vigentes para o ano letivo.",
  },
  {
    pergunta: "Alunos novos também podem realizar matrícula?",
    resposta:
      "Sim. Após o período de prioridade destinado às famílias que já fazem parte da escola, as vagas disponíveis são oferecidas às novas famílias, conforme disponibilidade.",
  },
  {
    pergunta: "Posso visitar a escola antes de realizar a matrícula?",
    resposta:
      "Sim! Será um prazer receber sua família. A visita permite conhecer nossos espaços, nossa proposta e conversar com nossa equipe sobre a rotina escolar.",
  },
  {
    pergunta:
      "Meu filho pode vivenciar um dia de experiência na escola antes de realizar a matrícula?",
    resposta:
      "Sim, com toda certeza. Estamos abertos para acolher e mostrar uma experiência incrível para seu filho.",
  },
  {
    pergunta: "Como posso tirar outras dúvidas sobre matrícula ou rematrícula?",
    resposta:
      "Nossa equipe está à disposição para orientar cada família. Entre em contato pelos canais oficiais da escola e teremos prazer em ajudar.",
  },
];

type Erros = Partial<Record<"responsavel" | "aluno" | "telefone" | "email" | "segmento", string>>;

function Matriculas() {
  const [erros, setErros] = useState<Erros>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const proximos: Erros = {};
    if (get("responsavel").length < 3) proximos.responsavel = "Informe o nome do responsável.";
    if (get("aluno").length < 2) proximos.aluno = "Informe o nome do aluno.";
    if (get("telefone").replace(/\D/g, "").length < 10)
      proximos.telefone = "Informe um telefone com DDD.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      proximos.email = "Informe um e-mail válido.";
    if (!get("segmento")) proximos.segmento = "Selecione o segmento de interesse.";

    setErros(proximos);
    if (Object.keys(proximos).length > 0) {
      toast.error("Revise os campos destacados.");
      return;
    }

    toast.success("Solicitação enviada! Entraremos em contato em breve.");
    form.reset();
  }

  return (
    <>
      <PageHero
        size="compact"
        wide
        eyebrow="Matrículas abertas"
        title="Agende sua visita às Escolas do Criar"
        text="Conheça o Castelinho do Criar ou o Castelo do Criar e descubra de perto a unidade ideal para sua família."
        supportText="Preencha o formulário e nossa equipe entrará em contato para organizar sua visita e esclarecer suas dúvidas."
      />

      {/* Formulário + Como funciona */}
      <section className="pt-8 pb-10 md:pt-10 md:pb-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-14">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-4xl border border-border bg-card p-8 shadow-soft md:p-10"
            >
              <h2 className="text-2xl font-extrabold text-primary-deep">Solicitar contato</h2>

              <div className="mt-6 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="responsavel">Nome do responsável *</Label>
                    <Input
                      id="responsavel"
                      name="responsavel"
                      className="mt-2.5 min-h-12 rounded-xl"
                    />
                    {erros.responsavel && (
                      <p className="mt-1 text-xs font-semibold text-destructive">
                        {erros.responsavel}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="aluno">Nome do aluno *</Label>
                    <Input id="aluno" name="aluno" className="mt-2.5 min-h-12 rounded-xl" />
                    {erros.aluno && (
                      <p className="mt-1 text-xs font-semibold text-destructive">{erros.aluno}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      inputMode="tel"
                      className="mt-2.5 min-h-12 rounded-xl"
                    />
                    {erros.telefone && (
                      <p className="mt-1 text-xs font-semibold text-destructive">
                        {erros.telefone}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2.5 min-h-12 rounded-xl"
                    />
                    {erros.email && (
                      <p className="mt-1 text-xs font-semibold text-destructive">{erros.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="segmento">Níveis de Ensino *</Label>
                  <select
                    id="segmento"
                    name="segmento"
                    defaultValue=""
                    className="mt-2.5 min-h-12 w-full rounded-xl border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Selecione…</option>
                    {segmentos.map((s) => (
                      <option key={s.slug} value={s.nome}>
                        {s.nome} — {s.faixa}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Educação Infantil é no Castelinho do Criar; Fundamental e Médio são no Castelo
                    do Criar.
                  </p>
                  {erros.segmento && (
                    <p className="mt-1 text-xs font-semibold text-destructive">{erros.segmento}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" name="mensagem" rows={4} className="mt-2.5 rounded-xl" />
                </div>
              </div>

              <Button
                type="submit"
                className="mt-8 min-h-12 w-full rounded-full gradient-accent font-bold text-accent-foreground hover:opacity-90"
              >
                Enviar solicitação
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Prefere falar agora?{" "}
                <ContatoDialog>
                  <button
                    type="button"
                    className="cursor-pointer font-bold text-primary hover:underline"
                  >
                    Fale com a nossa equipe
                  </button>
                </ContatoDialog>
                .
              </p>
            </form>

            <div className="pt-8 md:pt-10">
              <h2 className="text-2xl font-extrabold text-primary-deep">
                Como funciona a matrícula
              </h2>
              <ol className="mt-6 divide-y divide-border/60">
                {etapas.map((etapa, i) => (
                  <li key={etapa} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                    <span className="font-display grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-base font-semibold text-foreground/85">
                      {etapa}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pt-10 pb-8 md:pt-12 md:pb-10">
        <Container>
          <SectionHeading
            align="left"
            title="Perguntas Frequentes"
            text="Tire suas principais dúvidas sobre matrícula e rematrícula nas Escolas do Criar."
          />
          <div className="mt-10 md:mt-12 lg:w-10/12">
            <Accordion type="single" collapsible>
              {faq.map((item, i) => (
                <AccordionItem key={item.pergunta} value={`faq-${i}`}>
                  <AccordionTrigger className="py-6 text-left text-base font-bold text-primary-deep hover:no-underline">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="pt-8 pb-14 md:pt-10 md:pb-20">
        <Container>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/15 bg-primary-soft px-6 py-12 text-center shadow-soft md:rounded-4xl md:px-14 md:py-16">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-extrabold text-primary-deep sm:text-3xl md:text-4xl">
                Ainda ficou com alguma dúvida?
              </h2>
              <p className="mt-4 text-base text-foreground/75 sm:text-lg">
                Nossa equipe está pronta para orientar sua família sobre vagas, períodos, visitas,
                matrículas e rematrículas.
              </p>
              <div className="mt-8 flex justify-center">
                <ContatoDialog>
                  <Button
                    size="lg"
                    className="min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-soft hover:opacity-90"
                  >
                    <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                    Falar com nossa equipe
                  </Button>
                </ContatoDialog>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
