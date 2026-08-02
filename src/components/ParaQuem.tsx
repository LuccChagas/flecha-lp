import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { paraQuem } from "@/lib/site";

export default function ParaQuem() {
  return (
    <section className="relative bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tema="claro"
          eyebrow="Encaixe"
          titulo="A Flecha não é para todo mundo — e isso é proposital."
          texto="Preferimos dizer não no primeiro contato a entregar um resultado que não sustenta. Veja se a sua operação está no alvo."
        />

        <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="h-full border-t-2 border-petrol-700 pt-8">
              <h3 className="display text-xl text-petrol-700">Faz sentido para</h3>
              <ul className="mt-8 space-y-5">
                {paraQuem.sim.map((item) => (
                  <li key={item} className="flex gap-4">
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      aria-hidden
                      className="mt-1.5 shrink-0 text-petrol-700"
                    >
                      <path
                        d="M1 6.5 6.2 11.5 17 1"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      />
                    </svg>
                    <span className="leading-relaxed text-steel-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full border-t-2 border-steel-500/40 pt-8">
              <h3 className="display text-xl text-steel-600">Não faz sentido para</h3>
              <ul className="mt-8 space-y-5">
                {paraQuem.nao.map((item) => (
                  <li key={item} className="flex gap-4">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                      className="mt-1 shrink-0 text-steel-500"
                    >
                      <path d="M2 2 14 14M14 2 2 14" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="leading-relaxed text-steel-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
