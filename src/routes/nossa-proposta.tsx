import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { pilares, metodologia, materialPedagogico } from "@/content/site";

const pilarIcons: Record<string, LucideIcon> = {
  BookOpen,
  Sprout,
  Lightbulb,
  HeartHandshake,
  Users,
};

export const Route = createFileRoute("/nossa-proposta")({
  head: () => ({
    meta: [
      { title: "Nosso Jeito de Educar — Escolas do Criar" },
      {
        name: "description",
        content:
          "A metodologia das Escolas do Criar: princípios pedagógicos, pilares e material de apoio à aprendizagem.",
      },
      { property: "og:title", content: "Nosso Jeito de Educar — Escolas do Criar" },
      {
        property: "og:description",
        content: "Como educamos e quais princípios orientam nossa prática pedagógica.",
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
        text="Nas Escolas do Criar, aprendizagem, desenvolvimento e formação humana caminham juntos. Nossa proposta respeita cada etapa, estimula autonomia, criatividade e responsabilidade e conecta conhecimento a experiências que fazem sentido para os alunos."
        wide
      />

      <section className="section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                align="left"
                eyebrow="Metodologia"
                title={metodologia.title}
                text={metodologia.text}
              />
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-3">
              {metodologia.principios.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-base text-foreground/85">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
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
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-3">
                <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                  Material e recursos
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-primary-deep md:text-4xl">
                  {materialPedagogico.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  {materialPedagogico.text}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {materialPedagogico.destaques.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm font-semibold text-foreground/85"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-sm font-bold text-primary-deep">
                  {materialPedagogico.nota}
                </p>
              </div>

              {/*
                Logos oficiais da FTD Educação e da School of Schools ainda não
                estão disponíveis nos assets do projeto — ver pendência na
                entrega. Até lá, os parceiros são citados em texto institucional
                neutro (sem recriar as marcas).
              */}
              <div className="flex flex-col justify-center gap-6 rounded-3xl bg-secondary/40 p-6 lg:col-span-2 lg:p-8">
                <p className="text-xs font-extrabold tracking-[0.16em] text-muted-foreground uppercase">
                  Soluções educacionais utilizadas
                </p>
                <div className="space-y-5">
                  {materialPedagogico.parceiros.map((nome) => (
                    <p key={nome} className="text-2xl font-extrabold text-primary-deep">
                      {nome}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
