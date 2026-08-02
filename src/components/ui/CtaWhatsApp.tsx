"use client";

import { linkWhatsApp } from "@/lib/site";
import { track } from "@/lib/track";

type Props = {
  children: React.ReactNode;
  mensagem?: string;
  /** Onde o botão está na página — vira parâmetro do evento de conversão */
  origem: string;
  variante?: "solido" | "contorno" | "claro";
  className?: string;
};

const estilos = {
  // Off white sobre fundo petróleo
  solido:
    "bg-bone-100 text-petrol-950 hover:bg-white active:translate-y-px",
  // Petróleo sobre fundo claro
  claro:
    "bg-petrol-700 text-bone-100 hover:bg-petrol-600 active:translate-y-px",
  contorno:
    "border border-steel-500/60 text-bone-100 hover:border-bone-100 hover:bg-bone-100/5 active:translate-y-px",
} as const;

export default function CtaWhatsApp({
  children,
  mensagem,
  origem,
  variante = "solido",
  className = "",
}: Props) {
  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("Contact", { metodo: "whatsapp", origem })}
      className={`group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-200 ${estilos[variante]} ${className}`}
    >
      {children}
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        <path
          d="M0 6h13.5M9.5 1.5 14.5 6l-5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    </a>
  );
}
