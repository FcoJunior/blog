/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_NEWSLETTER_ACTION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
