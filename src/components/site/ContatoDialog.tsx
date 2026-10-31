import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { listaUnidades } from "@/content/contatos";
import { grupo } from "@/content/grupo";

/** Cartões de atendimento (WhatsApp e telefone) de cada unidade. */
export function UnidadesContato({ titleAs: Title = "h3" }: { titleAs?: "h2" | "h3" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {listaUnidades.map((unidade) => (
        <section
          key={unidade.nome}
          aria-label={unidade.nome}
          className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-5 shadow-soft"
        >
          <Title className="font-display text-lg font-extrabold text-primary-deep">
            {unidade.nome}
          </Title>
          <Button
            asChild
            size="lg"
            className="min-h-12 w-full rounded-full bg-whatsapp font-bold text-white shadow-soft hover:bg-whatsapp-deep"
          >
            <ExternalLink
              href={unidade.whatsappUrl}
              aria-label={`WhatsApp do ${unidade.nome}, ${unidade.whatsapp}`}
            >
              <MessageCircle className="mr-2 size-5" aria-hidden="true" />
              WhatsApp
            </ExternalLink>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-h-11 w-full rounded-full border-primary/30 font-bold text-primary hover:bg-primary-soft"
          >
            <a
              href={unidade.telefoneHref}
              aria-label={`Ligar para o ${unidade.nome}, ${unidade.telefone}`}
            >
              <Phone className="mr-2 size-4" aria-hidden="true" />
              {unidade.telefone}
            </a>
          </Button>
        </section>
      ))}
    </div>
  );
}

/** Abre o modal "Fale com a nossa equipe". O filho é o gatilho. */
export function ContatoDialog({
  children,
  onOpenChange,
}: {
  children: ReactNode;
  onOpenChange?: ((open: boolean) => void) | undefined;
}) {
  return (
    <Dialog {...(onOpenChange ? { onOpenChange } : {})}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] max-w-2xl overflow-y-auto rounded-3xl">
        <DialogHeader className="items-center text-center sm:text-center">
          <img
            src={grupo.logo}
            alt="Escolas do Criar"
            width={720}
            height={419}
            className="mx-auto h-auto w-40"
          />
          <DialogTitle className="mt-2 text-xl leading-tight font-extrabold text-primary-deep">
            Fale com a nossa equipe
          </DialogTitle>
          <DialogDescription>
            Escolha a unidade que deseja falar e entre em contato conosco.
          </DialogDescription>
        </DialogHeader>
        <UnidadesContato />
      </DialogContent>
    </Dialog>
  );
}
