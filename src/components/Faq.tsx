"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { faq } from "@/lib/site";

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-petrol-900 py-24 sm:py-32">
      <div className="flecha-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          alinhamento="centro"
          eyebrow="Dúvidas"
          titulo="O que perguntam antes de fechar."
        />

        <div className="mt-14 divide-y divide-bone-100/12 border-y border-bone-100/12 sm:mt-16">
          {faq.map((item, i) => {
            const ativo = aberto === i;
            return (
              <Reveal key={item.p} delay={i * 60}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberto(ativo ? null : i)}
                    aria-expanded={ativo}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-bone-100"
                  >
                    <span
                      className={`text-lg leading-snug transition-colors ${
                        ativo ? "text-bone-100" : "text-steel-300"
                      }`}
                    >
                      {item.p}
                    </span>
                    <span
                      className={`mt-1.5 shrink-0 text-steel-500 transition-transform duration-300 ${
                        ativo ? "rotate-90" : ""
                      }`}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M4 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  className="grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: ativo ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-10 leading-relaxed text-steel-400">
                      {item.r}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
