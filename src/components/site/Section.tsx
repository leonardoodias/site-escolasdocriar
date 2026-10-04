import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-2 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-extrabold text-primary-deep md:text-4xl">{title}</Tag>
      {text && <p className="mt-3 text-base text-muted-foreground md:text-lg">{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  supportText,
  children,
  size = "default",
  wide = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  /** Linha secundária, menor e mais discreta que `text` — fica abaixo dele. */
  supportText?: string;
  children?: ReactNode;
  size?: "default" | "compact";
  /** Usa a largura total do Container (título com mais espaço antes de quebrar linha). */
  wide?: boolean;
}) {
  return (
    <section className="gradient-soft border-b border-border">
      <Container className={cn("py-14 md:py-20", size === "compact" && "py-10 md:py-14")}>
        <div className={cn("max-w-3xl", wide && "max-w-none")}>
          {eyebrow && (
            <p className="mb-3 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-extrabold text-balance text-primary-deep md:text-5xl">
            {title}
          </h1>
          {text && (
            <p
              className={cn(
                "mt-5 text-lg text-muted-foreground",
                wide && "max-w-none text-xl font-semibold text-foreground/90",
              )}
            >
              {text}
            </p>
          )}
          {supportText && (
            <p
              className={cn(
                "mt-3 text-sm text-muted-foreground",
                wide && "max-w-4xl text-muted-foreground/75",
              )}
            >
              {supportText}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
