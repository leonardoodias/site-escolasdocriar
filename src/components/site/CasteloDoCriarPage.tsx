import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Compass,
  Globe,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";

import casteloImg from "@/assets/hero-escola.jpg";
import logoCastelo3d from "@/assets/logo-castelo-3d.png";
import { EtapasEnsino } from "@/components/site/EtapasEnsino";
import { LocalizacaoContato } from "@/components/site/LocalizacaoContato";
import { Container, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { localizacaoCastelo, unidades } from "@/content/contatos";
import { programasCastelo } from "@/content/programas";
import type { Escola } from "@/content/grupo";

const pilaresProposta = [
  {
    icon: GraduationCap,
    title: "Excelência acadêmica",
    description: "Desenvolvimento consistente dos conhecimentos e competências acadêmicas.",
  },
  {
    icon: Compass,
    title: "Autonomia",
    description:
      "Incentivo para que o estudante desenvolva responsabilidade sobre sua própria aprendizagem.",
  },
  {
    icon: HeartHandshake,
    title: "Formação humana",
    description: "Desenvolvimento de valores, convivência, respeito e responsabilidade.",
  },
  {
    icon: Globe,
    title: "Consciência social",
    description: "Formação de estudantes capazes de compreender seu papel na sociedade.",
  },
];

export function CasteloDoCriarPage({ escola }: { escola: Escola }) {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-primary-deep py-16 text-primary-foreground md:py-24">
        <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-90" />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-2xl"
        />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.18em] text-accent uppercase">
              Escola Castelo do Criar
            </p>
            <h1 className="mt-4 text-3xl leading-tight font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
              Educação com propósito. Formação com excelência.
            </h1>
            <p className="mt-5 text-base text-primary-foreground/85 sm:text-lg">
              A Escola Castelo do Criar oferece Ensino Fundamental e Ensino Médio com uma proposta
              voltada à formação integral, unindo excelência acadêmica, desenvolvimento humano e
              construção de valores.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full gradient-accent px-7 font-bold text-accent-foreground shadow-lift hover:opacity-90"
              >
                <Link to="/matriculas">
                  <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
                  Agende uma visita
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 rounded-full border-white/40 bg-transparent px-7 font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <ExternalLink href={unidades.castelo.whatsappUrl}>
                  <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                  Fale com a secretaria
                </ExternalLink>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/15 shadow-lift">
              <img
                src={casteloImg}
                alt="Ambiente da Escola Castelo do Criar"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute right-4 bottom-4 flex items-center gap-3 rounded-2xl bg-background/95 p-3 shadow-soft backdrop-blur-md">
                <img
                  src={logoCastelo3d}
                  alt="Logo 3D Castelo do Criar"
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-sm font-bold text-primary-deep">
                    Castelo do Criar
                  </span>
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                    Fundamental e Médio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. QUEM SOMOS */}
      <section className="section bg-background">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                Quem Somos
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-primary-deep sm:text-3xl md:text-4xl">
                Uma escola para aprender, crescer e construir novos caminhos
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A Escola Castelo do Criar, localizada em Santa Rosa de Viterbo, é uma instituição
                particular de ensino que oferece Ensino Fundamental e Ensino Médio com foco na
                formação integral dos estudantes.
              </p>
              <p>
                Sua proposta pedagógica une excelência acadêmica, desenvolvimento humano e
                construção de valores, preparando os alunos para aprender com autonomia,
                responsabilidade e consciência social.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. PROPOSTA PEDAGÓGICA */}
      <section className="section bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Proposta Pedagógica"
            title="Formação que vai além do conteúdo"
            text="Princípios que orientam a prática diária e preparam nossos estudantes para todas as etapas da vida."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilaresProposta.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.title}
                  className="card-hover flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary-deep">{pilar.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {pilar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <EtapasEnsino etapas={programasCastelo} />

      <LocalizacaoContato
        unidade="castelo"
        localizacao={localizacaoCastelo.paginaEscola}
        mensagem="Nossa equipe está pronta para receber você e apresentar nossa estrutura completa."
      />
    </>
  );
}
