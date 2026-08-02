/**
 * Fonte única de verdade da landing page.
 * Tudo que o cliente pode querer trocar (números, textos, contatos) mora aqui.
 *
 * ⚠️ Itens marcados com TODO são placeholders — precisam ser confirmados
 * com a Flecha Performance antes de subir a página para produção.
 */

/**
 * Endereço público do site. Alimenta canonical, Open Graph e JSON-LD —
 * se apontar para um domínio que não existe, a prévia de compartilhamento quebra.
 *
 * 1. NEXT_PUBLIC_SITE_URL — defina quando o domínio definitivo estiver no ar
 * 2. Domínio de produção da Vercel (flecha-lp.vercel.app), preenchido sozinho
 * 3. Localhost, em desenvolvimento
 */
function resolverUrl() {
  const explicito = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicito) return explicito.replace(/\/$/, "");

  const vercel =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const site = {
  nome: "Flecha Performance",
  tagline: "Gestão de tráfego pago para o mercado imobiliário",
  descricao:
    "A Flecha Performance estrutura e gerencia campanhas de tráfego pago para imobiliárias, incorporadoras e corretores. Leads qualificados, custo por venda sob controle e previsibilidade de agenda.",
  url: resolverUrl(),

  contato: {
    // Número obtido no Linktree oficial (linktr.ee/leonardocaires)
    whatsapp: "5511983202163",
    whatsappExibicao: "(11) 98320-2163",
    // TODO: confirmar e-mail comercial da marca
    email: "contato@flechaperformance.com.br",
    cidade: "São Paulo — SP",
  },

  social: {
    instagram: "https://www.instagram.com/leocaires_/",
    // TODO: confirmar perfis da marca (hoje o Linktree aponta para os perfis pessoais)
    tiktok: "https://www.tiktok.com/@leonardocaires",
    facebook: "https://www.facebook.com/leonardocaires",
    linktree: "https://linktr.ee/leonardocaires",
  },

  // IDs de rastreamento — preencher no .env.local (ver .env.example)
  tracking: {
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  },
} as const;

export const mensagemWhatsApp =
  "Olá! Vim pelo site da Flecha Performance e quero um diagnóstico da minha operação de tráfego.";

