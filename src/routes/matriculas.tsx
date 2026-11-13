import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Navigation,
  Loader2,
  MessageCircle,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
import { ContatoDialog, UnidadesContato } from "@/components/site/ContatoDialog";
import {
  errosDaValidacao,
  solicitacaoSchema,
  solicitarContato,
  type CampoSolicitacao,
} from "@/lib/solicitar-contato";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { localizacaoCastelinho, localizacaoCastelo, unidades } from "@/content/contatos";
import { segmentos } from "@/content/segmentos";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/matriculas")({
  head: () => ({
    meta: [
      { title: "Matrículas, visitas e contato — Escolas do Criar" },
      {
        name: "description",
        content:
          "Matrículas abertas no Castelinho do Criar e na Escola Castelo do Criar, em Santa Rosa de Viterbo/SP. Agende uma visita e fale com cada unidade: WhatsApp, telefone, endereço e horário de atendimento.",
      },
      { property: "og:title", content: "Matrículas, visitas e contato — Escolas do Criar" },
      {
        property: "og:description",
        content:
          "Agende uma visita e fale com o Castelinho do Criar ou o Castelo do Criar: WhatsApp, telefone, endereço e horários.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Matriculas,
});

/** Cada unidade mantém os dados que a antiga página Contato exibia; divergências em docs/conteudo-pendente.md. */
const locaisUnidades = [
  { unidade: unidades.castelinho, localizacao: localizacaoCastelinho },
  { unidade: unidades.castelo, localizacao: localizacaoCastelo.paginaContato },
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

type Erros = Partial<Record<CampoSolicitacao, string>>;

const FALHA_ENVIO =
  "Não foi possível enviar sua solicitação agora. Tente novamente em instantes ou fale com a nossa equipe pelo WhatsApp.";

const beneficios = [
  {
    icon: School,
    titulo: "Explore os ambientes",
    texto: "Conheça de perto os espaços onde seu filho vai aprender, brincar e conviver.",
  },
  {
    icon: Users,
    titulo: "Converse com a equipe",
    texto: "Tire suas dúvidas com nossa equipe e a direção sobre a proposta pedagógica.",
  },
  {
    icon: CalendarCheck,
    titulo: "Agende sua visita",
    texto: "Nossa equipe entra em contato para combinar o melhor dia para sua família.",
  },
];

const campoClass =
  "mt-2 min-h-12 rounded-2xl border-border bg-background px-4 shadow-none transition-[border-color,box-shadow] focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 aria-invalid:border-destructive aria-invalid:ring-destructive/15";

/** Unidade que atende cada nível, exibida na opção. */
const unidadeDoSegmento = (slug: string) =>
  slug === "educacao-infantil" ? "Castelinho do Criar" : "Castelo do Criar";

function MensagemErro({ id, texto }: { id: string; texto?: string | undefined }) {
  if (!texto) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-semibold text-destructive">
      {texto}
    </p>
  );
}

function Matriculas() {
  const [erros, setErros] = useState<Erros>({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const confirmacaoRef = useRef<HTMLDivElement>(null);

  // Leva a confirmação para a tela (no celular ela substitui um formulário longo).
  useEffect(() => {
    if (enviado) confirmacaoRef.current?.focus();
  }, [enviado]);

  /** Foca o primeiro campo com erro, na ordem do formulário. */
  function focarPrimeiroErro(form: HTMLFormElement, novos: Erros) {
    const campo = (["responsavel", "aluno", "telefone", "email", "segmento"] as const).find(
      (c) => novos[c],
    );
    if (campo) form.querySelector<HTMLElement>(`[name="${campo}"]`)?.focus();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (enviando) return;
    const form = e.currentTarget;
    // Sem opção marcada, o nível não entra no FormData; o vazio mantém a mensagem de validação atual.
    const dados = {
      segmento: "",
      ...Object.fromEntries(
        [...new FormData(form)].map(([campo, valor]) => [campo, String(valor)]),
      ),
    };

    const lido = solicitacaoSchema.safeParse(dados);
    if (!lido.success) {
      const novos = errosDaValidacao(lido.error);
      setErros(novos);
      focarPrimeiroErro(form, novos);
      toast.error("Revise os campos destacados.");
      return;
    }

    setErros({});
    setEnviando(true);
    try {
      // O sucesso só aparece depois que o serviço de e-mail confirma o envio.
      const resultado = await solicitarContato({ data: dados });
      if (resultado.ok) {
        toast.success("Solicitação enviada! Entraremos em contato em breve.");
        form.reset();
        setEnviado(true);
      } else if (resultado.motivo === "validacao") {
        setErros(resultado.erros);
        focarPrimeiroErro(form, resultado.erros);
        toast.error("Revise os campos destacados.");
      } else {
        toast.error(FALHA_ENVIO);
      }
    } catch {
      toast.error(FALHA_ENVIO);
    } finally {
      setEnviando(false);
    }
  }

  const ariaCampo = (campo: CampoSolicitacao) => ({
    "aria-invalid": erros[campo] ? true : undefined,
    "aria-describedby": erros[campo] ? `${campo}-erro` : undefined,
  });

  return (
    <>
      <PageHero
        size="compact"
        wide
        eyebrow="Matrículas abertas"
        title="O futuro do seu filho começa com uma visita."
        text="Conheça o Castelinho do Criar e o Castelo do Criar de perto: os ambientes de aprendizagem, nossa equipe e a direção."
        supportText="Preencha o formulário e nossa equipe entrará em contato para organizar sua visita e esclarecer suas dúvidas."
      />

      {/* Formulário + benefícios da visita */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:gap-12">
            <div className="rounded-4xl border border-border/70 bg-card p-6 shadow-lift sm:p-8 md:p-10">
              {enviado ? (
                <div
                  ref={confirmacaoRef}
                  role="status"
                  tabIndex={-1}
                  className="flex scroll-mt-28 flex-col items-center py-10 text-center outline-none"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-primary-soft text-primary">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-2xl font-extrabold text-primary-deep">
                    Solicitação enviada!
                  </h2>
                  <p className="mt-2 max-w-sm text-base text-muted-foreground">
                    Recebemos seus dados. Nossa equipe entrará em contato em breve para combinar a
                    sua visita.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEnviado(false)}
                    className="mt-6 min-h-11 rounded-full border-primary/30 px-6 font-bold text-primary"
                  >
                    Enviar outra solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate aria-labelledby="titulo-formulario">
                  <h2 id="titulo-formulario" className="text-2xl font-extrabold text-primary-deep">
                    Solicite sua visita
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Campos com * são obrigatórios.
                  </p>

                  <div className="mt-7 space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="responsavel">Nome do responsável *</Label>
                        <Input
                          id="responsavel"
                          name="responsavel"
                          autoComplete="name"
                          aria-required="true"
                          className={campoClass}
                          {...ariaCampo("responsavel")}
                        />
                        <MensagemErro id="responsavel-erro" texto={erros.responsavel} />
                      </div>
                      <div>
                        <Label htmlFor="aluno">Nome do aluno *</Label>
                        <Input
                          id="aluno"
                          name="aluno"
                          autoComplete="off"
                          aria-required="true"
                          className={campoClass}
                          {...ariaCampo("aluno")}
                        />
                        <MensagemErro id="aluno-erro" texto={erros.aluno} />
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
                          autoComplete="tel"
                          placeholder="(16) 99999-9999"
                          aria-required="true"
                          className={campoClass}
                          {...ariaCampo("telefone")}
                        />
                        <MensagemErro id="telefone-erro" texto={erros.telefone} />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          aria-required="true"
                          className={campoClass}
                          {...ariaCampo("email")}
                        />
                        <MensagemErro id="email-erro" texto={erros.email} />
                      </div>
                    </div>

                    <fieldset aria-describedby={erros.segmento ? "segmento-erro" : undefined}>
                      <legend className="text-sm font-medium">Nível de ensino *</legend>
                      <div className="mt-2 grid gap-3 sm:grid-cols-3">
                        {segmentos.map((s) => (
                          <label
                            key={s.slug}
                            className={cn(
                              "flex min-h-11 cursor-pointer flex-col rounded-2xl border-2 bg-background px-4 py-3.5 transition-colors hover:border-primary/40 has-checked:border-primary has-checked:bg-primary-soft has-focus-visible:ring-4 has-focus-visible:ring-primary/15",
                              erros.segmento ? "border-destructive/60" : "border-border",
                            )}
                          >
                            <input
                              type="radio"
                              name="segmento"
                              value={s.nome}
                              className="sr-only"
                              aria-required="true"
                            />
                            <span className="text-sm font-extrabold text-primary-deep">
                              {s.nome}
                            </span>
                            <span className="mt-0.5 text-xs text-muted-foreground">{s.faixa}</span>
                            <span className="mt-2 text-xs font-bold text-accent-ink">
                              {unidadeDoSegmento(s.slug)}
                            </span>
                          </label>
                        ))}
                      </div>
                      <MensagemErro id="segmento-erro" texto={erros.segmento} />
                    </fieldset>

                    <div>
                      <Label htmlFor="mensagem">
                        Mensagem{" "}
                        <span className="font-normal text-muted-foreground">(opcional)</span>
                      </Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        rows={4}
                        maxLength={2000}
                        placeholder="Conte o que gostaria de saber ou o melhor período para a visita."
                        className={cn(campoClass, "py-3")}
                      />
                    </div>
                    {/* Campo invisível contra envios automáticos; pessoas não o veem nem o alcançam. */}
                    <div aria-hidden="true" className="sr-only">
                      <label htmlFor="site">Site</label>
                      <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    disabled={enviando}
                    aria-busy={enviando}
                    className="mt-8 w-full"
                  >
                    {enviando ? (
                      <>
                        <Loader2
                          className="mr-2 size-5 animate-spin motion-reduce:animate-none"
                          aria-hidden="true"
                        />
                        Enviando…
                      </>
                    ) : (
                      "Solicitar minha visita"
                    )}
                  </Button>
                  <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                    <ShieldCheck
                      className="mt-px size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      Seus dados serão usados apenas para entrarmos em contato sobre a visita e a
                      matrícula, conforme a nossa{" "}
                      <Link
                        to="/politica-de-privacidade"
                        className="font-bold text-primary underline-offset-4 hover:underline"
                      >
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </p>
                </form>
              )}
            </div>

            <aside aria-labelledby="titulo-beneficios" className="lg:pt-10">
              <h2 id="titulo-beneficios" className="text-2xl font-extrabold text-primary-deep">
                O que você encontra na visita
              </h2>
              <ul className="mt-6 space-y-4">
                {beneficios.map(({ icon: Icone, titulo, texto }) => (
                  <li
                    key={titulo}
                    className="flex gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-soft"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Icone className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-primary-deep">{titulo}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{texto}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefere falar agora?{" "}
                <a
                  href="#atendimento"
                  className="touch-target font-bold text-primary underline-offset-4 hover:underline"
                >
                  Veja os canais de atendimento
                </a>
                .
              </p>
            </aside>
          </div>
        </Container>
      </section>

      {/* Atendimento às famílias (destino de /contato) */}
      <section id="atendimento" className="section scroll-mt-24 bg-secondary/40">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Atendimento às famílias"
            title="Fale com a nossa equipe"
            text="Estamos à disposição para tirar dúvidas, apresentar a proposta pedagógica e receber sua família para uma visita — no Castelinho do Criar ou no Castelo do Criar."
          />
          <div className="mt-8 md:mt-10">
            <UnidadesContato />
          </div>
        </Container>
      </section>

      {/* Localização das unidades */}
      <section id="unidades" className="section scroll-mt-24">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Localização"
            title="Onde ficam as nossas unidades"
            text="Endereço, horário de atendimento e rota de cada escola."
          />
          <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-2 lg:gap-8">
            {locaisUnidades.map(({ unidade, localizacao }) => (
              <article
                key={unidade.nome}
                className="flex flex-col overflow-hidden rounded-4xl border border-border/70 bg-card shadow-soft"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-extrabold text-primary-deep">{unidade.nome}</h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                      <span className="text-foreground/85">
                        {localizacao.endereco.map((linha) => (
                          <span key={linha} className="block">
                            {linha}
                          </span>
                        ))}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                      <span className="text-foreground/85">{unidade.horario}</span>
                    </li>
                  </ul>
                  {localizacao.mapsDirections && (
                    <Button
                      asChild
                      variant="outline"
                      className="mt-6 min-h-11 rounded-full border-primary/30 px-5 font-bold text-primary hover:bg-primary-soft"
                    >
                      <a
                        href={localizacao.mapsDirections}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 size-4" aria-hidden="true" />
                        Ver rota no mapa
                      </a>
                    </Button>
                  )}
                </div>
                {localizacao.mapsEmbed && (
                  <iframe
                    src={localizacao.mapsEmbed}
                    title={`Mapa da localização do ${unidade.nome}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-auto h-72 w-full border-0 border-t border-border/70"
                  />
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pt-8 pb-8 md:pt-12 md:pb-10">
        <Container>
          <SectionHeading
            align="left"
            title="Perguntas Frequentes"
            text="Tire suas principais dúvidas sobre matrícula e rematrícula nas Escolas do Criar."
          />
          <div className="mt-8 md:mt-10 lg:w-10/12">
            <Accordion type="single" collapsible>
              {faq.map((item, i) => (
                <AccordionItem key={item.pergunta} value={`faq-${i}`}>
                  <AccordionTrigger className="py-4 text-left text-base font-bold text-primary-deep hover:no-underline">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-14">
        <Container>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/15 bg-primary-soft px-6 py-9 text-center shadow-soft md:rounded-4xl md:px-14 md:py-16">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-primary-deep md:text-4xl">
                Ainda ficou com alguma dúvida?
              </h2>
              <p className="mt-4 text-base text-foreground/75 md:text-lg">
                Nossa equipe está pronta para orientar sua família sobre vagas, períodos, visitas,
                matrículas e rematrículas.
              </p>
              <div className="mt-8 flex justify-center">
                <ContatoDialog>
                  <Button variant="cta" size="xl">
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
