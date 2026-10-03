import { ContatoDialog } from "@/components/site/ContatoDialog";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImg from "@/assets/hero-escola.jpg";
import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export interface HeroCta {
  label: string;
  to?: string;
  /** Abre o modal "Fale com a nossa equipe". */
  contato?: boolean;
  variant: "primary" | "outline" | "ghost";
  icon?: "calendar" | "whatsapp" | "arrow";
}

export interface HeroBanner {
  id: string;
  tag?: string;
  title: string;
  subtitle: string;
  escolasInfo?: {
    nome: string;
    segmento: string;
  }[];
  image: string;
  imageAlt: string;
  cardBadge: {
    eyebrow: string;
    title: string;
    ctaLabel?: string;
    ctaTo?: string;
  };
  ctas: HeroCta[];
}

export const heroBanners: HeroBanner[] = [
  {
    id: "institucional",
    title: "Duas escolas, um propósito em comum",
    subtitle:
      "Educar com acolhimento, criatividade e desenvolvimento — do primeiro passo na escola até a formação para o futuro.",
    image: heroImg,
    imageAlt: "Escolas do Criar — Castelo do Criar e Castelinho do Criar",
    cardBadge: {
      eyebrow: "Escolas do Criar",
      title: "Castelo do Criar & Castelinho do Criar",
      ctaLabel: "Conhecer escolas",
      ctaTo: "/escolas",
    },
    ctas: [
      {
        label: "Agende uma visita",
        to: "/matriculas",
        variant: "primary",
        icon: "calendar",
      },
      {
        label: "Conhecer as escolas",
        to: "/escolas",
        variant: "outline",
        icon: "arrow",
      },
    ],
  },
  {
    id: "matriculas-2027",
    tag: "Campanha 2027",
    title: "Matrículas Abertas 2027",
    subtitle:
      "Uma Jornada: Do Castelinho ao Castelo do Criar, acompanhamos cada etapa do desenvolvimento com afeto, propósito e formação de qualidade.",
    escolasInfo: [
      {
        nome: "Castelinho do Criar",
        segmento: "Berçário, MiniMaternal, Matternal, Nível I e Nível II",
      },
      {
        nome: "Castelo do Criar",
        segmento: "Ensino Fundamental I, Ensino Fundamental II e Ensino Médio",
      },
    ],
    image: heroImg,
    imageAlt: "Alunos das Escolas do Criar — Matrículas Abertas 2027",
    cardBadge: {
      eyebrow: "Ano Letivo 2027",
      title: "Garanta a vaga do seu filho",
      ctaLabel: "Saiba mais",
      ctaTo: "/matriculas",
    },
    ctas: [
      {
        label: "Agende uma visita",
        to: "/matriculas",
        variant: "primary",
        icon: "calendar",
      },
      {
        label: "Fale com a nossa equipe",
        contato: true,
        variant: "outline",
        icon: "whatsapp",
      },
      {
        label: "Conheça nossas escolas",
        to: "/escolas",
        variant: "ghost",
        icon: "arrow",
      },
    ],
  },
];

function RenderCta({
  cta,
  onContatoOpenChange,
}: {
  cta: HeroCta;
  onContatoOpenChange: (open: boolean) => void;
}) {
  const iconElement =
    cta.icon === "calendar" ? (
      <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
    ) : cta.icon === "whatsapp" ? (
      <MessageCircle className="mr-2 size-5" aria-hidden="true" />
    ) : cta.icon === "arrow" ? (
      <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
    ) : null;

  if (cta.variant === "primary") {
    return (
      <Button
        asChild
        size="lg"
        className="min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-lift hover:opacity-95"
      >
        <Link to={cta.to ?? "/matriculas"}>
          {iconElement}
          {cta.label}
        </Link>
      </Button>
    );
  }

  if (cta.variant === "outline") {
    if (cta.contato) {
      return (
        <ContatoDialog onOpenChange={onContatoOpenChange}>
          <Button
            size="lg"
            variant="outline"
            className="min-h-12 rounded-full border-primary/30 bg-white px-6 font-bold text-primary shadow-soft hover:bg-primary-soft hover:text-primary"
          >
            {iconElement}
            {cta.label}
          </Button>
        </ContatoDialog>
      );
    }
    return (
      <Button
        asChild
        size="lg"
        variant="outline"
        className="min-h-12 rounded-full border-primary/30 bg-white px-6 font-bold text-primary shadow-soft hover:bg-primary-soft hover:text-primary"
      >
        <Link to={cta.to ?? "/"}>
          {cta.label}
          {iconElement}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className="min-h-12 rounded-full px-5 font-bold text-primary hover:bg-primary-soft hover:text-primary"
    >
      <Link to={cta.to ?? "/"}>
        {cta.label}
        {iconElement}
      </Link>
    </Button>
  );
}

/** Curvas decorativas leves atrás do banner (cores da marca, baixa opacidade). */
function HeroDecor() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full"
    >
      <defs>
        <linearGradient id="hero-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.8 0.14 55)" stopOpacity="0.55" />
          <stop offset="1" stopColor="oklch(0.66 0.22 40)" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="hero-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.75 0.11 240)" stopOpacity="0.15" />
          <stop offset="1" stopColor="oklch(0.68 0.14 235)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path d="M1010 0 H1440 V420 C1400 250 1250 90 1010 0 Z" fill="url(#hero-orange)" />
      <path
        d="M-20 640 C260 720 640 730 1000 650 C700 760 260 790 -20 720 Z"
        fill="url(#hero-blue)"
      />
      <path
        d="M960 720 C1120 610 1320 590 1460 650 V720 Z"
        fill="oklch(0.46 0.17 267)"
        fillOpacity="0.1"
      />
    </svg>
  );
}

