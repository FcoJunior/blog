export const languages = ["pt", "en"] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "pt";

export const languageConfig: Record<
  Lang,
  {
    label: string;
    htmlLang: string;
    hreflang: string;
    ogLocale: string;
    prefix: string;
  }
> = {
  pt: {
    label: "PT",
    htmlLang: "pt-BR",
    hreflang: "pt-BR",
    ogLocale: "pt_BR",
    prefix: "",
  },
  en: {
    label: "EN",
    htmlLang: "en",
    hreflang: "en",
    ogLocale: "en_US",
    prefix: "/en",
  },
};

export const ui = {
  pt: {
    nav: {
      home: "Home",
      articles: "Artigos",
      languageSwitcher: "Trocar idioma",
    },
    site: {
      title: "Dev Junior",
      description:
        "Aprendizados reais sobre desenvolvimento, arquitetura, .NET, front-end, DevOps e carreira em tecnologia.",
    },
    hero: {
      titlePrefix: "Reflexões e aprendizados sobre construir software com",
      description:
        "Arquitetura, .NET, DDD, sistemas distribuídos, liderança técnica e engenharia de produto. Escrevo sobre desafios reais, trade-offs e decisões de arquitetura de quem constrói software todos os dias.",
      topics: [
        "DDD",
        "Arquitetura",
        "Sistemas Distribuídos",
        "Event Driven",
        "Cloud",
        "Product Design",
      ],
    },
    home: {
      readArticles: "Ler artigos",
      aboutMe: "Sobre mim",
      categoriesId: "categorias",
      categoriesTitle: "Categorias",
      categoriesDescription:
        "Temas recorrentes sobre arquitetura, produto e engenharia de software.",
      featuredTitle: "Em destaque",
      latestTitle: "Últimos artigos",
      latestDescription:
        "Publicações recentes sobre decisões técnicas, arquitetura e construção de sistemas reais.",
      readPost: "Ler artigo",
      viewAllArticles: "Ver todos os artigos",
      authorId: "sobre",
      authorTitle: "Olá, eu sou Francisco Junior.",
      authorIntro: "Sou Software Engineer e Tech Lead.",
      authorDescription:
        "Trabalho diariamente desenvolvendo plataformas financeiras distribuídas utilizando .NET, DDD e Cloud. Neste blog compartilho aprendizados, decisões de arquitetura, trade-offs e experiências reais encontradas durante o desenvolvimento de software.",
      socialLabel: "Acompanhe também",
    },
    newsletter: {
      title: "Conteúdo de dev pra dev",
      description:
        "Se curtir trocar ideia sobre desenvolvimento, arquitetura e o dia a dia real de quem codifica, entra pra newsletter do Dev Junior. Bora juntos.",
      sidebarDescription:
        "Aqui no Dev Junior, compartilho aprendizados reais sobre desenvolvimento, arquitetura, .NET e mais. Se quiser acompanhar e trocar ideias, entra na lista da newsletter.",
      placeholder: "Seu e-mail aqui",
      button: "Inscreva-se",
    },
    search: {
      trigger: "Buscar...",
      close: "Fechar busca",
      title: "Buscar artigos",
      inputLabel: "Digite sua busca",
      placeholder: "Buscar por titulo, conteudo, tag ou categoria",
      idle: "Digite para buscar nos artigos.",
      loading: "Buscando...",
      empty: "Nenhum resultado encontrado.",
      unavailable:
        "Busca temporariamente indisponível. Tente novamente em instantes.",
      resultsLabel: "Resultados da busca",
    },
    posts: {
      articles: "Artigos",
      empty: "Nenhum artigo publicado por aqui ainda.",
      coverAlt: "Capa do artigo",
      categoryDescription: "Artigos da categoria",
      inThisArticle: "Neste artigo",
      share: "Compartilhar",
      shareLinkedIn: "Compartilhar no LinkedIn",
      linkedin: "LinkedIn",
      copyLink: "Copiar link",
      linkCopied: "Link copiado",
      relatedTitle: "Você também pode gostar",
    },
    rss: {
      title: "Dev Junior",
      description:
        "Conteudo de dev pra dev sobre desenvolvimento, arquitetura e tecnologia.",
    },
  },
  en: {
    nav: {
      home: "Home",
      articles: "Articles",
      languageSwitcher: "Change language",
    },
    site: {
      title: "Dev Junior",
      description:
        "Practical notes on development, architecture, .NET, front-end, DevOps and tech careers.",
    },
    hero: {
      titlePrefix: "Reflections and lessons about building software with",
      description:
        "Architecture, .NET, DDD, distributed systems, technical leadership, and product engineering. I write about real challenges, trade-offs, and architecture decisions from building software every day.",
      topics: [
        "DDD",
        "Architecture",
        "Distributed Systems",
        "Event Driven",
        "Cloud",
        "Product Design",
      ],
    },
    home: {
      readArticles: "Read articles",
      aboutMe: "About me",
      categoriesId: "categories",
      categoriesTitle: "Categories",
      categoriesDescription:
        "Recurring topics about architecture, product, and software engineering.",
      featuredTitle: "Featured",
      latestTitle: "Latest articles",
      latestDescription:
        "Recent posts about technical decisions, architecture, and building real systems.",
      readPost: "Read article",
      viewAllArticles: "View all articles",
      authorId: "about",
      authorTitle: "Hi, I am Francisco Junior.",
      authorIntro: "I am a Software Engineer and Tech Lead.",
      authorDescription:
        "I work daily building distributed financial platforms with .NET, DDD, and Cloud. On this blog I share lessons, architecture decisions, trade-offs, and real experiences from software development.",
      socialLabel: "Follow along",
    },
    newsletter: {
      title: "Developer content for developers",
      description:
        "If you enjoy discussing development, architecture, and the real daily work of building software, join the Dev Junior newsletter.",
      sidebarDescription:
        "Here at Dev Junior, I share practical lessons about development, architecture, .NET and more. Join the newsletter to follow along and exchange ideas.",
      placeholder: "Your email here",
      button: "Subscribe",
    },
    search: {
      trigger: "Search...",
      close: "Close search",
      title: "Search articles",
      inputLabel: "Type your search",
      placeholder: "Search by title, content, tag, or category",
      idle: "Type to search articles.",
      loading: "Searching...",
      empty: "No results found.",
      unavailable: "Search is temporarily unavailable. Try again in a moment.",
      resultsLabel: "Search results",
    },
    posts: {
      articles: "Articles",
      empty: "No articles published here yet.",
      coverAlt: "Article cover",
      categoryDescription: "Articles in the category",
      inThisArticle: "In this article",
      share: "Share",
      shareLinkedIn: "Share on LinkedIn",
      linkedin: "LinkedIn",
      copyLink: "Copy link",
      linkCopied: "Link copied",
      relatedTitle: "You may also like",
    },
    rss: {
      title: "Dev Junior",
      description:
        "Developer content about software development, architecture, and technology.",
    },
  },
} as const;

export function getTranslations(lang: Lang) {
  return ui[lang];
}

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function getLangFromUrl(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : defaultLang;
}

export function homeUrl(lang: Lang) {
  return lang === defaultLang ? "/" : "/en";
}

export function articlesUrl(lang: Lang) {
  return lang === defaultLang ? "/artigos" : "/en/articles";
}

export function postUrl(lang: Lang, slug: string) {
  return lang === defaultLang ? `/artigos/${slug}` : `/en/articles/${slug}`;
}

export function categoriesUrl(lang: Lang, category: string) {
  return lang === defaultLang
    ? `/categorias/${category}`
    : `/en/categories/${category}`;
}

export function rssUrl(lang: Lang) {
  return lang === defaultLang ? "/rss.xml" : "/en/rss.xml";
}

export function getLocalizedUrl(lang: Lang, kind: "home" | "articles") {
  return kind === "articles" ? articlesUrl(lang) : homeUrl(lang);
}
