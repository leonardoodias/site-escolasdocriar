import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { internacionalizacao } from "@/content/programas";

export function ChamadaInternacionalizacao() {
  return (
    <section className="pb-12 md:pb-16">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl bg-primary-deep px-6 py-9 text-primary-foreground md:flex-row md:items-center md:justify-between md:gap-10 md:rounded-4xl md:px-12 md:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
              {internacionalizacao.eyebrow}
            </p>
            <h2 className="mt-2.5 text-2xl font-extrabold text-primary-foreground sm:text-3xl">
              {internacionalizacao.titulo}
            </h2>
            <p className="mt-3 text-primary-foreground/85 md:text-lg">
              {internacionalizacao.subtitulo}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="min-h-12 w-fit shrink-0 rounded-full gradient-accent px-7 font-bold text-accent-foreground shadow-soft hover:opacity-90"
          >
            <Link to="/nossa-proposta" hash="internacionalizacao">
              Conheça o projeto
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
