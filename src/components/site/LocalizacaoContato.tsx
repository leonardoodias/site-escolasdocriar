import { Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Container, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { unidades, type Localizacao, type UnidadeId } from "@/content/contatos";

const rotuloClass = "block text-xs font-semibold text-muted-foreground uppercase";

/** Encerramento das páginas das escolas: endereço, canais, redes, mapa e ações de cada unidade. */
export function LocalizacaoContato({
  unidade,
  localizacao,
  mensagem,
}: {
  unidade: UnidadeId;
  localizacao: Localizacao;
  mensagem: string;
}) {
  const dados = unidades[unidade];

  return (
    <section id="localizacao" className="section scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow={dados.nome} title="Localização e contato" text={mensagem} />

          <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <ul className="space-y-5 text-sm sm:text-base">
                <li className="flex gap-3.5">
                  <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className={rotuloClass}>Endereço</span>
                    <span className="mt-0.5 block leading-relaxed text-foreground/85">
                      {localizacao.endereco.map((linha) => (
                        <span key={linha} className="block">
                          {linha}
                        </span>
                      ))}
                    </span>
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <Clock className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className={rotuloClass}>Atendimento</span>
                    <span className="mt-0.5 block text-foreground/85">{dados.horario}</span>
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className={rotuloClass}>Telefone</span>
                    <a
                      href={dados.telefoneHref}
                      className="font-bold text-foreground transition-colors hover:text-primary"
                    >
                      {dados.telefone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <MessageCircle className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className={rotuloClass}>WhatsApp</span>
                    <ExternalLink
                      href={dados.whatsappUrl}
                      className="font-bold text-foreground transition-colors hover:text-primary"
                    >
                      {dados.whatsapp}
                    </ExternalLink>
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <ExternalLink
                  href={localizacao.instagram}
                  aria-label={`Instagram do ${dados.nome}`}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-primary-soft"
                >
                  <Instagram className="size-4.5" aria-hidden="true" />
                </ExternalLink>
                <ExternalLink
                  href={localizacao.facebook}
                  aria-label={`Facebook do ${dados.nome}`}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-primary-soft"
                >
                  <Facebook className="size-4.5" aria-hidden="true" />
                </ExternalLink>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-soft hover:opacity-90"
                >
                  <Link to="/matriculas">
                    <CalendarCheck className="mr-2 size-4" aria-hidden="true" />
                    Agendar uma visita
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-12 rounded-full border-primary/30 px-6 font-bold text-primary hover:bg-primary-soft"
                >
                  <ExternalLink href={dados.whatsappUrl}>
                    <MessageCircle className="mr-2 size-4" aria-hidden="true" />
                    Falar no WhatsApp
                  </ExternalLink>
                </Button>
              </div>
            </div>

            {localizacao.mapsEmbed && (
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-4xl border border-border shadow-lift">
                  <iframe
                    src={localizacao.mapsEmbed}
                    title={`Localização do ${dados.nome} no mapa`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block aspect-[4/3] w-full border-0 lg:aspect-[5/4]"
                  />
                </div>
                {localizacao.mapsDirections && (
                  <ExternalLink
                    href={localizacao.mapsDirections}
                    className="inline-flex w-fit items-center gap-1.5 rounded-full px-1 text-sm font-bold text-primary underline-offset-4 hover:underline"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Ver rota no mapa
                  </ExternalLink>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
