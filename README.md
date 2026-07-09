# Meu Sindicato iOS Wrapper

Wrapper iOS do app Meu Sindicato, apontando para:

```text
https://meusindicato.app/
```

Dados do app:

```text
Nome: Meu Sindicato
Bundle ID: br.com.agenciaallier.meusindicato
Versao: 1.0
Build inicial: 1
```

## Como funciona

Este projeto usa Capacitor para gerar um app iOS que abre o sistema web oficial dentro de um WebView nativo.

No Windows/Replit nao da para gerar o arquivo final de App Store sozinho, porque a Apple exige build com macOS/Xcode. Por isso a build deve ser feita em uma nuvem macOS, de preferencia Codemagic ou Xcode Cloud.

## Build local de validacao web

```bash
npm install
npm run build
```

## Gerar estrutura iOS em ambiente macOS

```bash
npm install
npm run build
npx capacitor-assets generate --ios
npx cap sync ios
```

Este repositorio ja inclui a pasta iOS gerada. Em um Mac, se precisar abrir manualmente:

```text
ios/App/App.xcworkspace
```

## Caminho recomendado sem Mac

1. Subir esta pasta para um repositorio GitHub.
2. Entrar no Codemagic.
3. Conectar o repositorio.
4. Configurar integracao com App Store Connect.
5. Rodar o workflow `ios-testflight` do arquivo `codemagic.yaml`.
6. Conferir a build no App Store Connect > TestFlight.

## App Store Connect

O app ja foi criado no App Store Connect com:

```text
Bundle ID: br.com.agenciaallier.meusindicato
SKU: meusindicato-ios
```

Se usar Codemagic, a integracao precisa ter permissao para criar/baixar certificados e perfis de assinatura.
