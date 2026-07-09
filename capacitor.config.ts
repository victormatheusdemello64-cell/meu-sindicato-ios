import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.agenciaallier.meusindicato',
  appName: 'Meu Sindicato',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://meusindicato.app/',
    cleartext: false
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    limitsNavigationsToAppBoundDomains: false
  }
};

export default config;

