import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.agenciaallier.meusindicato',
  appName: 'Meu Sindicato',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://meusindicato.app/?build=20260715-ios',
    cleartext: false
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    limitsNavigationsToAppBoundDomains: false
  }
};

export default config;
