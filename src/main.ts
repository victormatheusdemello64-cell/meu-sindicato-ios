import './styles.css';

const targetUrl = 'https://meusindicato.app/?build=20260715-ios';

if (!window.location.href.startsWith(targetUrl) && !navigator.userAgent.includes('Capacitor')) {
  const link = document.querySelector<HTMLAnchorElement>('.fallback a');
  if (link) {
    link.href = targetUrl;
  }
}
