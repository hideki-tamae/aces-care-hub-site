(async () => {
  try {
    const res = await fetch('/config.json', { cache: 'no-store' });
    const cfg = await res.json();
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    if (!cfg.site.baseUrl) cfg.site.baseUrl = origin;
    window.APP_CONFIG = cfg;
  } catch (e) {
    console.error('config load failed', e);
  }
})();
