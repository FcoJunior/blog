import type { Lang } from '@i18n/index';
import { defaultLang, homeUrl, languageConfig, languages } from '@i18n/index';

export interface SeoAlternate {
  hrefLang: string;
  href: string;
}

export function getSeoAlternates(urls: Partial<Record<Lang, string>>): SeoAlternate[] {
  const alternates = languages
    .filter((lang) => urls[lang])
    .map((lang) => ({
      hrefLang: languageConfig[lang].hreflang,
      href: urls[lang] as string
    }));

  alternates.push({
    hrefLang: 'x-default',
    href: urls[defaultLang] ?? homeUrl(defaultLang)
  });

  return alternates;
}
