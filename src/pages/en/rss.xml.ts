import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getTranslations } from '@i18n/index';
import { getPublishedPostsByLang, getPostCover, getPostUrl } from '@utils/posts';

export async function GET(context: APIContext) {
  const lang = 'en';
  const t = getTranslations(lang);
  const posts = await getPublishedPostsByLang(lang);

  return rss({
    title: t.rss.title,
    description: t.rss.description,
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getPostUrl(post),
      customData: `<enclosure url="${new URL(getPostCover(post), context.site ?? 'https://example.com')}" type="image/png" />`
    }))
  });
}
