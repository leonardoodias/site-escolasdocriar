import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Container, PageHero } from "@/components/site/Section";

export type SecaoLegal = { id: string; titulo: string; conteudo: ReactNode };

/** Página de documento jurídico: resumo, índice clicável e seções numeradas. */
export function DocumentoLegal({
  eyebrow,
  titulo,
  texto,
  atualizadoEm,
  resumo,
  secoes,
}: {
  eyebrow: string;
  titulo: string;
  texto: string;
  /** Data por extenso da última revisão do texto. */
  atualizadoEm: string;
  resumo: { icone: LucideIcon; titulo: string; texto: string }[];
  secoes: SecaoLegal[];
}) {
  return (
    <>
      <PageHero size="compact" eyebrow={eyebrow} title={titulo} text={texto} />

      <section className="section">
        <Container>
          <p className="text-sm font-semibold text-muted-foreground">
            Última atualização: {atualizadoEm}
          </p>

          <h2 className="sr-only">Em resumo</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {resumo.map(({ icone: Icone, titulo: t, texto: x }) => (
              <li
                key={t}
                className="flex gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-bold text-primary-deep">{t}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{x}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
            <nav aria-label="Nesta página" className="lg:col-span-4">
              <div className="rounded-3xl border border-border/70 bg-secondary/40 p-5 lg:sticky lg:top-24">
                <p className="text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
                  Nesta página
                </p>
                <ol className="mt-3 space-y-1">
                  {secoes.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex min-h-11 items-center gap-3 rounded-xl px-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-background hover:text-primary lg:min-h-9"
                      >
                        <span className="w-5 shrink-0 text-xs font-extrabold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.titulo}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="max-w-3xl space-y-10 lg:col-span-8">
              {secoes.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  aria-labelledby={`${s.id}-titulo`}
                  className="scroll-mt-24"
                >
                  <h2
                    id={`${s.id}-titulo`}
                    className="flex items-baseline gap-3 text-2xl font-extrabold text-primary-deep"
                  >
                    <span className="text-base font-extrabold text-accent-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.titulo}
                  </h2>
                  <div className="mt-4 space-y-4 text-base text-foreground/85 [&_li]:pl-1 [&_strong]:font-bold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {s.conteudo}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
