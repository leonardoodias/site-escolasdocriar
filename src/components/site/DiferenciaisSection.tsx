import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container, SectionHeading } from "@/components/site/Section";
import { diferenciais } from "@/content/grupo";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
};

export function DiferenciaisSection() {
  return (
    <section className="section bg-secondary/30">
      <Container>
        <SectionHeading eyebrow="Diferenciais" title="O que nos move" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-5">
          {diferenciais.map((item) => {
            const Icon = icons[item.icon] ?? Sprout;
            return (
              <div
                key={item.title}
                className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft md:p-7"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary-deep">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
