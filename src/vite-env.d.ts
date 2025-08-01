/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOOPS_API_KEY: string
  readonly VITE_WEB3FORMS_KEY: string
  readonly VITE_GA_ID: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Google Analytics types
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params: any) => void;
  }
}
