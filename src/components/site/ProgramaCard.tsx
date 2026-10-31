import {
  BookOpen,
  ChefHat,
  Globe,
  Languages,
  Music,
  PersonStanding,
  Volleyball,
  type LucideIcon,
} from "lucide-react";

import type { Programa } from "@/content/programas";

const icons: Record<string, LucideIcon> = {
  ChefHat,
  Globe,
  Languages,
  Music,
  PersonStanding,
  Volleyball,
};

export function ProgramaCard({ programa }: { programa: Programa }) {
  const Icon = icons[programa.icon] ?? BookOpen;

  return (
    <article className="flex gap-4 rounded-3xl border border-border bg-background p-6 sm:gap-5 md:p-7">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-lg font-bold text-primary-deep">{programa.nome}</h3>
        <p className="mt-1 text-xs font-extrabold tracking-eyebrow text-accent-ink uppercase">
          {programa.publico}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{programa.texto}</p>
      </div>
    </article>
  );
}
