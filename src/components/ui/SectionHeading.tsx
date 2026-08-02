import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  titulo: React.ReactNode;
  texto?: React.ReactNode;
  tema?: "escuro" | "claro";
  alinhamento?: "esquerda" | "centro";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  titulo,
  texto,
  tema = "escuro",
  alinhamento = "esquerda",
  className,
}: Props) {
  const escuro = tema === "escuro";
  const centro = alinhamento === "centro";

  return (
    <div className={cn(centro && "mx-auto max-w-3xl text-center", className)}>
      <Reveal>
        <p
          className={cn(
            "eyebrow flex items-center gap-3",
            centro && "justify-center",
            escuro ? "text-steel-400" : "text-steel-600",
          )}
        >
          <span
            className={cn(
              "inline-block h-px w-8",
              escuro ? "bg-steel-500" : "bg-steel-500/70",
            )}
          />
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2
          className={cn(
            "display mt-6 text-[clamp(1.5rem,3.2vw,2.6rem)]",
            !centro && "max-w-3xl",
            escuro ? "text-bone-100" : "text-petrol-700",
          )}
        >
          {titulo}
        </h2>
      </Reveal>

      {texto && (
        <Reveal delay={150}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              !centro && "max-w-2xl",
              escuro ? "text-steel-300" : "text-steel-700",
            )}
          >
            {texto}
          </p>
        </Reveal>
      )}
    </div>
  );
}
