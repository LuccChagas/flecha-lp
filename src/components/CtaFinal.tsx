import Image from "next/image";
import Reveal from "./ui/Reveal";
import FormularioLead from "./FormularioLead";

const entregaveis = [
  "Auditoria das campanhas e do rastreamento que você já tem hoje",
  "Leitura do seu custo por lead frente ao benchmark do segmento",
  "Diagnóstico do funil comercial: onde a oportunidade está sendo perdida",
  "Plano de estrutura para os primeiros 90 dias — leve mesmo que não feche",
];

export default function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-petrol-700 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(110% 80% at 80% 10%, #054f66 0%, #003e52 45%, #002532 100%)",
        }}
      />
      <div className="flecha-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-steel-400">
                <span className="inline-block h-px w-8 bg-steel-500" />
                Etapa 01 · Mira
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="display mt-6 text-[clamp(1.7rem,3.8vw,3rem)] text-bone-100">
                Diagnóstico gratuito da sua operação.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel-300">
                Uma conversa de 30 minutos para entender onde está o gargalo — na mídia,
                no funil ou no comercial. Você sai com um plano na mão, fechando ou não.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-5">
              {entregaveis.map((item, i) => (
                <Reveal key={item} delay={200 + i * 70} as="li">
                  <div className="flex gap-4">
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 20 15"
                      fill="none"
                      aria-hidden
                      className="mt-1.5 shrink-0"
                    >
                      <path d="M0 1.5h8l4.5 6L8 13.5H0l4.5-6L0 1.5Z" fill="#8191A0" />
                      <path d="M11 1.5h8l-4.5 6L19 13.5h-8l4.5-6L11 1.5Z" fill="#F0EDE4" />
                    </svg>
                    <span className="leading-relaxed text-steel-300">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={480}>
              <Image
                src="/brand/selo-branco.png"
                alt=""
                width={1500}
                height={1500}
                aria-hidden
                className="mt-14 hidden w-24 opacity-30 lg:block"
              />
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="border border-bone-100/15 bg-petrol-950/45 p-7 backdrop-blur-sm sm:p-10">
              <FormularioLead />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
