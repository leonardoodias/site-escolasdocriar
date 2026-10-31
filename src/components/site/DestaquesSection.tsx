import { ArrowRight, Check, ImagePlus } from "lucide-react";
import { useState } from "react";

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
import { destaques, proximasDatas, type Destaque } from "@/content/destaques";
import { cn } from "@/lib/utils";

function DestaqueImagem({ destaque, className }: { destaque: Destaque; className?: string }) {
  if (destaque.imagem) {
    return (
      <img
        src={destaque.imagem}
        alt={destaque.titulo}
        loading="lazy"
        className={cn("absolute inset-0 size-full object-cover", className)}
      />
    );
  }
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary/25 bg-primary-soft/70 px-4 text-center",
        className,
      )}
    >
      <ImagePlus className="size-6 text-primary/50" strokeWidth={1.5} aria-hidden="true" />
      <p className="text-xs font-semibold text-primary/70">{destaque.placeholderText}</p>
    </div>
  );
}

function DestaqueMeta({ destaque, className }: { destaque: Destaque; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-primary uppercase">
        {destaque.tag}
      </span>
      {destaque.data && (
        <span className="text-xs font-bold text-muted-foreground">{destaque.data}</span>
      )}
    </div>
  );
}

function VerDetalhesDialog({ destaque, small = false }: { destaque: Destaque; small?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={small ? "default" : "lg"}
          className={cn(
            "rounded-full gradient-accent font-bold text-accent-foreground shadow-soft hover:opacity-90",
            small ? "min-h-10 px-5 text-sm" : "min-h-12 px-6",
          )}
        >
          {destaque.cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-3xl">
        <DialogHeader>
          <DestaqueMeta destaque={destaque} />
          <DialogTitle className="mt-1 text-xl font-extrabold text-primary-deep">
            {destaque.titulo}
          </DialogTitle>
          <DialogDescription>{destaque.texto}</DialogDescription>
        </DialogHeader>
        {destaque.detalhes && destaque.detalhes.length > 0 && (
          <ul className="space-y-2.5">
            {destaque.detalhes.map((d) => (
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
  );
}

export function DestaquesSection() {
  const [mesAtivo, setMesAtivo] = useState(0);
  const [principal, ...secundarios] = destaques;
  const mesSelecionado = proximasDatas[mesAtivo];

  if (!principal || !mesSelecionado) return null;

  return (
    <section className="section bg-secondary/40">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Destaques"
            title="Eventos e campanhas"
            text="Acompanhe o que está acontecendo nas Escolas do Criar."
          />

          <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-12 lg:gap-10">
            {/* Coluna esquerda — Destaques editoriais */}
            <div className="lg:col-span-7">
              <article className="overflow-hidden rounded-3xl bg-card shadow-soft">
                <div className="relative aspect-[16/9] sm:aspect-[21/10]">
                  <DestaqueImagem destaque={principal} />
                </div>
                <div className="p-6 md:p-7">
                  <DestaqueMeta destaque={principal} />
                  <h3 className="mt-3 text-2xl font-extrabold text-primary-deep md:text-3xl">
                    {principal.titulo}
                  </h3>
                  <p className="mt-2 text-muted-foreground md:text-base">{principal.texto}</p>
                  <div className="mt-5">
                    <VerDetalhesDialog destaque={principal} />
                  </div>
                </div>
              </article>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {secundarios.map((d) => (
                  <article
                    key={d.id}
                    className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft"
                  >
                    <div className="relative aspect-[16/10]">
                      <DestaqueImagem destaque={d} />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <DestaqueMeta destaque={d} />
                      <h4 className="mt-2.5 text-lg font-extrabold text-primary-deep">
                        {d.titulo}
                      </h4>
                      <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{d.texto}</p>
                      <div className="mt-4">
                        <VerDetalhesDialog destaque={d} small />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Coluna direita — Agenda Escolar */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-card p-6 shadow-soft md:p-7 lg:sticky lg:top-24">
                <h3 className="text-2xl font-extrabold text-primary-deep">Agenda Escolar</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Confira os próximos compromissos e momentos importantes das Escolas do Criar.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-b border-border pb-3">
                  {proximasDatas.map((mes, i) => (
                    <button
                      key={mes.mes}
                      type="button"
                      aria-current={i === mesAtivo}
                      onClick={() => setMesAtivo(i)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-extrabold tracking-wide uppercase transition-colors",
                        i === mesAtivo
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-primary-soft hover:text-primary",
                      )}
                    >
                      {mes.mes}
                    </button>
                  ))}
                </div>

                <ul className="mt-1">
                  {mesSelecionado.itens.map((item) => (
                    <li
                      key={`${item.data}-${item.evento}`}
                      className="flex items-start gap-3 border-b border-border/60 py-3.5 last:border-b-0"
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
