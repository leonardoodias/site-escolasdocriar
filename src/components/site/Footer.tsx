import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { unidades } from "@/content/contatos";
import { grupo } from "@/content/grupo";

const casteloDetails = {
  ...unidades.castelo,
  faixa: "Fundamental I, II e Médio",
  endereco: ["Rua Coronel Garcia, 158 — Centro", "Santa Rosa de Viterbo/SP — CEP 14270-077"],
  instagram: "https://www.instagram.com/castelodocriar/",
  facebook: "https://www.facebook.com/profile.php?id=61588620640733",
};

const castelinhoDetails = {
  ...unidades.castelinho,
  faixa: "Primeira Infância",
  endereco: ["Av. São Paulo, 1381-1563", "Santa Rosa de Viterbo - SP", "CEP 14270-000"],
  instagram: "https://www.instagram.com/castelinhodocriar/",
  facebook: "https://www.facebook.com/profile.php?id=61561814674315",
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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Coluna 1 — Escolas do Criar */}
        <div className="flex flex-col">
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
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {grupo.descricao}
          </p>
        </div>

        {/* Coluna 2 — Castelinho do Criar */}
        <div className="flex flex-col">
          <div className="flex min-h-10 flex-col">
            <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
              {castelinhoDetails.nome}
            </h3>
            <span className="mt-0.5 text-xs font-semibold text-accent uppercase">
              {castelinhoDetails.faixa}
            </span>
          </div>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {castelinhoDetails.endereco.map((linha) => (
                  <span key={linha} className="block">
                    {linha}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <a href={castelinhoDetails.telefoneHref} className="hover:text-primary transition-colors">
                <span className="whitespace-nowrap">{castelinhoDetails.telefone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <ExternalLink
                href={castelinhoDetails.whatsappUrl}
                aria-label={`WhatsApp do ${castelinhoDetails.nome}, ${castelinhoDetails.whatsapp}`}
                className="hover:text-primary transition-colors"
              >
                <span className="whitespace-nowrap">{castelinhoDetails.whatsapp}</span>
              </ExternalLink>
            </li>
          </ul>
          <div className="mt-3 flex gap-2">
            <ExternalLink
              href={castelinhoDetails.instagram}
              aria-label="Instagram Castelinho do Criar"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-3.5" />
            </ExternalLink>
            <ExternalLink
              href={castelinhoDetails.facebook}
              aria-label="Facebook Castelinho do Criar"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
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
            <span className="mt-0.5 text-xs font-semibold text-accent uppercase">
              {casteloDetails.faixa}
            </span>
          </div>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {casteloDetails.endereco.map((linha) => (
                  <span key={linha} className="block">
                    {linha}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <a href={casteloDetails.telefoneHref} className="hover:text-primary transition-colors">
                <span className="whitespace-nowrap">{casteloDetails.telefone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <ExternalLink
                href={casteloDetails.whatsappUrl}
                aria-label={`WhatsApp do ${casteloDetails.nome}, ${casteloDetails.whatsapp}`}
                className="hover:text-primary transition-colors"
              >
                <span className="whitespace-nowrap">{casteloDetails.whatsapp}</span>
              </ExternalLink>
            </li>
          </ul>
          <div className="mt-3 flex gap-2">
            <ExternalLink
              href={casteloDetails.instagram}
              aria-label="Instagram Castelo do Criar"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-3.5" />
            </ExternalLink>
            <ExternalLink
              href={casteloDetails.facebook}
              aria-label="Facebook Castelo do Criar"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-3.5" />
            </ExternalLink>
          </div>
        </div>

        {/* Coluna 4 — Links rápidos */}
        <div className="flex flex-col">
          <div className="flex min-h-10 flex-col">
            <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
              Links rápidos
            </h3>
          </div>
          <ul className="mt-3 space-y-2">
            {linksRapidos.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-xs font-semibold text-foreground/80 hover:text-primary transition-colors"
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
            <p>© {new Date().getFullYear()} {grupo.nome} — Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground/60 sm:text-left">
            Desenvolvido por - Leonardo Dias Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
