import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { Button } from "@/components/ui/button";
import { destaques } from "@/content/destaques";

export const Route = createFileRoute("/destaques")({
  head: () => ({
    meta: [
      { title: "Eventos e destaques — Escolas do Criar" },
      {
        name: "description",
        content:
          "Eventos, campanhas e comunicados das Escolas do Criar: Festa da Família, matrículas e projetos especiais.",
      },
      { property: "og:title", content: "Eventos e destaques — Escolas do Criar" },
      {
        property: "og:description",
        content: "Acompanhe eventos, campanhas e comunicados das Escolas do Criar.",
      },
    ],
  }),
  component: DestaquesPage,
});

function DestaquesPage() {
  return (
    <>
      <PageHero
        eyebrow="Comunicação"
        title="Eventos e destaques"
        text="Tudo o que está acontecendo nas nossas escolas, em um só lugar."
      />

      <section className="section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destaques.map((d) => (
              <article
                key={d.id}
                className="card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <img
                  src={d.imagem}
                  alt={d.titulo}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-extrabold tracking-wide text-primary uppercase">
                      {d.tag}
                    </span>
                    {d.data && (
                      <span className="text-xs font-bold text-muted-foreground">{d.data}</span>
                    )}
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-primary-deep">{d.titulo}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.texto}</p>
                  <div className="mt-6">
                    {d.cta.href ? (
                      <Button
                        asChild
                        variant="outline"
                        className="min-h-11 rounded-full border-primary/30 font-bold text-primary"
                      >
                        <ExternalLink href={d.cta.href}>
                          {d.cta.label}
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </ExternalLink>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="min-h-11 rounded-full border-primary/30 font-bold text-primary"
                      >
                        <Link to={d.cta.to ?? "/"}>
                          {d.cta.label}
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    )}
                  </div>
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
