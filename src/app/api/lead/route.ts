import { NextResponse } from "next/server";

/**
 * Recebe o lead do formulário e encaminha para o destino configurado.
 *
 * Defina LEAD_WEBHOOK_URL no .env.local apontando para CRM, n8n, Make,
 * Zapier ou planilha. Sem a variável, o lead é apenas logado — a página
 * continua funcionando porque o contato acontece via WhatsApp de qualquer forma.
 */

type Lead = {
  nome?: string;
  telefone?: string;
  empresa?: string;
  perfil?: string;
  verba?: string;
  origem?: string;
};

export async function POST(req: Request) {
  let lead: Lead;

  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "payload inválido" }, { status: 400 });
  }

  const nome = (lead.nome ?? "").trim();
  const telefone = (lead.telefone ?? "").replace(/\D/g, "");

  if (nome.length < 2 || telefone.length < 10) {
    return NextResponse.json({ ok: false, erro: "dados incompletos" }, { status: 422 });
  }

  const payload = {
    nome,
    telefone,
    empresa: (lead.empresa ?? "").trim() || null,
    perfil: lead.perfil ?? null,
    verba: lead.verba ?? null,
    origem: lead.origem ?? "site",
    recebidoEm: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // Não devolvemos erro ao usuário: ele segue para o WhatsApp normalmente.
      console.error("[lead] falha ao encaminhar para o webhook", e);
    }
  } else {
    console.info("[lead] LEAD_WEBHOOK_URL não configurado. Lead recebido:", payload);
  }

  return NextResponse.json({ ok: true });
}
