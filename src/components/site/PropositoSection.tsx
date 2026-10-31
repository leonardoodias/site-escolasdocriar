import { Check } from "lucide-react";

import { Container } from "@/components/site/Section";
import { grupo, propositoGrupo } from "@/content/grupo";

export function PropositoSection() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-8 rounded-3xl md:rounded-4xl border border-border bg-secondary/50 px-6 py-9 md:grid-cols-2 md:gap-10 md:px-12 md:py-12">
          <div>
            <p className="text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
              Nosso propósito
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold text-primary-deep md:text-4xl">
              Um grupo, o mesmo cuidado em cada escola
            </h2>
            <p className="mt-3.5 text-base text-muted-foreground md:text-lg">{grupo.descricao}</p>
          </div>
          <ul className="grid gap-3">
            {propositoGrupo.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-background px-5 py-4 text-sm font-bold text-foreground/85 shadow-soft"
              >
                <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
