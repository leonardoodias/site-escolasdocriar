import { ArrowRight, ChevronLeft, ChevronRight, Check, ImagePlus } from "lucide-react";
import { useEffect, useState } from "react";

import { Container, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { destaques, proximasDatas } from "@/content/destaques";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export function DestaquesSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const total = destaques.length;
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (total < 2 || prefersReducedMotion || paused) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [total, prefersReducedMotion, paused, resetKey]);

  const atual = destaques[index];
  if (!atual) return null;

  function goTo(i: number) {
    setIndex(i);
    setResetKey((k) => k + 1);
  }

  return (
    <section className="section bg-secondary/40">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Destaques"
            title="Eventos e campanhas"
            text="Acompanhe o que está acontecendo nas Escolas do Criar."
          />

          <div
            className="mt-8 overflow-hidden rounded-3xl md:mt-10 md:rounded-4xl bg-card shadow-soft"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
            }}
          >
            <div className="grid md:grid-cols-12">
              <div className="relative aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[380px] lg:min-h-[400px]">
                {atual.imagem ? (
                  <img
                    key={atual.id}
                    src={atual.imagem}
                    alt={atual.titulo}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <div
                    key={atual.id}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-primary/25 bg-primary-soft/70 px-6 text-center"
                  >
                    <ImagePlus
                      className="size-8 text-primary/50"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-primary/70">{atual.placeholderText}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center p-6 md:col-span-5 md:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-primary uppercase">
                    {atual.tag}
                  </span>
                  {atual.data && (
                    <span className="text-xs font-bold text-muted-foreground">{atual.data}</span>
                  )}
                </div>
                <h3 className="mt-4 text-3xl font-extrabold text-primary-deep md:text-4xl">
                  {atual.titulo}
                </h3>
                <p className="mt-3 text-muted-foreground">{atual.texto}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-soft hover:opacity-90"
                      >
                        {atual.cta.label}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md rounded-3xl">
                      <DialogHeader>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-primary uppercase">
                            {atual.tag}
                          </span>
                          {atual.data && (
                            <span className="text-xs font-bold text-muted-foreground">
                              {atual.data}
                            </span>
                          )}
                        </div>
                        <DialogTitle className="mt-1 text-xl font-extrabold text-primary-deep">
                          {atual.titulo}
                        </DialogTitle>
                        <DialogDescription>{atual.texto}</DialogDescription>
                      </DialogHeader>
                      {atual.detalhes && atual.detalhes.length > 0 && (
                        <ul className="space-y-2.5">
                          {atual.detalhes.map((d) => (
                            <li
                              key={d}
                              className="flex items-center gap-2.5 text-sm font-semibold text-foreground/85"
                            >
                              <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </DialogContent>
                  </Dialog>
                  {total > 1 && (
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Destaque anterior"
                        className="size-9 rounded-full text-primary hover:bg-primary-soft"
                        onClick={() => goTo((index - 1 + total) % total)}
                      >
                        <ChevronLeft className="size-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Próximo destaque"
                        className="size-9 rounded-full text-primary hover:bg-primary-soft"
                        onClick={() => goTo((index + 1) % total)}
                      >
                        <ChevronRight className="size-5" />
                      </Button>
                    </div>
                  )}
                </div>

                {total > 1 && (
                  <div className="mt-6 flex gap-2">
                    {destaques.map((d, i) => (
                      <button
                        key={d.id}
                        type="button"
                        aria-label={`Ver destaque: ${d.titulo}`}
                        aria-current={i === index}
                        onClick={() => goTo(i)}
                        className={cn(
                          "h-2 rounded-full transition-all",
                          i === index ? "w-8 bg-accent" : "w-2 bg-border",
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-8 md:mt-12 md:pt-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold text-primary-deep md:text-3xl">
                Agenda Escolar
              </h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Confira os próximos compromissos e momentos importantes das Escolas do Criar.
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
              {proximasDatas.map((mes) => (
                <div key={mes.mes}>
                  <h4 className="text-base font-extrabold text-primary-deep md:text-lg">
                    {mes.mes}
                  </h4>
                  <span
                    aria-hidden="true"
                    className="mt-1.5 block h-0.5 w-7 rounded-full bg-accent"
                  />
                  <ul className="mt-4">
                    {mes.itens.map((item) => (
                      <li
                        key={`${item.data}-${item.evento}`}
                        className="flex items-start gap-3 border-b border-border/60 py-3 first:pt-0 last:border-b-0 last:pb-0"
                      >
                        <span className="shrink-0 text-sm font-extrabold whitespace-nowrap text-primary-deep">
                          {item.data}
                        </span>
                        <span className="text-sm text-foreground/80">
                          {item.evento}
                          {item.detalhe && (
                            <span className="block text-xs text-muted-foreground">
                              {item.detalhe}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
