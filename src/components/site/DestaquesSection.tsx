import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Container, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { destaques, proximasDatas } from "@/content/destaques";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

function DestaqueCta({ cta }: { cta: (typeof destaques)[number]["cta"] }) {
  const className =
    "min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-soft hover:opacity-90";

  if (cta.href) {
    return (
      <Button asChild size="lg" className={className}>
        <ExternalLink href={cta.href}>
          {cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </ExternalLink>
      </Button>
    );
  }

  return (
    <Button asChild size="lg" className={className}>
      <Link to={cta.to ?? "/"}>
        {cta.label}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </Button>
  );
}

export function DestaquesSection() {
  const [index, setIndex] = useState(0);
  const total = destaques.length;
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (total < 2 || prefersReducedMotion) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => window.clearInterval(timer);
  }, [total, prefersReducedMotion]);

  const atual = destaques[index];
  if (!atual) return null;

  return (
    <section className="section bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Destaques"
          title="Eventos e campanhas"
          text="Acompanhe o que está acontecendo nas Escolas do Criar."
        />

        <div className="mt-8 overflow-hidden rounded-3xl md:mt-10 md:rounded-4xl border border-border bg-card shadow-lift">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[20rem]">
              <img
                key={atual.id}
                src={atual.imagem}
                alt={atual.titulo}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-extrabold tracking-wide text-primary uppercase">
                  {atual.tag}
                </span>
                {atual.data && (
                  <span className="text-xs font-bold text-muted-foreground">{atual.data}</span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-primary-deep md:text-3xl">
                {atual.titulo}
              </h3>
              <p className="mt-3 text-muted-foreground">{atual.texto}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <DestaqueCta cta={atual.cta} />
                {total > 1 && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Destaque anterior"
                      className="min-h-11 min-w-11 rounded-full border-primary/30 text-primary"
                      onClick={() => setIndex((i) => (i - 1 + total) % total)}
                    >
                      <ChevronLeft className="size-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Próximo destaque"
                      className="min-h-11 min-w-11 rounded-full border-primary/30 text-primary"
                      onClick={() => setIndex((i) => (i + 1) % total)}
                    >
                      <ChevronRight className="size-5" />
                    </Button>
                  </div>
                )}
              </div>

              {total > 1 && (
                <div className="mt-7 flex gap-2">
                  {destaques.map((d, i) => (
                    <button
                      key={d.id}
                      type="button"
                      aria-label={`Ver destaque: ${d.titulo}`}
                      aria-current={i === index}
                      onClick={() => setIndex(i)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        i === index ? "w-8 bg-accent" : "w-2 bg-border",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-10 md:mt-16 md:pt-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
              Calendário
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-primary-deep md:text-3xl">
              Próximas datas
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Acompanhe os próximos compromissos do calendário escolar.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {proximasDatas.map((mes) => (
              <div key={mes.mes}>
                <h4 className="flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-primary uppercase">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {mes.mes}
                </h4>
                <ul className="mt-3">
                  {mes.itens.map((item) => (
                    <li
                      key={`${item.data}-${item.evento}`}
                      className="flex items-start gap-3 border-b border-border/60 py-3 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <span className="shrink-0 text-sm font-extrabold whitespace-nowrap text-primary-deep">
                        {item.data}
                      </span>
                      <span className="text-sm text-foreground/80">
                        {item.evento}
                        {item.detalhe && (
                          <span className="block text-xs text-muted-foreground">
                            {item.detalhe}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
