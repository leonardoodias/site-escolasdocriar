import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

import ftdSchoolOfSchoolsLogo from "@/assets/ftd-school-of-schools-logo.webp";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { ExperienciasVida } from "@/components/site/ExperienciasVida";
import { pilares, metodologia, materialPedagogico } from "@/content/site";

const pilarIcons: Record<string, LucideIcon> = {
  BookOpen,
  Sprout,
  Lightbulb,
  HeartHandshake,
  Users,
};

const heroVisual = (
  <div className="relative mx-auto aspect-square w-full max-w-sm">
    <div aria-hidden="true" className="absolute inset-0 rounded-full bg-primary-soft" />
    <div
      aria-hidden="true"
      className="absolute -top-8 -right-6 size-32 rounded-full bg-accent/20 blur-2xl"
    />
    <div
      aria-hidden="true"
      className="absolute -bottom-10 -left-6 size-40 rounded-full bg-primary/15 blur-2xl"
    />
    <div aria-hidden="true" className="absolute inset-12 rounded-full border border-primary/15" />
    <div className="absolute inset-0 grid place-items-center">
      <GraduationCap className="size-20 text-primary/60" strokeWidth={1.25} aria-hidden="true" />
    </div>
  </div>
);

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
        visual={heroVisual}
      />

      <section className="bg-background py-10 md:py-12">
        <Container>
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  align="left"
                  eyebrow="Metodologia"
                  title={metodologia.title}
                  text={metodologia.text}
                />
              </div>
              <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-16">
                <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {metodologia.principios.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-base text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-10 md:py-12">
        <Container>
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading eyebrow="Pilares" title="O que conecta as duas escolas" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pilares.map((p) => {
                const Icon = pilarIcons[p.icon] ?? BookOpen;
                return (
                  <div
                    key={p.title}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-5 shadow-soft"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-deep">{p.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/30 py-10 md:py-12">
        <Container>
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-card shadow-soft">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:gap-12 lg:p-14">
              <div className="lg:col-span-7">
                <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                  Material e recursos
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-primary-deep md:text-4xl">
                  {materialPedagogico.title}
                </h2>
                <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
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

                <p className="mt-8 border-t border-border/70 pt-6 text-sm font-bold text-primary-deep">
                  {materialPedagogico.nota}
                </p>
              </div>

              <div className="relative isolate flex flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl bg-primary-soft p-10 lg:col-span-5 lg:p-12">
                <div
                  aria-hidden="true"
                  className="absolute -top-10 -right-10 size-40 rounded-full bg-accent/15 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-12 -left-10 size-44 rounded-full bg-primary/10 blur-2xl"
                />
                <p className="relative text-xs font-extrabold tracking-[0.18em] text-primary uppercase">
                  Soluções educacionais
                </p>
                <img
                  src={ftdSchoolOfSchoolsLogo}
                  alt={materialPedagogico.parceiros.join(" e ")}
                  width={367}
                  height={220}
                  loading="lazy"
                  className="relative w-full max-w-[320px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ExperienciasVida />

      <CtaMatriculas />
    </>
  );
}
