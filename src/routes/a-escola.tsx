import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import heroImg from "@/assets/hero-escola.jpg";
import familiaImg from "@/assets/familia-escola.jpg";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { estrutura, pilares } from "@/content/site";

export const Route = createFileRoute("/a-escola")({
  head: () => ({
    meta: [
      { title: "A Escola — Castelo do Criar | Santa Rosa de Viterbo/SP" },
      {
        name: "description",
        content:
          "Conheça a história, a estrutura e os valores da Escola Castelo do Criar, em Santa Rosa de Viterbo/SP.",
      },
      { property: "og:title", content: "A Escola — Castelo do Criar" },
      {
        property: "og:description",
        content: "História, estrutura e valores da Escola Castelo do Criar.",
      },
      { property: "og:url", content: "/a-escola" },
    ],
    links: [{ rel: "canonical", href: "/a-escola" }],
  }),
  component: AEscola,
});

function AEscola() {
  return (
    <>
      <PageHero
        eyebrow="A Escola"
        title="Um lugar onde aprender faz sentido"
        text="O Castelo do Criar é uma escola de Educação Infantil, Ensino Fundamental e Ensino Médio em Santa Rosa de Viterbo/SP, com acompanhamento próximo das famílias e olhar atento a cada aluno."
      />

      <section className="section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={heroImg}
              alt="Alunos da Escola Castelo do Criar em ambiente escolar"
              width={1600}
              height={1008}
              loading="lazy"
              className="aspect-3/2 w-full rounded-4xl object-cover shadow-lift"
            />
            <div>
              <h2 className="text-3xl font-extrabold text-primary-deep md:text-4xl">
                Nossa história
              </h2>
              <p className="mt-4 text-muted-foreground">
                A escola nasceu do desejo de oferecer à cidade uma educação que unisse excelência
                acadêmica e acolhimento verdadeiro. Desde então, construímos uma comunidade escolar
                onde cada criança e cada adolescente é conhecido pelo nome.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nosso trabalho é orientado por um princípio simples: educar é criar possibilidades.
                Isso significa preparar os estudantes para os desafios acadêmicos e, ao mesmo tempo,
                para a vida em sociedade.
              </p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { t: "Missão", d: "Formar pessoas capazes de aprender, escolher e realizar." },
                  { t: "Visão", d: "Ser referência em educação integral na região." },
                  { t: "Valores", d: "Respeito, ética, responsabilidade e convivência." },
                ].map((i) => (
                  <div key={i.t} className="rounded-2xl bg-secondary/70 p-4">
                    <dt className="font-display font-bold text-primary">{i.t}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{i.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-secondary/50">
        <Container>
          <SectionHeading
            eyebrow="Nossos pilares"
            title="O que sustenta nosso trabalho"
            text="Cinco pilares orientam o planejamento pedagógico e a rotina da escola."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {pilares.map((p) => (
              <article
                key={p.title}
                className="card-hover rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <h3 className="text-lg font-bold text-primary-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-deep md:text-4xl">
                Nossa estrutura
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ambientes pensados para cada faixa etária, com segurança, organização e espaço para
                brincar, estudar e criar.
              </p>
              <ul className="mt-6 space-y-3">
                {estrutura.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={familiaImg}
              alt="Comunidade escolar reunida em evento da escola"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-3/2 w-full rounded-4xl object-cover shadow-lift"
            />
          </div>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
