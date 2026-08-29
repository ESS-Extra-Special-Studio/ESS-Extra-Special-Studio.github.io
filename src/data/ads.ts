/** Ad network config — IDs come from GitHub Actions secrets / local .env at build time. */

function envFlag(name: string): boolean {
  const v = import.meta.env[name];
  return v === true || v === "true" || v === "1";
}

export const adsConfig = {
  enabled: envFlag("PUBLIC_ADS_ENABLED"),
  clientId: String(import.meta.env.PUBLIC_ADSENSE_CLIENT || "").trim(),
  slotId: String(import.meta.env.PUBLIC_ADSENSE_SLOT || "").trim(),
};

export function adsReady(): boolean {
  return adsConfig.enabled && Boolean(adsConfig.clientId && adsConfig.slotId);
}
