// Reads back the UTM attribution captured by the inline script in Base.astro
// (sessionStorage key "sb_utm"). Used by DemoForm.astro to attach the ad
// campaign that brought the visitor here to both the form payload and the
// WhatsApp fallback message.
export interface Utm {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export function readUtm(): Utm {
  try {
    const raw = sessionStorage.getItem('sb_utm');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
