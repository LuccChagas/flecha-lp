import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import CtaWhatsApp from "./ui/CtaWhatsApp";
import { metodo } from "@/lib/site";

export default function Metodo() {
  return (
    <section id="metodo" className="relative bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tema="claro"
          alinhamento="centro"
          eyebrow="Método Flecha"
          titulo="Quatro etapas. Uma direção."
          texto="O nome da marca não é enfeite. Toda flecha precisa de mira antes de tensão, de tensão antes de disparo e de disparo antes de impacto. Fora dessa ordem, é só gasto."
        />

        <div className="relative mt-20 sm:mt-24">
          {/* Linha condutora (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-steel-500/30 lg:block"
            aria-hidden
          />

          <div className="grid gap-14 lg:grid-cols-4 lg:gap-10">
            {metodo.map((e, i) => (
              <Reveal key={e.n} delay={i * 110} className="relative">
                {/* Marcador */}
                <div className="flex items-center gap-5 lg:block">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center bg-petrol-700">
                    <span className="display text-lg text-bone-100">{e.n}</span>
                  </div>
                  <h3 className="display text-3xl text-petrol-700 sm:text-4xl lg:mt-8">
                    {e.nome}
                  </h3>
                </div>
                <p className="mt-5 font-bold leading-snug text-petrol-700 lg:mt-4">
                  {e.titulo}
                </p>
                <p className="mt-3 leading-relaxed text-steel-700">{e.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-20 flex flex-col items-center gap-5 border-t border-steel-500/25 pt-14 text-center">
            <p className="text-lg text-steel-700">
              O diagnóstico é a etapa 01 — e ela é por nossa conta.
            </p>
            <CtaWhatsApp
              origem="metodo"
              variante="claro"
              mensagem="Olá! Quero começar pela etapa 01 (Mira) e fazer o diagnóstico da minha operação."
            >
              Começar pela mira
            </CtaWhatsApp>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
