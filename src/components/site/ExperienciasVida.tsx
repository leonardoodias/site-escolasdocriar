import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Lightbulb, Sprout, type LucideIcon } from "lucide-react";

import { Container, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { eixosExperiencias } from "@/content/programas";

const icons: Record<string, LucideIcon> = { HeartHandshake, Lightbulb };

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full px-1 font-bold text-primary underline-offset-4 hover:underline";

export function ExperienciasVida() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Na prática"
          title="Experiências que preparam para a vida"
          text="Programas que ampliam a formação para além da sala de aula, com projetos, convivência e escolhas reais."
        />

        <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-14">
          {eixosExperiencias.map((eixo) => {
            const Icon = icons[eixo.icon] ?? Sprout;
            return (
              <div key={eixo.titulo}>
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl leading-tight font-extrabold text-primary-deep">
                    {eixo.titulo}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{eixo.intro}</p>

                <Accordion type="multiple" className="mt-3">
                  {eixo.iniciativas.map((item) => (
                    <AccordionItem key={item.nome} value={item.nome}>
                      <AccordionTrigger className="min-h-11 gap-3 hover:no-underline">
                        <span>
                          <span className="block text-base leading-snug font-bold text-primary-deep">
                            {item.nome}
                          </span>
                          <span className="mt-1 block text-xs font-bold text-primary">
                            {item.publico}
                          </span>
                        </span>
                      </AccordionTrigger>
                      {/* Mantém o texto no HTML com o item fechado, para continuar indexável. */}
                      <AccordionContent
                        forceMount
                        className="leading-relaxed text-muted-foreground [[data-state=closed]>&]:hidden"
                      >
                        {item.texto}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-border pt-8 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <p className="text-muted-foreground">
            A relação completa por etapa está na página de cada escola:
          </p>
          <Link
            to="/escolas/$slug"
            params={{ slug: "castelinho" }}
            hash="aprendizagens"
            className={linkClass}
          >
            Programas do Castelinho
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/escolas/$slug"
            params={{ slug: "castelo-do-criar" }}
            hash="etapas"
            className={linkClass}
          >
            Aulas e programas do Castelo
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
