import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts, getPostCover, getPostUrl } from '@utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Dev Junior',
    description: 'Conteudo de dev pra dev sobre desenvolvimento, arquitetura e tecnologia.',
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
