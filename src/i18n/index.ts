export const languages = ['pt', 'en'] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'pt';

export const languageConfig: Record<Lang, {
  label: string;
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  prefix: string;
}> = {
  pt: {
    label: 'PT',
    htmlLang: 'pt-BR',
    hreflang: 'pt-BR',
    ogLocale: 'pt_BR',
    prefix: ''
  },
  en: {
    label: 'EN',
    htmlLang: 'en',
    hreflang: 'en',
    ogLocale: 'en_US',
    prefix: '/en'
  }
};

export const ui = {
  pt: {
    nav: {
      home: 'Home',
      articles: 'Artigos',
      languageSwitcher: 'Trocar idioma'
    },
    site: {
      title: 'Dev Junior',
      description: 'Aprendizados reais sobre desenvolvimento, arquitetura, .NET, front-end, DevOps e carreira em tecnologia.'
    },
    hero: {
      titlePrefix: 'Reflexões e aprendizados sobre construir software com',
      description:
        'Arquitetura, .NET, sistemas distribuídos, DDD, liderança técnica e a construção de produtos e plataformas que precisam funcionar todos os dias.\n\nSe você também gosta de discutir arquitetura, trade-offs e engenharia de software, assine a newsletter e acompanhe as próximas publicações.',
      topics: ['DDD', 'Arquitetura', 'Sistemas Distribuídos', 'Event Driven', 'Cloud', 'Product Design']
    },
    newsletter: {
      title: 'Conteúdo de dev pra dev',
      description:
        'Se curtir trocar ideia sobre desenvolvimento, arquitetura e o dia a dia real de quem codifica, entra pra newsletter do Dev Junior. Bora juntos.',
      sidebarDescription:
        'Aqui no Dev Junior, compartilho aprendizados reais sobre desenvolvimento, arquitetura, .NET e mais. Se quiser acompanhar e trocar ideias, entra na lista da newsletter.',
      placeholder: 'Seu e-mail aqui',
      button: 'Inscreva-se'
    },
    search: {
      trigger: 'Buscar...',
      close: 'Fechar busca',
      title: 'Buscar artigos',
      inputLabel: 'Digite sua busca',
      placeholder: 'Buscar por titulo, conteudo, tag ou categoria',
      idle: 'Digite para buscar nos artigos.',
      loading: 'Buscando...',
      empty: 'Nenhum resultado encontrado.',
      unavailable: 'Busca indisponivel neste modo. Gere o indice Pagefind com npm run build.',
      resultsLabel: 'Resultados da busca'
    },
    posts: {
      articles: 'Artigos',
      empty: 'Nenhum artigo publicado por aqui ainda.',
      coverAlt: 'Capa do artigo',
      categoryDescription: 'Artigos da categoria',
      tagDescription: 'Artigos marcados com',
      share: 'Compartilhe esse post',
      shareLinkedIn: 'Compartilhar no LinkedIn'
    },
    rss: {
      title: 'Dev Junior',
      description: 'Conteudo de dev pra dev sobre desenvolvimento, arquitetura e tecnologia.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      articles: 'Articles',
      languageSwitcher: 'Change language'
    },
    site: {
      title: 'Dev Junior',
      description: 'Practical notes on development, architecture, .NET, front-end, DevOps and tech careers.'
    },
    hero: {
      titlePrefix: 'Reflections and lessons about building software with',
      description:
        'Architecture, .NET, distributed systems, DDD, technical leadership, and building products and platforms that need to work every day.\n\nIf you also like discussing architecture, trade-offs, and software engineering, subscribe to the newsletter and follow the next posts.',
      topics: ['DDD', 'Architecture', 'Distributed Systems', 'Event Driven', 'Cloud', 'Product Design']
    },
    newsletter: {
      title: 'Developer content for developers',
      description:
        'If you enjoy discussing development, architecture, and the real daily work of building software, join the Dev Junior newsletter.',
      sidebarDescription:
        'Here at Dev Junior, I share practical lessons about development, architecture, .NET and more. Join the newsletter to follow along and exchange ideas.',
      placeholder: 'Your email here',
      button: 'Subscribe'
    },
    search: {
      trigger: 'Search...',
      close: 'Close search',
      title: 'Search articles',
      inputLabel: 'Type your search',
      placeholder: 'Search by title, content, tag, or category',
      idle: 'Type to search articles.',
      loading: 'Searching...',
      empty: 'No results found.',
      unavailable: 'Search is unavailable in this mode. Generate the Pagefind index with npm run build.',
      resultsLabel: 'Search results'
    },
    posts: {
      articles: 'Articles',
      empty: 'No articles published here yet.',
      coverAlt: 'Article cover',
      categoryDescription: 'Articles in the category',
      tagDescription: 'Articles tagged with',
      share: 'Share this post',
      shareLinkedIn: 'Share on LinkedIn'
    },
    rss: {
      title: 'Dev Junior',
      description: 'Developer content about software development, architecture, and technology.'
    }
  }
} as const;

export function getTranslations(lang: Lang) {
  return ui[lang];
}

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function getLangFromUrl(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLang;
}

export function homeUrl(lang: Lang) {
  return lang === defaultLang ? '/' : '/en';
}

export function articlesUrl(lang: Lang) {
  return lang === defaultLang ? '/artigos' : '/en/articles';
}

export function postUrl(lang: Lang, slug: string) {
  return lang === defaultLang ? `/artigos/${slug}` : `/en/articles/${slug}`;
}

export function tagsUrl(lang: Lang, tag: string) {
  return lang === defaultLang ? `/tags/${tag}` : `/en/tags/${tag}`;
}

export function categoriesUrl(lang: Lang, category: string) {
  return lang === defaultLang ? `/categorias/${category}` : `/en/categories/${category}`;
}

export function rssUrl(lang: Lang) {
  return lang === defaultLang ? '/rss.xml' : '/en/rss.xml';
}

export function getLocalizedUrl(lang: Lang, kind: 'home' | 'articles') {
  return kind === 'articles' ? articlesUrl(lang) : homeUrl(lang);
}
