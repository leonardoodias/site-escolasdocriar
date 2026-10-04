import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UnidadesContato } from "@/components/site/ContatoDialog";
import { Container, PageHero } from "@/components/site/Section";
import { school } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Escolas do Criar" },
      {
        name: "description",
        content:
          "Fale com o Castelinho do Criar ou com a Escola Castelo do Criar, em Santa Rosa de Viterbo/SP: endereço, telefone, WhatsApp e horários de atendimento de cada unidade.",
      },
      { property: "og:title", content: "Contato — Escolas do Criar" },
      {
        property: "og:description",
        content: "Endereço, telefone, WhatsApp, e-mail e horários de atendimento de cada unidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

/** Endereço e mapa do Castelinho do Criar — mesmos dados usados no rodapé do site. */
const castelinhoContato = {
  nome: "Castelinho do Criar",
  endereco: ["Av. São Paulo, 1381-1563", "Santa Rosa de Viterbo, São Paulo", "CEP 14270-000"],
  horario: "Segunda a Sexta-Feira, das 7h às 17h.",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Sao+Paulo,+1381-1563,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-000&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Sao+Paulo,+1381-1563,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-000",
};

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a nossa equipe"
        text="Estamos à disposição para tirar dúvidas, apresentar a proposta pedagógica e receber sua família para uma visita — no Castelinho do Criar ou no Castelo do Criar."
      />

      <section className="section">
        <Container>
          <UnidadesContato titleAs="h2" />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Castelinho do Criar */}
            <div className="flex flex-col">
              <h3 className="font-display text-xl font-extrabold text-primary-deep">
                {castelinhoContato.nome}
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">
                    {castelinhoContato.endereco.map((linha) => (
                      <span key={linha} className="block">
                        {linha}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">{castelinhoContato.horario}</span>
                </li>
              </ul>

              <div className="mt-auto flex flex-col gap-6 pt-6">
                <Button asChild variant="outline" className="min-h-12 w-fit rounded-full font-bold">
                  <a href={castelinhoContato.mapsDirections} target="_blank" rel="noopener noreferrer">
                    Ver rota no mapa
                  </a>
                </Button>

                <div className="overflow-hidden rounded-4xl shadow-lift">
                  <iframe
                    src={castelinhoContato.mapsEmbed}
                    title="Mapa da localização do Castelinho do Criar"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-72 w-full border-0"
                  />
                </div>
              </div>
            </div>

            {/* Castelo do Criar */}
            <div className="flex flex-col">
              <h3 className="font-display text-xl font-extrabold text-primary-deep">
                {school.shortName}
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">
                    <span className="block">{school.address.street}</span>
                    <span className="block">{school.address.city}</span>
                    <span className="block">CEP {school.address.zip}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">{school.hours}</span>
                </li>
              </ul>

              <div className="mt-auto flex flex-col gap-6 pt-6">
                <Button asChild variant="outline" className="min-h-12 w-fit rounded-full font-bold">
                  <a href={school.mapsDirections} target="_blank" rel="noopener noreferrer">
                    Ver rota no mapa
                  </a>
                </Button>

                <div className="overflow-hidden rounded-4xl shadow-lift">
                  <iframe
                    src={school.mapsEmbed}
                    title="Mapa da localização da Escola Castelo do Criar"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-72 w-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
