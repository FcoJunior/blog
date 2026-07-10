import type { Lang } from '@i18n/index';
import { categoriesUrl } from '@i18n/index';
import { slugify } from '@utils/posts';

export type CategoryId =
  | 'dotnet'
  | 'ddd'
  | 'cloud'
  | 'architecture'
  | 'event-driven'
  | 'distributed-systems'
  | 'leadership'
  | 'front-end';

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
  dotnet: {
    id: 'dotnet',
    slug: { pt: 'net', en: 'net' },
    title: { pt: '.NET', en: '.NET' },
    description: {
      pt: 'Conteúdos sobre C#, ASP.NET Core, arquitetura e desenvolvimento de aplicações modernas.',
      en: 'Articles about C#, ASP.NET Core, architecture, and modern application development.'
    },
    icon: 'CodeBracketIcon',
    color: 'indigo'
  },
  ddd: {
    id: 'ddd',
    slug: { pt: 'ddd', en: 'ddd' },
    title: { pt: 'DDD', en: 'DDD' },
    description: {
      pt: 'Modelagem de domínio, Value Objects, Aggregates e padrões estratégicos.',
      en: 'Domain modeling, Value Objects, Aggregates, and strategic design patterns.'
    },
    icon: 'CubeIcon',
    color: 'emerald'
  },
  cloud: {
    id: 'cloud',
    slug: { pt: 'cloud', en: 'cloud' },
    title: { pt: 'Cloud', en: 'Cloud' },
    description: {
      pt: 'Arquiteturas, deploys, operação e decisões práticas para sistemas em nuvem.',
      en: 'Architecture, deployments, operations, and practical decisions for cloud systems.'
    },
    icon: 'CloudIcon',
    color: 'sky'
  },
  architecture: {
    id: 'architecture',
    slug: { pt: 'arquitetura', en: 'architecture' },
    title: { pt: 'Arquitetura', en: 'Architecture' },
    description: {
      pt: 'Artigos sobre decisões de arquitetura, organização de código, DDD, integração entre sistemas e trade-offs encontrados durante o desenvolvimento de software.',
      en: 'Articles about architecture decisions, code organization, DDD, system integration, and trade-offs found while building software.'
    },
    icon: 'CircleStackIcon',
    color: 'blue'
  },
  'event-driven': {
    id: 'event-driven',
    slug: { pt: 'event-driven', en: 'event-driven' },
    title: { pt: 'Event Driven', en: 'Event Driven' },
    description: {
      pt: 'Eventos, mensageria, consistência eventual e comunicação assíncrona entre serviços.',
      en: 'Events, messaging, eventual consistency, and asynchronous communication between services.'
    },
    icon: 'CpuChipIcon',
    color: 'violet'
  },
  'distributed-systems': {
    id: 'distributed-systems',
    slug: { pt: 'sistemas-distribuidos', en: 'distributed-systems' },
    title: { pt: 'Sistemas Distribuídos', en: 'Distributed Systems' },
    description: {
      pt: 'Escalabilidade, resiliência, integração e desenho de sistemas que operam em múltiplos componentes.',
      en: 'Scalability, resilience, integration, and the design of systems that operate across multiple components.'
    },
    icon: 'RocketLaunchIcon',
    color: 'cyan'
  },
  leadership: {
    id: 'leadership',
    slug: { pt: 'leadership', en: 'leadership' },
    title: { pt: 'Leadership', en: 'Leadership' },
    description: {
      pt: 'Liderança técnica, comunicação, mentoria e decisões de engenharia em times de produto.',
      en: 'Technical leadership, communication, mentorship, and engineering decisions in product teams.'
    },
    icon: 'AcademicCapIcon',
    color: 'amber'
  },
  'front-end': {
    id: 'front-end',
    slug: { pt: 'front-end', en: 'front-end' },
    title: { pt: 'Front-end', en: 'Front-end' },
    description: {
      pt: 'Interfaces, experiência do usuário, Astro, componentes e escolhas práticas para produtos web.',
      en: 'Interfaces, user experience, Astro, components, and practical choices for web products.'
    },
    icon: 'BookOpenIcon',
    color: 'rose'
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
