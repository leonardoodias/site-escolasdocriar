import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarCheck,
  Check,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

import ftdSchoolOfSchoolsLogo from "@/assets/ftd-school-of-schools-logo.webp";
import { ChamadaInternacionalizacao } from "@/components/site/ChamadaInternacionalizacao";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
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
  <div className="relative mx-auto aspect-square w-full max-w-[280px]">
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
        size="compact"
      >
        <Button asChild variant="cta" size="xl">
          <Link to="/matriculas">
            <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
            Agende uma visita
          </Link>
        </Button>
      </PageHero>

      <section className="section bg-background">
        <Container>
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

          <div className="mt-10 border-t border-border pt-8 md:pt-10">
            <p className="text-xs font-extrabold tracking-[0.16em] text-accent-ink uppercase">
              Pilares
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-primary-deep">
              O que conecta as duas escolas
            </h3>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {pilares.map((p) => {
                const Icon = pilarIcons[p.icon] ?? BookOpen;
                return (
                  <li key={p.title} className="flex gap-3 lg:flex-col">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-primary-deep">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/30 pt-13 pb-5 md:pt-18 md:pb-6">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-soft">
            <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
              <div className="lg:col-span-8">
                <p className="text-xs font-extrabold tracking-[0.16em] text-accent-ink uppercase">
                  Material e recursos
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-primary-deep md:text-3xl">
                  {materialPedagogico.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {materialPedagogico.text}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
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

                <p className="mt-5 border-t border-border/70 pt-4 text-sm font-bold text-primary-deep">
                  {materialPedagogico.nota}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-primary-soft p-6 lg:col-span-4">
                <p className="text-xs font-extrabold tracking-[0.18em] text-primary uppercase">
                  Soluções educacionais
                </p>
                <img
                  src={ftdSchoolOfSchoolsLogo}
                  alt={materialPedagogico.parceiros.join(" e ")}
                  width={367}
                  height={220}
                  loading="lazy"
                  className="w-full max-w-[220px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ChamadaInternacionalizacao variante="suave" className="bg-secondary/30 pb-13 md:pb-18" />

      <ExperienciasVida />

      <CtaMatriculas />
    </>
  );
}
