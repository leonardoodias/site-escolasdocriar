import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowDown, ChevronDown, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Container, SectionHeading } from "@/components/site/Section";
import { unidades } from "@/content/contatos";
import type { BlocoComplementar, EtapaProgramas } from "@/content/programas";

const ABERTA_INICIALMENTE = "fundamental-1";

function BlocoComplementarEtapa({ id, bloco }: { id: string; bloco: BlocoComplementar }) {
  return (
    <section aria-labelledby={id} className="border-t border-border px-6 py-6 sm:px-8 sm:py-7">
      {bloco.publico && (
        <p className="text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
          {bloco.publico}
        </p>
      )}
      <h4 id={id} className="mt-1 text-lg font-bold text-primary-deep">
        {bloco.titulo}
      </h4>
      {bloco.intro && <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{bloco.intro}</p>}
      {bloco.atividades && (
        <ul className="mt-3 grid md:grid-cols-2 md:gap-x-10">
          {bloco.atividades.map((atividade) => (
            <li
              key={atividade.nome}
              className="border-t border-border/70 py-4 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
            >
              <h5 className="text-base font-bold text-primary-deep">{atividade.nome}</h5>
              <p className="mt-1.5 text-sm text-muted-foreground">{atividade.texto}</p>
            </li>
          ))}
        </ul>
      )}
      {bloco.notas && (
        <div className="mt-4 rounded-2xl bg-primary-soft px-5 py-4">
          {bloco.notasTitulo && (
            <p className="text-sm font-extrabold text-primary-deep">{bloco.notasTitulo}</p>
          )}
          <ul className={`space-y-1.5 ${bloco.notasTitulo ? "mt-2" : ""}`}>
            {bloco.notas.map((nota) => (
              <li key={nota} className="text-sm font-semibold text-foreground/85">
                {nota}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

/**
 * Etapas do Castelo do Criar: título, séries e resumo sempre visíveis;
 * aulas, programas e atividades complementares em uma área expansível por etapa,
 * aberta automaticamente pela âncora da URL.
 */
export function EtapasEnsino({ etapas }: { etapas: EtapaProgramas[] }) {
  const hash = useLocation({ select: (l) => l.hash.replace(/^#/, "") });
  const [abertas, setAbertas] = useState<Record<string, boolean>>({
    [ABERTA_INICIALMENTE]: true,
  });

  useEffect(() => {
    if (etapas.some((e) => e.id === hash)) {
      setAbertas((atual) => ({ ...atual, [hash]: true }));
    }
  }, [hash, etapas]);

  return (
    <section id="etapas" className="section scroll-mt-24 bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Do 1º ano à 3ª série"
          title="Etapas de ensino"
          text="Acompanhamento consistente do Ensino Fundamental até a conclusão do Ensino Médio."
        />

        <nav aria-label="Atalhos para as etapas" className="mt-8 md:mt-10">
          <ul className="grid gap-3 sm:grid-cols-3">
            {etapas.map((etapa) => (
              <li key={etapa.id}>
                <Link
                  to="/escolas/$slug"
                  params={{ slug: "castelo-do-criar" }}
                  hash={etapa.id}
                  className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-background px-5 py-4 shadow-soft transition-colors hover:border-primary/40"
                >
                  <span>
                    <span className="block text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
                      {etapa.etapa}
                    </span>
                    <span className="font-display mt-0.5 block text-lg font-extrabold text-primary-deep">
                      {etapa.titulo}
                    </span>
                  </span>
                  <ArrowDown
                    className="size-4 shrink-0 text-primary transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 space-y-5 md:mt-10">
          {etapas.map((etapa) => (
            <CollapsiblePrimitive.Root
              key={etapa.id}
              asChild
              open={abertas[etapa.id] ?? false}
              onOpenChange={(open) => setAbertas((atual) => ({ ...atual, [etapa.id]: open }))}
            >
              <article
                id={etapa.id}
                aria-labelledby={`${etapa.id}-titulo`}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-background"
              >
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
                    {etapa.etapa}
                  </p>
                  <h3
                    id={`${etapa.id}-titulo`}
                    className="mt-1.5 text-2xl font-extrabold text-primary-deep"
                  >
                    {etapa.titulo}
                  </h3>
                  <p className="mt-3 max-w-3xl text-muted-foreground">{etapa.resumo}</p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <CollapsiblePrimitive.Trigger className="group inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-bold text-primary transition-colors hover:bg-primary-soft">
                      <span className="group-data-[state=open]:hidden">
                        Ver aulas, programas e atividades
                      </span>
                      <span className="hidden group-data-[state=open]:inline">
                        Ocultar aulas, programas e atividades
                      </span>
                      <ChevronDown
                        className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </CollapsiblePrimitive.Trigger>
                    <ExternalLink
                      href={unidades.castelo.whatsappUrl}
                      className="inline-flex w-fit items-center gap-1.5 rounded-full px-1 text-sm font-bold text-primary underline-offset-4 hover:underline"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      Tirar dúvidas sobre o {etapa.titulo}
                    </ExternalLink>
                  </div>
                </div>

                <CollapsiblePrimitive.Content forceMount className="data-[state=closed]:hidden">
                  <ul className="grid border-t border-border px-6 pb-3 sm:px-8 md:grid-cols-2 md:gap-x-10">
                    {etapa.programas.map((programa) => (
                      <li
                        key={programa.nome}
                        className="border-t border-border/70 py-5 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                      >
                        <h4 className="text-base font-bold text-primary-deep">{programa.nome}</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{programa.texto}</p>
                        {programa.condicoes && (
                          <p className="mt-2.5 text-xs font-bold text-primary">
                            {programa.condicoes.join(" · ")}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  {etapa.complementares?.map((bloco, indice) => (
                    <BlocoComplementarEtapa
                      key={bloco.titulo}
                      id={`${etapa.id}-complementar-${indice}`}
                      bloco={bloco}
                    />
                  ))}
                </CollapsiblePrimitive.Content>
              </article>
            </CollapsiblePrimitive.Root>
          ))}
        </div>
      </Container>
    </section>
  );
}
