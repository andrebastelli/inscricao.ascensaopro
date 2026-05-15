/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_WEBHOOK_URL?: string;
  readonly VITE_REDIRECT_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
