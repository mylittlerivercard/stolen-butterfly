/* Lightweight analytics helper: optional GA4 + pixel */

const GA_ID = process.env.REACT_APP_GA_ID;
const PIXEL_URL = process.env.REACT_APP_PIXEL_URL;

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return;
  if (window.gtag) return;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export function track(event, params = {}) {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_ID) {
      window.gtag('event', event, params);
    }
    if (PIXEL_URL) {
      const q = new URLSearchParams({ e: event, t: Date.now().toString(), ...objToStr(params) });
      const img = new Image();
      img.src = `${PIXEL_URL}${PIXEL_URL.includes('?') ? '&' : '?'}${q.toString()}`;
    }
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('[track]', event, params);
    }
  } catch (_) {
    // ignore
  }
}

function objToStr(obj) {
  const out = {};
  for (const k in obj) out[k] = String(obj[k]);
  return out;
}