export function linkWhatsApp(mensagem: string = mensagemWhatsApp) {
  return `https://wa.me/${site.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

export const metricas = [
  // TODO: substituir pelos números reais da operação
  { valor: "R$ 2,4M", rotulo: "em mídia gerenciada" },
  { valor: "18.000+", rotulo: "leads qualificados gerados" },
  { valor: "42", rotulo: "operações imobiliárias atendidas" },
  { valor: "6,3x", rotulo: "ROAS médio das contas ativas" },
] as const;

export const dores = [
  {
    titulo: "Lead que não vira visita",
    texto:
      "O volume até aparece no gerenciador, mas o corretor liga e ninguém atende. Você paga por curioso, não por comprador.",
  },
  {
    titulo: "Verba sem direção",
    texto:
      "Impulsionar post aquece o alcance e esfria o caixa. Sem estrutura de campanha, o dinheiro sai e a venda não entra.",
  },
  {
    titulo: "Mês bom, mês ruim",
    texto:
      "Num mês entram 40 oportunidades, no outro entram 8. Sem previsibilidade não dá para contratar time nem projetar meta.",
  },
  {
    titulo: "Nenhuma leitura de número",
    texto:
      "Você sabe quanto gastou. Não sabe o custo por lead, por visita agendada e por contrato assinado — que é o que importa.",
  },
] as const;

export const servicos = [
  {
    titulo: "Gestão de tráfego pago",
    texto:
      "Campanhas em Meta Ads e Google Ads desenhadas para o ciclo de decisão do imóvel: da descoberta ao agendamento de visita.",
  },
  {
    titulo: "Criativos que vendem imóvel",
    texto:
      "Roteiro, direção e edição de anúncios que mostram o produto certo para quem tem intenção real de compra.",
  },
  {
    titulo: "Landing pages e funil",
    texto:
      "Páginas de captação rápidas, rastreadas e feitas para converter — não para ganhar prêmio de design.",
  },
  {
    titulo: "Qualificação de leads",
    texto:
      "Roteamento para WhatsApp e CRM, com filtro de intenção antes do lead chegar na mão do corretor.",
  },
  {
    titulo: "Inteligência de dados",
    texto:
      "Pixel, GTM, eventos de conversão e relatório semanal com as métricas que sustentam decisão de verba.",
  },
  {
    titulo: "Alinhamento comercial",
    texto:
      "Treinamento de abordagem e cadência de follow-up para o time não desperdiçar a oportunidade paga.",
  },
] as const;

export const metodo = [
  {
    n: "01",
    nome: "Mira",
    titulo: "Diagnóstico e definição de alvo",
    texto:
      "Auditoria das contas, do produto e do time comercial. Definimos público, oferta e a meta real de custo por venda antes de gastar o primeiro real.",
  },
  {
    n: "02",
    nome: "Tensão",
    titulo: "Estrutura, criativo e funil",
    texto:
      "Montagem das campanhas, produção dos criativos, landing page e rastreamento completo. Tudo apontado para o mesmo alvo.",
  },
  {
    n: "03",
    nome: "Disparo",
    titulo: "Veiculação e otimização diária",
    texto:
      "Subida das campanhas, testes de ângulo e criativo, ajuste de verba diário. O que não performa é cortado rápido.",
  },
  {
    n: "04",
    nome: "Impacto",
    titulo: "Escala com previsibilidade",
    texto:
      "Com o custo por lead estável e o comercial alinhado, a verba sobe sem perder eficiência. Aí a operação vira máquina.",
  },
] as const;

export const paraQuem = {
  sim: [
    "Incorporadoras que lançam e precisam de VGV vendido no prazo",
    "Imobiliárias com time de corretores e agenda para preencher",
    "Corretores autônomos de alto ticket que querem sair da indicação",
    "Operações que já investem em mídia e não conseguem ler o resultado",
  ],
  nao: [
    "Quem procura o menor custo por lead sem olhar a qualidade",
    "Quem quer resultado em sete dias sem estrutura comercial pronta",
    "Quem não tem processo para atender o lead em até 5 minutos",
  ],
} as const;

export const cases = [
  // TODO: substituir por cases reais (com autorização do cliente para divulgação)
  {
    segmento: "Incorporadora · Lançamento",
    resumo:
      "Lançamento de 96 unidades na Zona Sul de SP com meta de 60% de vendas em 90 dias.",
    numeros: [
      { valor: "R$ 41", rotulo: "custo por lead" },
      { valor: "312", rotulo: "visitas agendadas" },
      { valor: "73%", rotulo: "do VGV em 90 dias" },
    ],
  },
  {
    segmento: "Imobiliária · Alto padrão",
    resumo:
      "Operação com 12 corretores que dependia de indicação e portal para preencher agenda.",
    numeros: [
      { valor: "−58%", rotulo: "custo por visita" },
      { valor: "4,1x", rotulo: "mais oportunidades" },
      { valor: "9", rotulo: "meses de conta ativa" },
    ],
  },
  {
    segmento: "Corretor autônomo",
    resumo:
      "Saída do impulsionamento avulso para uma estrutura de campanha com funil próprio.",
    numeros: [
      { valor: "2,8k", rotulo: "de verba mensal (R$)" },
      { valor: "7", rotulo: "contratos em 4 meses" },
      { valor: "11x", rotulo: "retorno sobre a mídia" },
    ],
  },
] as const;

export const depoimentos = [
  // TODO: substituir por depoimentos reais (nome, empresa, foto e resultado)
  {
    texto:
      "Em três meses a gente passou a saber exatamente quanto custa uma visita agendada. Isso mudou como a diretoria decide verba.",
    nome: "Depoimento a coletar",
    cargo: "Diretor comercial · Incorporadora",
  },
  {
    texto:
      "O time de corretores parou de reclamar do lead. Chega menos gente e fecha mais — que era exatamente o que a gente queria.",
    nome: "Depoimento a coletar",
    cargo: "Sócia · Imobiliária",
  },
  {
    texto:
      "Saí do impulsionamento aleatório para uma estrutura que eu entendo. Hoje eu sei o que acontece se eu dobrar a verba.",
    nome: "Depoimento a coletar",
    cargo: "Corretor autônomo",
  },
] as const;

export const faq = [
  {
    p: "Vocês atendem só o mercado imobiliário?",
    r: "É onde a Flecha é especialista e onde entrega os melhores números. Avaliamos operações de outros segmentos com ticket alto e ciclo de venda consultivo, mas o imobiliário é o foco da casa.",
  },
  {
    p: "Qual a verba mínima de mídia?",
    r: "Trabalhamos a partir de R$ 3.000/mês em mídia. Abaixo disso não há volume de dados suficiente para otimizar campanha com consistência — e sem otimização não existe performance.",
  },
  {
    p: "Em quanto tempo aparece resultado?",
    r: "Os primeiros leads chegam na primeira semana. Estabilidade de custo por lead costuma vir entre 30 e 60 dias, quando a campanha já tem histórico e os criativos vencedores foram identificados.",
  },
  {
    p: "Vocês fazem os criativos ou eu preciso mandar pronto?",
    r: "Fazemos. Roteiro, direção e edição fazem parte do escopo. Se a sua operação já tem material de qualidade, aproveitamos e testamos junto.",
  },
  {
    p: "Existe contrato de fidelidade?",
    r: "O contrato mínimo é de 3 meses. É o tempo honesto para estruturar, testar e chegar em números estáveis. Antes disso, qualquer promessa de resultado seria conversa de vendedor.",
  },
  {
    p: "Quem cuida da minha conta no dia a dia?",
    r: "A operação é gerenciada diretamente pela Flecha, com acompanhamento semanal e um canal aberto no WhatsApp. Você não fala com robô nem com estagiário.",
  },
] as const;
