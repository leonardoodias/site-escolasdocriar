import { createFileRoute } from "@tanstack/react-router";

import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { projetos } from "@/content/projetos";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos e Atividades — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Educação financeira, sustentabilidade, cultura, esportes e gincanas: conheça os projetos da Escola Castelo do Criar.",
      },
      { property: "og:title", content: "Projetos e Atividades — Castelo do Criar" },
      {
        property: "og:description",
        content: "Projetos que ampliam repertório, criatividade e convivência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Aprender além da sala de aula"
        text="Nossos projetos conectam conteúdo, prática e comunidade — com atividades que acontecem ao longo de todo o ano letivo."
      />

      <section className="section">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {projetos.map((p) => (
              <article
                key={p.slug}
                className="card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <img
                  src={p.imagem}
                  alt={p.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-3/2 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                    {p.categoria}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-primary-deep">{p.nome}</h2>
                  <p className="mt-2 text-sm font-semibold text-foreground/80">{p.resumo}</p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.detalhe}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
