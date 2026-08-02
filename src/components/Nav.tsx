"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CtaWhatsApp from "./ui/CtaWhatsApp";

const links = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [descolado, setDescolado] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setDescolado(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        descolado
          ? "border-b border-bone-100/10 bg-petrol-950/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="relative z-10 shrink-0" aria-label="Flecha Performance — início">
          <Image
            src="/brand/logo-horizontal-branco.png"
            alt="Flecha Performance"
            width={1500}
            height={344}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-steel-300 transition-colors hover:text-bone-100 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-steel-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CtaWhatsApp origem="nav" variante="solido" className="!px-6 !py-3 !text-xs">
            Falar com a Flecha
          </CtaWhatsApp>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-bone-100 transition-transform duration-300 ${
              aberto ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-bone-100 transition-transform duration-300 ${
              aberto ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 flex flex-col justify-center bg-petrol-950 px-8 transition-opacity duration-300 lg:hidden ${
          aberto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAberto(false)}
                className="display text-3xl text-bone-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <CtaWhatsApp origem="nav-mobile" variante="solido" className="w-full">
            Falar com a Flecha
          </CtaWhatsApp>
        </div>
      </div>
    </header>
  );
}
