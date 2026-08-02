import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { cases, depoimentos } from "@/lib/site";

export default function Resultados() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-petrol-950 py-24 sm:py-32"
    >
      <Image
        src="/brand/simbolo.png"
        alt=""
        width={1500}
        height={1500}
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 hidden w-[38vw] max-w-xl opacity-[0.05] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Resultados"
          titulo="Número que a diretoria entende."
          texto="Alcance e engajamento não pagam folha. O que a Flecha reporta é custo por lead, custo por visita agendada e retorno sobre a mídia investida."
        />

        <div className="mt-16 grid gap-px bg-bone-100/10 sm:mt-20 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.segmento} delay={i * 100} className="bg-petrol-950">
              <article className="flex h-full flex-col px-7 py-10 sm:px-9 sm:py-12">
                <p className="eyebrow text-steel-500">{c.segmento}</p>
                <p className="mt-6 leading-relaxed text-steel-300">{c.resumo}</p>
                <dl className="mt-auto grid grid-cols-3 gap-4 pt-9">
                  {c.numeros.map((n) => (
                    <div key={n.rotulo}>
                      <dt className="sr-only">{n.rotulo}</dt>
                      <dd className="display whitespace-nowrap text-lg text-bone-100 sm:text-xl">
                        {n.valor}
                      </dd>
                      <p className="mt-1.5 text-xs leading-snug text-steel-500">
                        {n.rotulo}
                      </p>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mt-20 grid gap-8 sm:mt-24 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.cargo} delay={i * 100}>
              <figure className="flex h-full flex-col border-t border-steel-500/40 pt-8">
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  aria-hidden
                  className="text-steel-600"
                >
                  <path
                    d="M0 20V11.2C0 5 3.6 1 10 0l1.2 3.6C7.4 4.8 5.6 7 5.6 10H10v10H0Zm14.8 0V11.2c0-6.2 3.6-10.2 10-11.2L26 3.6C22.2 4.8 20.4 7 20.4 10H25v10H14.8Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-6 text-lg leading-relaxed text-bone-100">
                  {d.texto}
                </blockquote>
                <figcaption className="mt-6 text-sm text-steel-500">
                  <span className="block font-bold text-steel-400">{d.nome}</span>
                  {d.cargo}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
