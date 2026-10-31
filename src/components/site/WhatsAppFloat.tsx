import { MessageCircle } from "lucide-react";

import { ContatoDialog } from "@/components/site/ContatoDialog";

export function WhatsAppFloat() {
  return (
    <ContatoDialog>
      <button
        type="button"
        aria-label="Fale com a nossa equipe"
        className="fixed right-4 bottom-4 z-50 flex min-h-14 cursor-pointer items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-bold text-white shadow-lift transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </ContatoDialog>
  );
}
