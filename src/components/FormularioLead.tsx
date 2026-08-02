"use client";

import { useState } from "react";
import { linkWhatsApp } from "@/lib/site";
import { track } from "@/lib/track";

const perfis = [
  "Incorporadora",
  "Imobiliária",
  "Corretor autônomo",
  "Outro segmento",
] as const;

const verbas = [
  "Até R$ 3 mil/mês",
  "R$ 3 mil a R$ 10 mil/mês",
  "R$ 10 mil a R$ 30 mil/mês",
  "Acima de R$ 30 mil/mês",
  "Ainda não invisto",
] as const;

function mascaraTelefone(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

type Estado = "parado" | "enviando" | "ok" | "erro";

export default function FormularioLead() {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    empresa: "",
    perfil: "" as string,
    verba: "" as string,
  });
  const [estado, setEstado] = useState<Estado>("parado");
  const [erro, setErro] = useState("");

  const set = (campo: keyof typeof dados) => (valor: string) =>
    setDados((d) => ({ ...d, [campo]: valor }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    if (dados.nome.trim().length < 2) return setErro("Preencha seu nome.");
    if (dados.telefone.replace(/\D/g, "").length < 10)
      return setErro("Informe um WhatsApp válido com DDD.");
    if (!dados.perfil) return setErro("Selecione o seu perfil de operação.");

    setEstado("enviando");

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, origem: "formulario-lp" }),
      });
    } catch {
      /* falha no webhook não pode travar o lead — segue para o WhatsApp */
    }

    track("Lead", { origem: "formulario", perfil: dados.perfil, verba: dados.verba });
    setEstado("ok");

    const mensagem = [
      "Olá! Vim pelo site da Flecha Performance e quero um diagnóstico.",
      "",
      `Nome: ${dados.nome}`,
      dados.empresa && `Empresa: ${dados.empresa}`,
      `Perfil: ${dados.perfil}`,
      dados.verba && `Verba atual: ${dados.verba}`,
      `WhatsApp: ${dados.telefone}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(linkWhatsApp(mensagem), "_blank", "noopener,noreferrer");
  }

  if (estado === "ok") {
    return (
      <div className="border border-bone-100/20 bg-petrol-900/60 px-8 py-14 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center border border-bone-100/25">
          <svg width="26" height="19" viewBox="0 0 26 19" fill="none" aria-hidden>
            <path
              d="M2 9.5 9.5 17 24 2"
              stroke="#F0EDE4"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
          </svg>
        </span>
        <h3 className="display mt-7 text-xl text-bone-100">Recebemos seus dados</h3>
        <p className="mt-4 leading-relaxed text-steel-300">
          Abrimos o WhatsApp com a sua mensagem já montada. Se a janela não abriu,
          use o botão abaixo.
        </p>
        <a
          href={linkWhatsApp(
            `Olá! Sou ${dados.nome} e acabei de preencher o formulário no site da Flecha Performance.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-bone-100 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-petrol-950 transition-colors hover:bg-white"
        >
          Abrir conversa
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Campo
        id="nome"
        label="Nome"
        value={dados.nome}
        onChange={set("nome")}
        placeholder="Como podemos te chamar"
        autoComplete="name"
      />

      <Campo
        id="telefone"
        label="WhatsApp"
        value={dados.telefone}
        onChange={(v) => set("telefone")(mascaraTelefone(v))}
        placeholder="(11) 99999-9999"
        inputMode="tel"
        autoComplete="tel"
      />

      <Campo
        id="empresa"
        label="Empresa"
        opcional
        value={dados.empresa}
        onChange={set("empresa")}
        placeholder="Nome da imobiliária ou incorporadora"
        autoComplete="organization"
      />

      <Select
        id="perfil"
        label="Perfil da operação"
        value={dados.perfil}
        onChange={set("perfil")}
        opcoes={perfis}
        placeholder="Selecione"
      />

      <Select
        id="verba"
        label="Verba mensal em mídia"
        opcional
        value={dados.verba}
        onChange={set("verba")}
        opcoes={verbas}
        placeholder="Selecione"
      />

      {erro && (
        <p role="alert" className="text-sm text-bone-300">
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="w-full bg-bone-100 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-petrol-950 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando…" : "Quero meu diagnóstico"}
      </button>

      <p className="text-xs leading-relaxed text-steel-600">
        Ao enviar, você autoriza o contato da Flecha Performance pelos dados informados.
        Não compartilhamos suas informações com terceiros.
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */

type CampoProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  opcional?: boolean;
  inputMode?: "text" | "tel" | "email";
  autoComplete?: string;
};

const baseCampo =
  "w-full border border-bone-100/20 bg-petrol-950/40 px-4 py-3.5 text-bone-100 transition-colors placeholder:text-steel-600 focus:border-steel-400 focus:outline-none";

function Campo({ id, label, value, onChange, placeholder, opcional, inputMode, autoComplete }: CampoProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-steel-400">
        {label}
        {opcional && <span className="text-steel-600"> (opcional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={baseCampo}
      />
    </div>
  );
}

function Select({
  id,
  label,
  value,
  onChange,
  opcoes,
  placeholder,
  opcional,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  opcoes: readonly string[];
  placeholder: string;
  opcional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-steel-400">
        {label}
        {opcional && <span className="text-steel-600"> (opcional)</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseCampo} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M1 1l5 5 5-5" stroke="%238191A0" stroke-width="1.6"/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10`}
      >
        <option value="" disabled className="bg-petrol-900">
          {placeholder}
        </option>
        {opcoes.map((o) => (
          <option key={o} value={o} className="bg-petrol-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
