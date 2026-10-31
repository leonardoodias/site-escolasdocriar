import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ContatoDialog } from "@/components/site/ContatoDialog";
import { cn } from "@/lib/utils";

const CONTROLES = "a,button,input,select,textarea,summary,label,iframe,[role=button]";
const AMOSTRAS = [0, 1 / 3, 2 / 3, 1];

function temTextoSob(elemento: Element, area: DOMRect) {
  const faixa = document.createRange();
  for (const no of elemento.childNodes) {
    if (no.nodeType !== Node.TEXT_NODE || !no.textContent?.trim()) continue;
    faixa.selectNodeContents(no);
    for (const linha of faixa.getClientRects()) {
      if (
        linha.left < area.right &&
        linha.right > area.left &&
        linha.top < area.bottom &&
        linha.bottom > area.top
      ) {
        return true;
      }
    }
  }
  return false;
}

/** Indica se o botão, na posição atual, cobre um controle ou uma linha de texto da página. */
function cobreConteudo(botao: HTMLElement) {
  const area = botao.getBoundingClientRect();
  for (const fracaoX of AMOSTRAS) {
    for (const fracaoY of AMOSTRAS) {
      const x = area.left + area.width * fracaoX;
      const y = area.top + area.height * fracaoY;
      for (const elemento of document.elementsFromPoint(x, y)) {
        if (botao.contains(elemento)) continue;
        if (elemento.closest(CONTROLES) || temTextoSob(elemento, area)) return true;
      }
    }
  }
  return false;
}

export function WhatsAppFloat() {
  const botaoRef = useRef<HTMLButtonElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let pendente: ReturnType<typeof setTimeout> | undefined;
    let espera: ReturnType<typeof setTimeout> | undefined;

    const avaliar = () => {
      pendente = undefined;
      const botao = botaoRef.current;
      if (!botao) return;
      clearTimeout(espera);
      if (botao !== document.activeElement && cobreConteudo(botao)) setVisivel(false);
      // A espera evita que o botão pisque nos intervalos entre blocos durante a rolagem.
      else espera = setTimeout(() => setVisivel(true), 150);
    };
    const agendar = () => {
      pendente ??= setTimeout(avaliar, 100);
    };

    agendar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    // Cobre o que muda sem rolagem: carrossel, acordeões e imagens carregando.
    const intervalo = setInterval(agendar, 1000);

    return () => {
      clearTimeout(pendente);
      clearTimeout(espera);
      clearInterval(intervalo);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, []);

  return (
    <ContatoDialog>
      <button
        ref={botaoRef}
        type="button"
        aria-label="Fale com a nossa equipe"
        className={cn(
          "fixed right-4 bottom-4 z-50 flex min-h-14 cursor-pointer items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-bold text-white shadow-lift transition-[opacity,transform,visibility] duration-200 hover:scale-105 motion-reduce:transition-none sm:right-6 sm:bottom-6",
          !visivel && "invisible opacity-0",
        )}
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </ContatoDialog>
  );
}
