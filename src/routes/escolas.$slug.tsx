import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CalendarCheck, Check, MessageCircle } from "lucide-react";

import { GaleriaImagens } from "@/components/site/GaleriaImagens";

import { BrandLogo } from "@/components/site/BrandLogo";
import { CasteloDoCriarPage } from "@/components/site/CasteloDoCriarPage";
import { Container, SectionHeading } from "@/components/site/Section";
import { ExternalLink } from "@/components/site/ExternalLink";
import { LocalizacaoContato } from "@/components/site/LocalizacaoContato";
import { ProgramaCard } from "@/components/site/ProgramaCard";
import { getEscola } from "@/content/grupo";
import { Button } from "@/components/ui/button";
import { localizacaoCastelinho, unidades } from "@/content/contatos";
import { programasCastelinho } from "@/content/programas";

export const Route = createFileRoute("/escolas/$slug")({
  loader: ({ params }) => {
    const escola = getEscola(params.slug);
    if (!escola) throw notFound();
    return { escola };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Escola não encontrada — Escolas do Criar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { escola } = loaderData;
    const title = `${escola.nome} — Escolas do Criar`;
    return {
      meta: [
        { title },
        { name: "description", content: escola.resumo },
        { property: "og:title", content: title },
        { property: "og:description", content: escola.resumo },
      ],
    };
  },
  component: EscolaPage,
});

function EscolaPage() {
  const { escola } = Route.useLoaderData();

  if (escola.slug === "castelo-do-criar") {
    return <CasteloDoCriarPage escola={escola} />;
  }

  return (
    <>
      <section className="gradient-soft border-b border-border">
        <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="flex items-center gap-4">
              <BrandLogo
                src={escola.logo}
                nome={escola.nome}
                className="size-16 shrink-0 rounded-2xl bg-background p-1.5 shadow-soft"
                imgClassName="size-full"
              />
              <p className="text-xs font-extrabold tracking-[0.16em] text-accent-ink uppercase">
                {escola.faixa}
              </p>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold text-primary-deep md:text-5xl">
              {escola.nome}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{escola.descricao}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="xl">
                <Link to="/matriculas">
                  <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
                  Agende uma visita
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 rounded-full border-primary/30 bg-background px-7 font-bold text-primary hover:bg-primary-soft hover:text-primary"
              >
                <ExternalLink href={unidades.castelinho.whatsappUrl}>
                  <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                  Fale no WhatsApp
                </ExternalLink>
              </Button>
            </div>
          </div>
          <GaleriaImagens imagens={escola.imagens} />
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Diferenciais"
            title={`O que marca o dia a dia no ${escola.nomeCurto}`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {escola.destaques.map((d) => (
              <div
                key={d.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <h3 className="text-lg font-bold text-primary-deep">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>

          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {escola.proposta.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl bg-secondary/60 px-5 py-4 text-sm font-semibold text-foreground/85"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="aprendizagens" className="section scroll-mt-24 bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Aulas e programas"
            title="Aprendizagens e descobertas"
            text="Experiências que ampliam a rotina e respeitam o momento de cada turma."
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
            {programasCastelinho.map((programa) => (
              <ProgramaCard key={programa.nome} programa={programa} />
            ))}
          </div>
        </Container>
      </section>

      <LocalizacaoContato
        unidade="castelinho"
        localizacao={localizacaoCastelinho}
        mensagem="Venha conhecer o espaço preparado para os primeiros anos e conversar com a nossa equipe."
      />
    </>
  );
}
