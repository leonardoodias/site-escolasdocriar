import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowDown, ChevronDown, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Container, SectionHeading } from "@/components/site/Section";
import { unidades } from "@/content/contatos";
import type { EtapaProgramas } from "@/content/programas";

const ABERTA_INICIALMENTE = "fundamental-1";

/**
 * Etapas do Castelo do Criar: título, séries e resumo sempre visíveis;
 * aulas e programas em uma área expansível por etapa, aberta automaticamente pela âncora da URL.
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
        <div className="mx-auto max-w-[1200px]">
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
                      <span className="block text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
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
                    <p className="text-xs font-extrabold tracking-[0.14em] text-accent uppercase">
                      {etapa.etapa}
                    </p>
                    <h3
                      id={`${etapa.id}-titulo`}
                      className="mt-1.5 text-2xl font-extrabold text-primary-deep sm:text-3xl"
                    >
                      {etapa.titulo}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                      {etapa.resumo}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                      <CollapsiblePrimitive.Trigger className="group inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-bold text-primary transition-colors hover:bg-primary-soft">
                        <span className="group-data-[state=open]:hidden">
                          Ver as {etapa.programas.length} aulas e programas
                        </span>
                        <span className="hidden group-data-[state=open]:inline">
                          Ocultar aulas e programas
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
                          <h4 className="text-base leading-snug font-bold text-primary-deep">
                            {programa.nome}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {programa.texto}
                          </p>
                          {programa.condicoes && (
                            <p className="mt-2.5 text-xs font-bold text-primary">
                              {programa.condicoes.join(" · ")}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </CollapsiblePrimitive.Content>
                </article>
              </CollapsiblePrimitive.Root>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
