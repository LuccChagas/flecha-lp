import Image from "next/image";
import CtaWhatsApp from "./ui/CtaWhatsApp";
import Reveal from "./ui/Reveal";
import { metricas } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-svh flex-col overflow-hidden bg-petrol-950"
    >
      {/* Camadas de fundo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(125% 95% at 12% -10%, #00506b 0%, #003043 42%, #001a24 100%)",
        }}
      />
      <div className="flecha-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <Image
        src="/brand/simbolo.png"
        alt=""
        width={1500}
        height={1500}
        priority
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[46%] hidden w-[46vw] max-w-3xl -translate-y-1/2 opacity-[0.06] lg:block"
      />

      {/* Conteúdo */}
      <div className="relative flex flex-1 items-center px-5 pt-32 pb-20 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-6xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-steel-400">
                <span className="inline-block h-px w-8 bg-steel-500" />
                Tráfego pago · Mercado imobiliário
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-7 text-[clamp(1.7rem,4.4vw,3.2rem)] text-bone-100">
                Leads que viram visita.
                <br />
                <span className="text-steel-400">Visita que vira venda.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel-300 sm:text-xl">
                A Flecha Performance estrutura e gerencia campanhas de tráfego pago para
                imobiliárias, incorporadoras e corretores. Verba com direção, lead com
                intenção e número que sustenta decisão.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CtaWhatsApp
                  origem="hero"
                  variante="solido"
                  mensagem="Olá! Vim pelo site da Flecha Performance e quero o diagnóstico gratuito da minha operação."
                >
                  Quero um diagnóstico
                </CtaWhatsApp>
                <a
                  href="#metodo"
                  className="inline-flex items-center justify-center gap-3 border border-steel-500/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-bone-100 transition-colors duration-200 hover:border-bone-100 hover:bg-bone-100/5"
                >
                  Ver o método
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-6 text-sm text-steel-500">
                Diagnóstico sem custo · Resposta em até 1 dia útil
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Faixa de métricas */}
      <div className="relative border-t border-bone-100/10 bg-petrol-950/50 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {metricas.map((m, i) => (
            <Reveal
              key={m.rotulo}
              delay={i * 70}
              className={cn(
                "border-bone-100/10 py-6 sm:py-7",
                i % 2 === 1 && "border-l pl-5 sm:pl-7",
                i % 2 === 0 && "pr-5 sm:pr-7",
                i >= 2 && "border-t lg:border-t-0",
                i > 0 && "lg:border-l lg:pl-7",
                i < 3 && "lg:pr-7",
              )}
            >
              <p className="display text-2xl text-bone-100 sm:text-3xl">{m.valor}</p>
              <p className="mt-2 text-xs leading-snug text-steel-500 sm:text-sm">
                {m.rotulo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
