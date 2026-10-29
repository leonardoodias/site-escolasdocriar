import { useState } from "react";

type Props = {
  imagens: { src: string; alt: string }[];
};

/**
 * Galeria simples da página da escola: imagem principal + miniaturas clicáveis.
 */
export function GaleriaImagens({ imagens }: Props) {
  const [ativa, setAtiva] = useState(0);
  const atual = imagens[ativa] ?? imagens[0];

  return (
    <div className="flex flex-col gap-3">
      <img
        src={atual.src}
        alt={atual.alt}
        className="aspect-[4/3] w-full rounded-4xl object-cover shadow-lift"
      />
      {imagens.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {imagens.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setAtiva(i)}
              aria-label={`Ver imagem ${i + 1} da galeria`}
              aria-current={i === ativa}
              className={`overflow-hidden rounded-2xl border-2 transition focus-visible:outline-2 focus-visible:outline-accent ${
                i === ativa
                  ? "border-accent"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <img
                src={img.src}
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
