import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { internacionalizacao } from "@/content/programas";
import { cn } from "@/lib/utils";

export function ChamadaInternacionalizacao({
  className = "pb-12 md:pb-16",
  variante = "destaque",
}: {
  className?: string;
  /** "suave" é para páginas em que outra chamada deve ser a ação principal. */
  variante?: "destaque" | "suave";
}) {
  const suave = variante === "suave";

  return (
    <section className={className}>
      <Container>
        <div
          className={cn(
            "flex flex-col gap-6 rounded-3xl md:flex-row md:items-center md:justify-between md:gap-10",
            suave
              ? "bg-primary-soft px-6 py-7 md:px-10 md:py-8"
              : "bg-primary-deep px-6 py-9 text-primary-foreground md:rounded-4xl md:px-12 md:py-12",
          )}
        >
          <div className="max-w-2xl">
            <p
              className={cn(
                "text-xs font-extrabold tracking-[0.16em] uppercase",
                suave ? "text-primary" : "text-accent",
              )}
            >
              {internacionalizacao.eyebrow}
            </p>
            <h2
              className={cn(
                "mt-2.5 text-2xl font-extrabold",
                suave ? "text-primary-deep" : "text-primary-foreground sm:text-3xl",
              )}
            >
              {internacionalizacao.titulo}
            </h2>
            <p
              className={cn(
                "mt-3",
                suave ? "text-muted-foreground" : "text-primary-foreground/85 md:text-lg",
              )}
            >
              {internacionalizacao.subtitulo}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant={suave ? "outline" : "default"}
            className={cn(
              "min-h-12 w-fit shrink-0 rounded-full px-7 font-bold",
              suave
                ? "border-primary/30 bg-background text-primary hover:bg-background hover:text-primary"
                : "gradient-accent text-accent-foreground shadow-soft hover:opacity-90",
            )}
          >
            <Link to="/internacionalizacao">
              Conheça o projeto
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
