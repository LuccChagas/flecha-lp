import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { dores } from "@/lib/site";

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="relative bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tema="claro"
          eyebrow="O diagnóstico"
          titulo={
            <>
              Se você se reconhece aqui, o problema não é o anúncio.
            </>
          }
          texto="É estrutura. Campanha sem alvo definido gera movimento, não gera venda. Estes são os quatro sintomas que mais aparecem quando uma operação imobiliária nos procura."
        />

        <div className="mt-16 grid gap-px border border-steel-500/20 bg-steel-500/20 sm:mt-20 sm:grid-cols-2">
          {dores.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 90} className="bg-bone-100">
              <div className="group h-full px-7 py-9 transition-colors duration-300 hover:bg-bone-50 sm:px-9 sm:py-11">
                <div className="flex items-start gap-5">
                  <span className="mt-1.5 shrink-0 text-steel-500 transition-colors duration-300 group-hover:text-petrol-700">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
                      <path d="M0 2h9l4 6-4 6H0l4-6-4-6Z" fill="currentColor" opacity="0.45" />
                      <path d="M11 2h9l-4 6 4 6h-9l4-6-4-6Z" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="display text-lg text-petrol-700 sm:text-xl">
                      {d.titulo}
                    </h3>
                    <p className="mt-4 leading-relaxed text-steel-700">{d.texto}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-14 border-l-2 border-petrol-700 pl-6 text-lg leading-relaxed text-petrol-700 sm:text-xl">
            Nenhum desses problemas se resolve trocando de criativo. Se resolve trocando
            de <strong className="font-bold">método</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
