import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  HeartHandshake,
  Lightbulb,
  Sprout,
  type LucideIcon,
} from "lucide-react";

import { Container, SectionHeading } from "@/components/site/Section";
import { eixosExperiencias } from "@/content/programas";

const icons: Record<string, LucideIcon> = { Globe, HeartHandshake, Lightbulb };

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full px-1 font-bold text-primary underline-offset-4 hover:underline";

export function ExperienciasVida() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Na prática"
          title="Experiências que preparam para a vida"
          text="Programas que ampliam a formação para além da sala de aula, com idiomas, projetos, convivência e escolhas reais."
        />

        <div className="mx-auto mt-12 max-w-[1200px] md:mt-14">
          {eixosExperiencias.map((eixo) => {
            const Icon = icons[eixo.icon] ?? Sprout;
            return (
              <div
                key={eixo.titulo}
                className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14 lg:py-14"
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl leading-tight font-extrabold text-primary-deep">
                    {eixo.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{eixo.intro}</p>
                </div>

                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {eixo.iniciativas.map((item) => (
                    <li
                      key={item.nome}
                      className="border-t border-border/70 py-5 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0"
                    >
                      <h4 className="text-base leading-snug font-bold text-primary-deep">
                        {item.nome}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.texto}
                      </p>
                      <p className="mt-2.5 text-xs font-bold text-primary">{item.publico}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-4 flex max-w-[1200px] flex-col gap-3 border-t border-border pt-8 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
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
