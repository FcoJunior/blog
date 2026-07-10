import { getCategoryMetadata } from '@config/categories';
import { getPostUrl, getPublishedPosts } from '@utils/posts';

export async function GET() {
  const posts = await getPublishedPosts();
  const items = posts.map((post) => {
    const category = getCategoryMetadata(post.data.lang, post.data.category);

    return {
      url: getPostUrl(post),
      lang: post.data.lang,
      meta: {
        title: post.data.title,
        description: post.data.description,
        category: category.title,
        tags: post.data.tags.join(', ')
      },
      plain_excerpt: post.data.description,
      content: [
        post.data.title,
        post.data.description,
        category.title,
        post.data.category,
        post.data.tags.join(' '),
        post.body
      ].join(' ')
    };
  });

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
