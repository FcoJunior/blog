import type { Lang } from '@i18n/index';
import { categoriesUrl } from '@i18n/index';
import { slugify } from '@utils/posts';

export type CategoryId =
  | 'software-architecture'
  | 'software-engineering'
  | 'cloud-platform'
  | 'technical-leadership';

export type CategoryColor = 'blue' | 'indigo' | 'emerald' | 'sky' | 'violet' | 'cyan' | 'amber' | 'rose' | 'slate';

export interface CategoryConfig {
  id: CategoryId;
  slug: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  color: CategoryColor;
}

export interface CategoryMetadata {
  id: CategoryId | 'fallback';
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: CategoryColor;
  href: string;
}

export const categories: Record<CategoryId, CategoryConfig> = {
  'software-architecture': {
    id: 'software-architecture',
    slug: { pt: 'arquitetura-de-software', en: 'software-architecture' },
    title: { pt: 'Arquitetura de Software', en: 'Software Architecture' },
    description: {
      pt: 'Artigos sobre decisões de arquitetura, organização de código, DDD, integração entre sistemas e trade-offs encontrados durante o desenvolvimento de software.',
      en: 'Articles about architecture decisions, code organization, DDD, system integration, and trade-offs found while building software.'
    },
    icon: 'CircleStackIcon',
    color: 'blue'
  },
  'software-engineering': {
    id: 'software-engineering',
    slug: { pt: 'engenharia-de-software', en: 'software-engineering' },
    title: { pt: 'Engenharia de Software', en: 'Software Engineering' },
    description: {
      pt: 'Práticas de desenvolvimento, qualidade, documentação, produtividade e escolhas técnicas para construir software sustentável.',
      en: 'Development practices, quality, documentation, productivity, and technical choices for building sustainable software.'
    },
    icon: 'CodeBracketIcon',
    color: 'emerald'
  },
  'cloud-platform': {
    id: 'cloud-platform',
    slug: { pt: 'cloud-plataforma', en: 'cloud-platform' },
    title: { pt: 'Cloud & Plataforma', en: 'Cloud & Platform' },
    description: {
      pt: 'Cloud, plataformas internas, deploy, operação, automação e decisões práticas para manter sistemas em produção.',
      en: 'Cloud, internal platforms, deployment, operations, automation, and practical decisions for running systems in production.'
    },
    icon: 'CloudIcon',
    color: 'sky'
  },
  'technical-leadership': {
    id: 'technical-leadership',
    slug: { pt: 'lideranca-tecnica', en: 'technical-leadership' },
    title: { pt: 'Liderança Técnica', en: 'Technical Leadership' },
    description: {
      pt: 'Liderança técnica, comunicação, mentoria e decisões de engenharia em times de produto.',
      en: 'Technical leadership, communication, mentorship, and engineering decisions in product teams.'
    },
    icon: 'AcademicCapIcon',
    color: 'amber'
  }
};

export function listCategories(lang: Lang): CategoryMetadata[] {
  return Object.values(categories).map((category) => toCategoryMetadata(category, lang));
}

export function getCategoryBySlug(lang: Lang, slug: string) {
  return Object.values(categories).find((category) => category.slug[lang] === slugify(slug));
}

export function getCategoryByName(lang: Lang, name: string) {
  const normalizedName = slugify(name);

  return Object.values(categories).find((category) => (
    slugify(category.title[lang]) === normalizedName ||
    category.slug[lang] === normalizedName ||
    category.slug.pt === normalizedName ||
    category.slug.en === normalizedName
  ));
}

export function getCategoryMetadata(lang: Lang, categoryNameOrSlug: string): CategoryMetadata {
  const category = getCategoryByName(lang, categoryNameOrSlug) ?? getCategoryBySlug(lang, categoryNameOrSlug);

  if (category) return toCategoryMetadata(category, lang);

  const title = categoryNameOrSlug.trim() || 'Geral';
  const slug = slugify(title);

  return {
    id: 'fallback',
    slug,
    title,
    description: lang === 'en'
      ? `Articles about ${title}.`
      : `Artigos sobre ${title}.`,
    icon: 'BookOpenIcon',
    color: 'slate',
    href: categoriesUrl(lang, slug)
  };
}

function toCategoryMetadata(category: CategoryConfig, lang: Lang): CategoryMetadata {
  return {
    id: category.id,
    slug: category.slug[lang],
    title: category.title[lang],
    description: category.description[lang],
    icon: category.icon,
    color: category.color,
    href: categoriesUrl(lang, category.slug[lang])
  };
}
