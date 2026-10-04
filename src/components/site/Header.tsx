import { ContatoDialog } from "@/components/site/ContatoDialog";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { grupo } from "@/content/grupo";
import { navLinks } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        {/* Brand Identity */}
        <Link
          to="/"
          className="shrink-0 transition-opacity hover:opacity-90"
          aria-label="ESCOLAS DO CRIAR — página inicial"
        >
          <img
            src={grupo.logo}
            alt="Escolas do Criar — Castelinho do Criar e Castelo do Criar"
            width={720}
            height={419}
            className="h-[3.75rem] w-auto sm:h-[4.5rem]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{
                    className:
                      "bg-primary text-primary-foreground shadow-soft hover:bg-primary hover:text-primary-foreground",
                  }}
                  className="rounded-full px-3 py-2 text-sm font-bold text-primary-deep transition-colors hover:bg-primary-soft hover:text-primary xl:px-4 xl:text-[15px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <ContatoDialog>
            <Button
              variant="outline"
              size="icon"
              aria-label="Fale com a nossa equipe"
              className="size-9.5 rounded-full border-primary/30 text-primary transition-colors hover:bg-primary-soft hover:text-primary"
            >
              <MessageCircle className="size-4.5" />
            </Button>
          </ContatoDialog>

          <Button
            asChild
            className="hidden h-10 rounded-full bg-accent px-5 text-[13px] font-bold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            <Link to="/matriculas">
              <CalendarCheck className="mr-1.5 size-4" aria-hidden="true" />
              Agende uma visita
            </Link>
          </Button>

          {/* Hamburger toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="size-9.5 lg:hidden text-foreground hover:bg-muted"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <nav
          aria-label="Menu mobile"
          className="border-t border-border/70 bg-background/98 px-4 py-4 shadow-lg lg:hidden"
        >
          <ul className="mx-auto flex max-w-md flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{
                    className:
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                  }}
                  className="block rounded-xl px-3.5 py-2.5 text-base font-bold text-primary-deep transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-3 border-t border-border/60">
              <Button
                asChild
                className="h-11 w-full rounded-full bg-accent font-bold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90"
              >
                <Link to="/matriculas" onClick={() => setOpen(false)}>
                  <CalendarCheck className="mr-2 size-4" aria-hidden="true" />
                  Agende uma visita
                </Link>
              </Button>
            </li>
            <li className="pt-1.5">
              {/* O menu permanece aberto: fechá-lo desmontaria o modal junto. */}
              <ContatoDialog>
                <Button
                  variant="outline"
                  className="h-11 w-full rounded-full border-primary/30 font-bold text-primary"
                >
                  <MessageCircle className="mr-2 size-4" />
                  Fale com a nossa equipe
                </Button>
              </ContatoDialog>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
