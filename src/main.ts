import './styles.css';

const targetUrl = 'https://meusindicato.app.br/';

if (!window.location.href.startsWith(targetUrl) && !navigator.userAgent.includes('Capacitor')) {
  const link = document.querySelector<HTMLAnchorElement>('.fallback a');
  if (link) {
    link.href = targetUrl;
  }
}
