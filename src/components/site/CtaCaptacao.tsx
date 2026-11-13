import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { escolas } from "@/content/grupo";

/**
 * Chamada de matrículas que leva ao formulário único de Fale Conosco com o motivo já marcado.
 * `?assunto=` pré-seleciona a opção; `#formulario` abre a página direto no formulário.
 */
export function CtaCaptacao() {
  const [castelinho, castelo] = escolas;

  return (
    <section className="section">
      <Container>
        <div className="relative grid overflow-hidden rounded-3xl bg-primary-deep text-primary-foreground shadow-lift md:rounded-4xl lg:grid-cols-12">
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-16 size-72 rounded-full bg-primary/40 blur-3xl"
          />
          <div className="relative px-6 py-10 sm:px-10 md:py-14 lg:col-span-7 lg:px-14">
            <p className="text-xs font-extrabold tracking-eyebrow text-accent uppercase">
              Matrículas abertas
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground md:text-4xl">
              O próximo capítulo da história do seu filho começa aqui.
            </h2>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              Descubra nossa proposta pedagógica, conheça nossos espaços e converse com a equipe
              sobre as possibilidades de matrícula.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="cta" size="xl">
                <Link to="/faleconosco" search={{ assunto: "matricula" }} hash="formulario">
                  Quero saber sobre matrículas
                  <ArrowRight className="ml-2 size-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full border-white/50 bg-transparent font-bold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Link to="/faleconosco" search={{ assunto: "visita" }} hash="formulario">
                  <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
                  Agendar uma visita
                </Link>
              </Button>
            </div>
          </div>

          {/* Fotos reais das duas unidades, decorativas: os nomes já aparecem na seção anterior. */}
          {castelinho && castelo && (
            <div aria-hidden="true" className="relative hidden min-h-80 lg:col-span-5 lg:block">
              <img
                src={castelinho.imagem}
                alt=""
                loading="lazy"
                className="absolute top-10 right-24 h-56 w-72 -rotate-3 rounded-3xl border-4 border-white/90 object-cover shadow-lift"
              />
              <img
                src={castelo.imagem}
                alt=""
                loading="lazy"
                className="absolute right-8 bottom-10 h-56 w-72 rotate-3 rounded-3xl border-4 border-white/90 object-cover shadow-lift"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
