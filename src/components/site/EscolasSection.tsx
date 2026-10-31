import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { Container, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { escolas } from "@/content/grupo";

export function EscolasSection({
  heading = true,
  detailed = false,
}: {
  heading?: boolean;
  /** Enriquece cada card com posicionamento, focos pedagógicos (tags) e CTA nomeado. */
  detailed?: boolean;
}) {
  return (
    <section className="section">
      <Container>
        {heading && (
          <SectionHeading
            title="Conheça nossas escolas"
            text="Duas propostas complementares para acompanhar cada fase do desenvolvimento."
          />
        )}

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
          {escolas.map((escola, i) => (
            <article
              key={escola.slug}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl md:rounded-4xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={escola.imagem}
                  alt={`Alunos da escola ${escola.nome}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <BrandLogo
                  src={escola.logo}
                  nome={escola.nome}
                  className="absolute bottom-4 left-4 size-20 rounded-2xl bg-background/95 p-2 shadow-soft backdrop-blur"
                  imgClassName="size-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
                  {escola.faixa}
                </p>
                <h3 className="mt-2.5 text-2xl font-extrabold text-primary-deep">{escola.nome}</h3>
                <p className="mt-2.5 text-muted-foreground">
                  {detailed ? escola.posicionamento : escola.resumo}
                </p>
                {detailed && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {escola.focos.map((foco) => (
                      <li
                        key={foco}
                        className={
                          i === 0
                            ? "rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent-ink"
                            : "rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary"
                        }
                      >
                        {foco}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="min-h-11 rounded-full border-primary/30 font-bold text-primary hover:bg-primary-soft"
                  >
                    <Link to="/escolas/$slug" params={{ slug: escola.slug }}>
                      {detailed ? escola.ctaLabel : "Conhecer escola"}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
