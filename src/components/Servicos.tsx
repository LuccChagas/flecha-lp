import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { servicos } from "@/lib/site";

export default function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-petrol-900 py-24 sm:py-32">
      <div className="flecha-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que a Flecha faz"
          titulo="Uma operação de mídia inteira, não um serviço avulso."
          texto="Do primeiro clique ao contrato assinado, cada etapa é tratada como parte do mesmo funil — porque é assim que o resultado aparece."
        />

        <div className="mt-16 grid gap-px bg-bone-100/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Reveal key={s.titulo} delay={(i % 3) * 90} className="bg-petrol-900">
              <div className="group relative h-full overflow-hidden px-7 py-10 transition-colors duration-300 hover:bg-petrol-800 sm:px-9 sm:py-12">
                <span
                  className="absolute left-0 top-0 h-full w-0.5 bg-steel-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <p className="display text-xs text-steel-600">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-6 text-lg text-bone-100 sm:text-xl">
                  {s.titulo}
                </h3>
                <p className="mt-4 leading-relaxed text-steel-400">{s.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
