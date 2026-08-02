/**
 * Disparo de eventos de conversão.
 * Funciona com Meta Pixel, GA4 e dataLayer (GTM) ao mesmo tempo — o que não
 * estiver configurado simplesmente é ignorado, sem quebrar a página.
 */

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(evento: string, params: Params = {}) {
  if (typeof window === "undefined") return;

  // Meta Pixel: eventos padrão vão em `track`, o resto em `trackCustom`.
  const padraoMeta = new Set([
    "Lead",
    "Contact",
    "CompleteRegistration",
    "Schedule",
    "ViewContent",
    "InitiateCheckout",
  ]);

  try {
    window.fbq?.(padraoMeta.has(evento) ? "track" : "trackCustom", evento, params);
  } catch {
    /* pixel ausente ou bloqueado — segue o jogo */
  }

  try {
    window.gtag?.("event", evento, params);
  } catch {
    /* ga4 ausente */
  }

  try {
    window.dataLayer?.push({ event: evento, ...params });
  } catch {
    /* gtm ausente */
  }
}
