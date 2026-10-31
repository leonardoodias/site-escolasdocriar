import {
  ArrowRight,
  Languages,
  PiggyBank,
  Plane,
  Sprout,
  Tent,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/site/Section";
import { internacionalizacao } from "@/content/programas";

const icons: Record<string, LucideIcon> = { Languages, PiggyBank, Plane, Tent };

export function PreparandoMundo() {
  const { fechamento } = internacionalizacao;

  return (
    <section className="section bg-sand">
      <Container>
        <ol className="grid gap-3 md:grid-cols-3 md:gap-5">
          {internacionalizacao.trajetoria.map((passo, indice) => (
            <li
              key={passo.titulo}
              className="relative flex items-center justify-between gap-3 rounded-2xl border border-border/80 bg-background px-5 py-4 shadow-soft"
            >
              <div>
                <p className="font-display text-lg font-extrabold text-primary-deep">
                  {passo.titulo}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{passo.texto}</p>
              </div>
              {indice < internacionalizacao.trajetoria.length - 1 && (
                <ArrowRight
                  className="size-5 shrink-0 rotate-90 text-accent md:rotate-0"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center font-bold text-primary-deep md:mt-10">
          {internacionalizacao.chamadaIniciativas}
        </p>

        <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
          {internacionalizacao.iniciativas.map((iniciativa) => {
            const Icon = icons[iniciativa.icon] ?? Sprout;
            return (
              <li
                key={iniciativa.nome}
                className="flex gap-4 rounded-3xl border border-border bg-background p-6 sm:gap-5 md:p-7"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-primary-deep">{iniciativa.nome}</h3>
                  <p className="mt-1 text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
                    {iniciativa.publico}
                  </p>
                  {iniciativa.paragrafos.map((paragrafo) => (
                    <p key={paragrafo} className="mt-3 text-sm text-muted-foreground">
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 rounded-3xl bg-primary-deep px-6 py-9 text-center text-primary-foreground md:mt-10 md:px-12 md:py-12">
          <h3 className="text-2xl font-extrabold text-primary-foreground">{fechamento.titulo}</h3>
          {fechamento.paragrafos.map((paragrafo) => (
            <p key={paragrafo} className="mx-auto mt-4 max-w-3xl text-primary-foreground/85">
              {paragrafo}
            </p>
          ))}
          <p className="mt-6 text-sm font-extrabold">{fechamento.assinatura}</p>
        </div>
      </Container>
    </section>
  );
}
