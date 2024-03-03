/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_ID: string;
  readonly VITE_AUTH_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
