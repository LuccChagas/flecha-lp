import Image from "next/image";
import { site, linkWhatsApp } from "@/lib/site";

const navegacao = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
];

const redes = [
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.tiktok, label: "TikTok" },
  { href: site.social.facebook, label: "Facebook" },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-bone-100/10 bg-petrol-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-horizontal-branco.png"
              alt="Flecha Performance"
              width={1500}
              height={344}
              className="h-9 w-auto"
            />
            <p className="mt-7 max-w-sm leading-relaxed text-steel-500">
              Gestão de tráfego pago com direção para imobiliárias, incorporadoras e
              corretores. Precisão, foco em resultado e leitura de número.
            </p>
          </div>

          <nav aria-label="Seções do site">
            <h2 className="eyebrow text-steel-600">Navegação</h2>
            <ul className="mt-6 space-y-3.5">
              {navegacao.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-steel-400 transition-colors hover:text-bone-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-steel-600">Contato</h2>
            <ul className="mt-6 space-y-3.5">
              <li>
                <a
                  href={linkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-400 transition-colors hover:text-bone-100"
                >
                  {site.contato.whatsappExibicao}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contato.email}`}
                  className="text-steel-400 transition-colors hover:text-bone-100"
                >
                  {site.contato.email}
                </a>
              </li>
              <li className="text-steel-500">{site.contato.cidade}</li>
            </ul>

            <h2 className="eyebrow mt-10 text-steel-600">Redes</h2>
            <ul className="mt-6 space-y-3.5">
              {redes.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-400 transition-colors hover:text-bone-100"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-bone-100/10 pt-8 text-sm text-steel-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          {/* TODO: adicionar CNPJ e link da política de privacidade */}
          <p>Feito para performar.</p>
        </div>
      </div>
    </footer>
  );
}
