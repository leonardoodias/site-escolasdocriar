import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Section";
import { ContatoDialog } from "@/components/site/ContatoDialog";
import { ExternalLink } from "@/components/site/ExternalLink";
import { unidades, type UnidadeId } from "@/content/contatos";

const botaoContatoClass =
  "min-h-12 rounded-full border-white/60 bg-transparent px-6 font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground";

/** Sem `unidade`, o botão abre o modal com as duas unidades. */
export function CtaMatriculas({ unidade }: { unidade?: UnidadeId }) {
  return (
    <section className="section">
      <Container>
        <div className="gradient-hero relative mx-auto max-w-5xl overflow-hidden rounded-3xl md:rounded-4xl px-6 py-9 text-center shadow-lift md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-10 size-56 rounded-full bg-white/10 blur-xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-12 size-64 rounded-full bg-white/10 blur-xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
              Venha conhecer as Escolas do Criar
            </h2>
            <p className="mt-4 text-base text-primary-foreground/90 md:text-lg">
              Agende uma visita e descubra qual das nossas escolas é o melhor caminho para seu
              filho.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full bg-background px-6 font-bold text-primary shadow-soft hover:bg-background/95 hover:text-primary-deep"
              >
                <Link to="/matriculas">
                  <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
                  Agende uma visita
                </Link>
              </Button>
              {unidade ? (
                <Button asChild size="lg" variant="outline" className={botaoContatoClass}>
                  <ExternalLink href={unidades[unidade].whatsappUrl}>
                    <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                    Fale no WhatsApp
                  </ExternalLink>
                </Button>
              ) : (
                <ContatoDialog>
                  <Button size="lg" variant="outline" className={botaoContatoClass}>
                    <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                    Fale com a nossa equipe
                  </Button>
                </ContatoDialog>
              )}
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="min-h-12 rounded-full px-5 font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <Link to="/matriculas">
                  Saiba mais sobre matrículas
                  <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
