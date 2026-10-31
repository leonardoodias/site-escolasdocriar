import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { categoriasNoticias, formatarData, noticias } from "@/content/noticias";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias e Comunicados — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Acompanhe notícias, eventos, projetos e comunicados oficiais da Escola Castelo do Criar em Santa Rosa de Viterbo/SP.",
      },
      { property: "og:title", content: "Notícias e Comunicados — Castelo do Criar" },
      {
        property: "og:description",
        content: "Tudo o que acontece na escola, sempre atualizado para as famílias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  const [categoria, setCategoria] = useState("Todas");
  const lista =
    categoria === "Todas" ? noticias : noticias.filter((n) => n.categoria === categoria);

  return (
    <>
      <PageHero
        eyebrow="Acontece no Castelo"
        title="Notícias e comunicados"
        text="Projetos, eventos, conquistas e avisos importantes para alunos e famílias."
      />

      <section className="section">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categoriasNoticias.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategoria(c)}
                aria-pressed={categoria === c}
                className={`min-h-11 rounded-full px-4 text-sm font-bold transition-colors ${
                  categoria === c
                    ? "gradient-accent text-accent-foreground"
                    : "bg-secondary text-primary-deep hover:bg-primary-soft"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((n) => (
              <article
                key={n.slug}
                className="card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <img
                  src={n.imagem}
                  alt={n.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-3/2 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">
                      {n.categoria}
                    </span>
                    <time dateTime={n.data} className="text-muted-foreground">
                      {formatarData(n.data)}
                    </time>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-primary-deep">{n.titulo}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{n.resumo}</p>
                  <Link
                    to="/noticias/$slug"
                    params={{ slug: n.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3"
                  >
                    Ler notícia
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
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
