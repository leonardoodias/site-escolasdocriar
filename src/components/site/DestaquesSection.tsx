import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ImagePlus } from "lucide-react";
import { useState } from "react";

import { ExternalLink } from "@/components/site/ExternalLink";
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
import {
  destaques,
  destaquesDaHome,
  hojeEmSaoPaulo,
  proximasDatas,
  situacaoDestaque,
  situacaoItemAgenda,
  type Destaque,
  type MesAgenda,
} from "@/content/destaques";
import { cn } from "@/lib/utils";

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

export function DestaqueImagem({
  destaque,
  className,
}: {
  destaque: Destaque;
  className?: string;
}) {
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
      <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-extrabold tracking-wide text-primary uppercase">
        {destaque.tag}
      </span>
      {destaque.data && (
        <span className="text-xs font-bold text-muted-foreground">{destaque.data}</span>
      )}
    </div>
  );
}

/** `contorno` usa o botão de contorno da página /destaques; o padrão é o botão principal da home. */
export function VerDetalhesDialog({
  destaque,
  contorno = false,
}: {
  destaque: Destaque;
  contorno?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={contorno ? "outline" : "cta"}
          className={cn(
            "min-h-11 px-5",
            contorno && "rounded-full border-primary/30 font-bold text-primary",
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
                className="flex items-start gap-2.5 text-sm font-semibold text-foreground/85"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Card de evento usado na home e em /destaques. Descrição limitada; o texto completo fica nos detalhes. */
export function DestaqueCard({
  destaque,
  hoje,
  contorno = false,
}: {
  destaque: Destaque;
  hoje: string;
  contorno?: boolean;
}) {
  const situacao = situacaoDestaque(destaque, hoje);
  const [, mes, dia] = destaque.quando.split("-");

  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
      <div className="relative aspect-[2/1] overflow-hidden">
        <DestaqueImagem
          destaque={destaque}
          className={cn(
            "transition-transform duration-500 group-hover:scale-103 motion-reduce:transition-none",
            situacao === "encerrado" && "grayscale-50",
          )}
        />
        <span className="absolute top-3 left-3 flex min-w-12 flex-col items-center rounded-2xl bg-background/95 px-2.5 py-1.5 text-center shadow-soft">
          <span className="font-display text-xl leading-none font-extrabold text-primary-deep">
            {dia}
          </span>
          <span className="mt-0.5 text-xs font-extrabold text-accent-ink uppercase">
            {MESES[Number(mes) - 1]}
          </span>
        </span>
        {situacao !== "proximo" && (
          <span
            className={cn(
              "absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-extrabold uppercase shadow-soft",
              situacao === "hoje"
                ? "bg-accent text-accent-foreground"
                : "bg-foreground/75 text-background",
            )}
          >
            {situacao === "hoje" ? "É hoje" : "Encerrado"}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="w-fit rounded-full bg-primary-soft px-2.5 py-1 text-xs font-extrabold tracking-wide text-primary uppercase">
          {destaque.tag}
        </span>
        <h3 className="mt-3 line-clamp-2 text-lg font-bold text-primary-deep">{destaque.titulo}</h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-muted-foreground">{destaque.texto}</p>
        <div className="mt-auto pt-5">
          {destaque.cta.href ? (
            <Button
              asChild
              variant="outline"
              className="min-h-11 rounded-full border-primary/30 px-5 font-bold text-primary"
            >
              <ExternalLink href={destaque.cta.href}>
                {destaque.cta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ExternalLink>
            </Button>
          ) : (
            <VerDetalhesDialog destaque={destaque} contorno={contorno} />
          )}
        </div>
      </div>
    </article>
  );
}

/** Índice do mês atual em São Paulo; sem ele, o próximo cadastrado; sem próximo, o último. */
function indiceMesInicial(meses: MesAgenda[], agora: Date) {
  const partes = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "numeric",
  }).formatToParts(agora);
  const valor = (tipo: string) => Number(partes.find((p) => p.type === tipo)?.value);
  const atual = valor("year") * 12 + valor("month");
  const chave = (m: MesAgenda) => m.ano * 12 + m.numero;

  const exato = meses.findIndex((m) => chave(m) === atual);
  if (exato >= 0) return exato;
  const proximo = meses.findIndex((m) => chave(m) > atual);
  return proximo >= 0 ? proximo : meses.length - 1;
}

export function DestaquesSection() {
  const [mesAtivo, setMesAtivo] = useState(() => indiceMesInicial(proximasDatas, new Date()));
  const mesSelecionado = proximasDatas[mesAtivo];
  const hoje = hojeEmSaoPaulo();
  const eventos = destaquesDaHome(destaques, hoje);

  if (eventos.length === 0 || !mesSelecionado) return null;

  return (
    <section className="section bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Destaques"
          title="Eventos e campanhas"
          text="Acompanhe o que está acontecendo nas Escolas do Criar."
        />

        <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* Coluna esquerda — próximos eventos */}
          <div className="lg:col-span-7">
            <div className={cn("grid gap-5", eventos.length > 1 && "sm:grid-cols-2")}>
              {eventos.map((d) => (
                <DestaqueCard key={d.id} destaque={d} hoje={hoje} />
              ))}
            </div>
            {destaques.length > eventos.length && (
              <Link
                to="/destaques"
                className="touch-target mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                Ver todos os eventos
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Coluna direita — Agenda Escolar */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border/70 bg-card p-5 shadow-soft md:p-6 lg:sticky lg:top-24">
              <h3 className="text-2xl font-extrabold text-primary-deep">Agenda Escolar</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Confira os próximos compromissos e momentos importantes das Escolas do Criar.
              </p>

              <div className="mt-5 flex flex-wrap gap-1 rounded-full bg-muted p-1">
                {proximasDatas.map((mes, i) => (
                  <button
                    key={`${mes.ano}-${mes.numero}`}
                    type="button"
                    aria-pressed={i === mesAtivo}
                    onClick={() => setMesAtivo(i)}
                    className={cn(
                      "touch-target flex-1 rounded-full px-3 py-1.5 text-xs font-extrabold tracking-wide uppercase transition-colors",
                      i === mesAtivo
                        ? "bg-card text-primary-deep shadow-soft"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {mes.mes}
                  </button>
                ))}
              </div>

              {mesSelecionado.itens.length > 0 ? (
                <ul className="mt-2">
                  {mesSelecionado.itens.map((item) => {
                    const situacao = situacaoItemAgenda(item, mesSelecionado.ano, hoje);
                    return (
                      <li
                        key={`${item.data}-${item.evento}`}
                        className={cn(
                          "flex items-start gap-3 border-b border-border/60 py-3.5 last:border-b-0",
                          situacao === "encerrado" && "opacity-60",
                        )}
                      >
                        <span className="w-26 shrink-0 text-sm font-extrabold text-primary-deep">
                          {item.data}
                        </span>
                        <span className="text-sm font-semibold text-foreground/85">
                          {item.evento}
                          {situacao === "hoje" && (
                            <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs font-extrabold text-accent-foreground uppercase">
                              Hoje
                            </span>
                          )}
                          {item.detalhe && (
                            <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                              {item.detalhe}
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="py-6 text-sm text-muted-foreground">
                  Nenhum compromisso cadastrado para {mesSelecionado.mes.toLowerCase()} até o
                  momento.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
