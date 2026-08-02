# Flecha Performance — Landing Page

Landing page institucional e de captação da **Flecha Performance**, gestora de tráfego pago
para o mercado imobiliário.

A página é da **marca**, não da pessoa: o Leonardo aparece como operação e autoridade,
nunca como protagonista.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (tokens da marca em `src/app/globals.css`)
- Fontes da marca auto-hospedadas via `next/font/local`

## Rodando

```bash
npm install
cp .env.example .env.local   # opcional
npm run dev                  # http://localhost:3000
```

Build de produção:

```bash
npm run build && npm start
```

## Onde mexer

| O que | Arquivo |
| --- | --- |
| **Todos os textos, números, contatos e cases** | `src/lib/site.ts` |
| Cores, tipografia e tokens | `src/app/globals.css` (bloco `@theme`) |
| Ordem das seções | `src/app/page.tsx` |
| Seções individuais | `src/components/*.tsx` |
| Destino dos leads | `src/app/api/lead/route.ts` |

`src/lib/site.ts` é a fonte única de verdade. Trocar um número de case ou uma pergunta do
FAQ não exige tocar em nenhum componente.

## Identidade visual

Extraída do brand kit oficial (pasta `brand/`):

| Cor | Hex | Uso |
| --- | --- | --- |
| Azul petróleo | `#003E52` | Cor primária, fundos escuros, botões em fundo claro |
| Cinza | `#8191A0` | Texto secundário, bordas, detalhes |
| Off white | `#F0EDE4` | Fundos claros, texto sobre petróleo, botões primários |

Tipografia: **Pirulen** (display, caixa alta) e **Sansation** (texto corrido) —
convertidas para `.woff2` em `src/fonts/` (72 KB no total, contra 284 KB dos originais).

O padrão de flechas do brand kit virou a textura `public/brand/pattern-chevron.svg`,
usada como camada sutil nas seções escuras.

## Rastreamento

Preencha no `.env.local` — cada bloco só é injetado se o ID existir:

```
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
```

Eventos disparados automaticamente (`src/lib/track.ts`, envia para Pixel, GA4 e dataLayer):

- `Contact` — todo clique em CTA de WhatsApp, com o parâmetro `origem`
  (`nav`, `hero`, `metodo`, `botao-flutuante`, …)
- `Lead` — envio do formulário, com `perfil` e `verba`

## Formulário de captação

O envio faz duas coisas:

1. `POST /api/lead` — encaminha para `LEAD_WEBHOOK_URL` (CRM, n8n, Make, Zapier).
   Sem a variável, o lead é apenas registrado no log do servidor.
2. Abre o WhatsApp com a mensagem já montada com os dados preenchidos.

Falha no webhook **não bloqueia** o lead: o contato via WhatsApp acontece de qualquer forma.

## Deploy

Feito para a Vercel: importe o repositório, cadastre as variáveis de ambiente e aponte o
domínio.

A URL pública se resolve sozinha (`resolverUrl()` em `src/lib/site.ts`): em produção usa o
domínio da Vercel, em desenvolvimento usa `localhost`. Quando o domínio definitivo estiver
apontado, defina `NEXT_PUBLIC_SITE_URL` na Vercel — canonical, Open Graph e JSON-LD passam a
usá-lo sem precisar mexer no código.

## Pendências antes de subir campanha

Estão marcadas com `TODO` em `src/lib/site.ts`:

- [ ] Métricas do hero (mídia gerenciada, leads, clientes, ROAS)
- [ ] Cases reais, com autorização de divulgação
- [ ] Depoimentos reais (nome, empresa, cargo)
- [ ] E-mail comercial da marca
- [ ] Perfis sociais da marca (hoje apontam para os pessoais)
- [ ] Domínio final (definir `NEXT_PUBLIC_SITE_URL` na Vercel)
- [ ] CNPJ e política de privacidade no rodapé
- [ ] IDs de Pixel / GA4 / GTM

Os números que estão na página hoje são **placeholders plausíveis** para dar forma ao layout.
Não suba tráfego pago com eles.