export function HeroGrupo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [contatoOpen, setContatoOpen] = useState(false);
  const total = heroBanners.length;
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isPaused || contatoOpen || total < 2 || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, contatoOpen, total, prefersReducedMotion]);

  const currentBanner = (heroBanners[currentIndex] ?? heroBanners[0]) as HeroBanner;

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.972_0.004_250)] py-14 text-foreground md:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Destaques e Campanhas das Escolas do Criar"
    >
      <HeroDecor />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)] lg:gap-12 min-h-[460px]">
          {/* Lado do Conteúdo com transição suave */}
          <div
            key={`content-${currentBanner.id}`}
            className="max-w-2xl animate-in fade-in duration-500"
          >
            {/* Tag de Campanha (opcional) */}
            {currentBanner.tag ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1 text-xs font-extrabold tracking-wide text-primary">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                <span className="uppercase">{currentBanner.tag}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1 text-xs font-extrabold tracking-wide text-primary">
                <span className="uppercase">Escolas do Criar</span>
              </div>
            )}

            {/* Título Principal */}
            <h1 className="mt-4 text-3xl leading-tight font-extrabold text-primary-deep sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {currentBanner.title}
            </h1>

            {/* Subtítulo */}
            <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {currentBanner.subtitle}
            </p>

            {/* Informações de apoio das escolas (quando disponível) */}
            {currentBanner.escolasInfo && currentBanner.escolasInfo.length > 0 && (
              <div className="mt-6 space-y-2.5 rounded-2xl border border-border bg-white p-4 shadow-soft sm:p-5">
                {currentBanner.escolasInfo.map((info) => (
                  <div key={info.nome} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <p className="text-foreground/85">
                      <strong className="font-bold text-primary-deep">{info.nome}</strong> —{" "}
                      <span className="text-foreground/75">{info.segmento}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {currentBanner.ctas.map((cta) => (
                <RenderCta key={cta.label} cta={cta} onContatoOpenChange={setContatoOpen} />
              ))}
            </div>
          </div>

          {/* Lado visual: Card de Imagem com transição suave */}
          <div
            key={`visual-${currentBanner.id}`}
            className="relative flex justify-center lg:justify-end animate-in fade-in duration-500"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl md:rounded-4xl border-4 border-white shadow-lift">
              <img
                src={currentBanner.image}
                alt={currentBanner.imageAlt}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/95 p-3.5 shadow-soft backdrop-blur-md">
                <div>
                  <p className="text-xs font-extrabold text-accent uppercase tracking-wider">
                    {currentBanner.cardBadge.eyebrow}
                  </p>
                  <p className="text-sm font-bold text-primary-deep">
                    {currentBanner.cardBadge.title}
                  </p>
                </div>
                {currentBanner.cardBadge.ctaLabel && (
                  <Button
                    asChild
                    size="sm"
                    className="h-9 rounded-full gradient-accent px-4 text-xs font-bold text-accent-foreground shadow-sm"
                  >
                    <Link to={currentBanner.cardBadge.ctaTo ?? "/matriculas"}>
                      {currentBanner.cardBadge.ctaLabel}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Controles de Navegação e Indicadores */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-border sm:justify-center sm:gap-6">
          {/* Botão Anterior */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Banner anterior"
            className="size-9 rounded-full border-primary/25 bg-white text-primary hover:bg-primary-soft hover:text-primary"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
          >
            <ChevronLeft className="size-4.5" />
          </Button>

          {/* Indicadores / Dots */}
          <div className="flex items-center gap-2.5">
            {heroBanners.map((banner, i) => (
              <button
                key={banner.id}
                type="button"
                aria-label={`Ir para banner ${i + 1}: ${banner.title}`}
                aria-current={i === currentIndex}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === currentIndex
                    ? "w-8 bg-accent shadow-sm"
                    : "w-2.5 bg-primary/25 hover:bg-primary/50",
                )}
              />
            ))}
          </div>

          {/* Botão Próximo */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Próximo banner"
            className="size-9 rounded-full border-primary/25 bg-white text-primary hover:bg-primary-soft hover:text-primary"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
          >
            <ChevronRight className="size-4.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
