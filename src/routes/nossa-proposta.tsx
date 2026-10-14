import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  HeartHandshake,
  Lightbulb,
  LineChart,
  ListChecks,
  Plus,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

import castelinhoImg from "@/assets/castelinho.jpg";
import casteloImg from "@/assets/castelo-fachada.jpg";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import {
  etapasDesenvolvimento,
  pilares,
  sistemaEnsino,
  recursosAprendizagem,
  ensinoMedioDestaque,
} from "@/content/site";
import { educacaoFinanceiraTopicos } from "@/content/projetos";

const pilarIcons: Record<string, LucideIcon> = {
  BookOpen,
  Sprout,
  Lightbulb,
  HeartHandshake,
  Users,
};

const recursoIcons: Record<string, LucideIcon> = {
  BookOpen,
  ListChecks,
  Sparkles,
  LineChart,
};

const etapaImagens: Record<string, { src: string; alt: string }> = {
  "Castelinho do Criar": {
    src: castelinhoImg,
    alt: "Crianças do Castelinho do Criar em atividade",
  },
  "Castelo do Criar": { src: casteloImg, alt: "Alunos do Castelo do Criar" },
};

const destaquesFinanceiros = [
  "Escolhas do dia a dia",
  "Planejamento",
  "Consumo consciente",
  "Objetivos de curto e longo prazo",
  "Responsabilidade",
];

export const Route = createFileRoute("/nossa-proposta")({
  head: () => ({
    meta: [
      { title: "Nosso Jeito de Educar — Escolas do Criar" },
      {
        name: "description",
        content:
          "Conheça a proposta pedagógica do Castelinho do Criar e do Castelo do Criar, do berçário ao Ensino Médio.",
      },
      { property: "og:title", content: "Nosso Jeito de Educar — Escolas do Criar" },
      {
        property: "og:description",
        content: "Um percurso de aprendizagem que acompanha cada etapa do desenvolvimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NossaProposta,
});

function NossaProposta() {
  return (
    <>
      <PageHero
        eyebrow="Proposta pedagógica"
        title="Aprender com sentido, em cada etapa do desenvolvimento"
        text="Nas Escolas do Criar, cada fase da vida escolar pede experiências, estímulos e desafios diferentes. Nossa proposta acompanha o desenvolvimento dos alunos desde os primeiros meses de vida até o Ensino Médio, respeitando cada etapa e construindo aprendizagem, autonomia e formação humana."
      />

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Duas escolas, uma jornada"
            title="Cada etapa tem seu jeito de aprender"
          />

          <div className="mt-12 space-y-14">
            {etapasDesenvolvimento.map((etapa, i) => {
              const img = etapaImagens[etapa.escola];
              const tagClass =
                i === 0 ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary";
              return (
                <div
                  key={etapa.escola}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  {img && (
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className={
                        "aspect-4/3 w-full rounded-4xl object-cover shadow-lift" +
                        (i === 1 ? " lg:order-2" : "")
                      }
                    />
                  )}
                  <div>
                    <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                      {etapa.faixa}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold text-primary-deep">
                      {etapa.escola}
                    </h3>
                    <p className="mt-3 text-lg font-bold text-foreground/80">{etapa.frase}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {etapa.destaques.map((d) => (
                        <li
                          key={d}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${tagClass}`}
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-sand">
        <Container>
          <SectionHeading eyebrow="Pilares" title="O que conecta as duas escolas" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {pilares.map((p) => {
              const Icon = pilarIcons[p.icon] ?? BookOpen;
              return (
                <div key={p.title} className="flex items-start gap-3 rounded-2xl bg-background p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-primary-deep">{p.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-secondary/30">
        <Container>
          <SectionHeading title={sistemaEnsino.title} text={sistemaEnsino.text} />

          <div className="relative mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {sistemaEnsino.responsabilidades.map((r) => (
              <article
                key={r.title}
                className="rounded-3xl border border-border bg-card p-5 shadow-soft"
              >
                <h3 className="text-base font-extrabold text-primary-deep">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </article>
            ))}
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 hidden size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full gradient-accent text-accent-foreground shadow-soft sm:grid"
            >
              <Plus className="size-4" />
            </span>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-x-8 gap-y-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2">
            {recursosAprendizagem.map((item) => {
              const Icon = recursoIcons[item.icon] ?? BookOpen;
              return (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold text-foreground/85">{item.title}</span>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-primary p-6 text-primary-foreground shadow-soft md:p-8">
            <p className="text-xs font-extrabold tracking-[0.16em] text-primary-foreground/80 uppercase">
              {ensinoMedioDestaque.eyebrow}
            </p>
            <h3 className="mt-2 text-xl font-extrabold">{ensinoMedioDestaque.title}</h3>
            <p className="mt-3 text-sm text-primary-foreground/90">{ensinoMedioDestaque.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {ensinoMedioDestaque.diferenciais.map((d) => (
                <li key={d} className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-6 flex max-w-3xl items-start gap-2 text-xs text-muted-foreground/80">
            <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              <strong className="font-bold text-foreground/70">
                {sistemaEnsino.regularizacaoTitle}:
              </strong>{" "}
              {sistemaEnsino.regularizacaoText}
            </span>
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Na prática"
            title="Aprender também acontece na prática"
            text="A educação financeira é um exemplo dos projetos e experiências que atravessam os segmentos do Castelo do Criar."
          />
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
            {educacaoFinanceiraTopicos
              .filter((t) => destaquesFinanceiros.includes(t))
              .map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-secondary/70 px-4 py-2 text-sm font-semibold text-foreground/85"
                >
                  {t}
                </li>
              ))}
          </ul>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
