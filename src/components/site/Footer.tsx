import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { localizacaoCastelinho, localizacaoCastelo, unidades } from "@/content/contatos";
import { grupo } from "@/content/grupo";

const casteloDetails = {
  ...unidades.castelo,
  ...localizacaoCastelo.rodape,
  faixa: "Fundamental I, II e Médio",
};

const castelinhoDetails = {
  ...unidades.castelinho,
  ...localizacaoCastelinho,
  faixa: "Primeira Infância",
};

const linksRapidos = [
  { label: "Nossas Escolas", to: "/escolas" },
  { label: "Matrículas", to: "/matriculas" },
  { label: "Contato", to: "/contato" },
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
] as const;

export function Footer() {
  return (
    <footer className="mt-4 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr]">
        {/* Coluna 1 — Escolas do Criar */}
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <div>
            <img
              src={grupo.logo}
              alt={grupo.nome}
              width={720}
              height={419}
              loading="lazy"
              className="h-auto w-48"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground md:max-w-48">{grupo.descricao}</p>
        </div>

        {/* Coluna 2 — Castelinho do Criar */}
        <div className="flex flex-col">
          <div className="flex min-h-10 flex-col">
            <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
              {castelinhoDetails.nome}
            </h3>
            <span className="mt-0.5 text-xs font-semibold text-accent-ink uppercase">
              {castelinhoDetails.faixa}
            </span>
          </div>
          <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {castelinhoDetails.endereco.map((linha) => (
                  <span key={linha} className="block">
                    {linha}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2 max-lg:mb-5.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href={castelinhoDetails.telefoneHref}
                className="touch-target hover:text-primary transition-colors"
              >
                <span className="whitespace-nowrap">{castelinhoDetails.telefone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <ExternalLink
                href={castelinhoDetails.whatsappUrl}
                aria-label={`WhatsApp do ${castelinhoDetails.nome}, ${castelinhoDetails.whatsapp}`}
                className="touch-target hover:text-primary transition-colors"
              >
                <span className="whitespace-nowrap">{castelinhoDetails.whatsapp}</span>
              </ExternalLink>
            </li>
          </ul>
          <div className="mt-3 flex gap-3 max-lg:mt-4.5">
            <ExternalLink
              href={castelinhoDetails.instagram}
              aria-label="Instagram Castelinho do Criar"
              className="touch-target grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-3.5" />
            </ExternalLink>
            <ExternalLink
              href={castelinhoDetails.facebook}
              aria-label="Facebook Castelinho do Criar"
              className="touch-target grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-3.5" />
            </ExternalLink>
          </div>
        </div>

        {/* Coluna 3 — Castelo do Criar */}
        <div className="flex flex-col">
          <div className="flex min-h-10 flex-col">
            <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
              {casteloDetails.nome}
            </h3>
            <span className="mt-0.5 text-xs font-semibold text-accent-ink uppercase">
              {casteloDetails.faixa}
            </span>
          </div>
          <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {casteloDetails.endereco.map((linha) => (
                  <span key={linha} className="block">
                    {linha}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2 max-lg:mb-5.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href={casteloDetails.telefoneHref}
                className="touch-target hover:text-primary transition-colors"
              >
                <span className="whitespace-nowrap">{casteloDetails.telefone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <ExternalLink
                href={casteloDetails.whatsappUrl}
                aria-label={`WhatsApp do ${casteloDetails.nome}, ${casteloDetails.whatsapp}`}
                className="touch-target hover:text-primary transition-colors"
              >
                <span className="whitespace-nowrap">{casteloDetails.whatsapp}</span>
              </ExternalLink>
            </li>
          </ul>
          <div className="mt-3 flex gap-3 max-lg:mt-4.5">
            <ExternalLink
              href={casteloDetails.instagram}
              aria-label="Instagram Castelo do Criar"
              className="touch-target grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-3.5" />
            </ExternalLink>
            <ExternalLink
              href={casteloDetails.facebook}
              aria-label="Facebook Castelo do Criar"
              className="touch-target grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-3.5" />
            </ExternalLink>
          </div>
        </div>

        {/* Coluna 4 — Links rápidos */}
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <div className="flex flex-col lg:min-h-10">
            <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
              Links rápidos
            </h3>
          </div>
          <ul className="mt-1 grid grid-cols-2 gap-x-4 lg:mt-3 lg:block lg:space-y-2.5">
            {linksRapidos.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex min-h-11 items-center text-sm font-semibold text-foreground/80 hover:text-primary transition-colors lg:inline lg:min-h-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {grupo.nome} — Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link
                to="/politica-de-privacidade"
                className="touch-target hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-de-uso"
                className="touch-target hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground/70">
            Desenvolvido por Leonardo Dias Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
