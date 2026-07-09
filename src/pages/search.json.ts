import type { APIRoute } from 'astro';
import { formatDate, getPostCover, getPostUrl } from '@utils/posts';
import { getPublishedPosts } from '@utils/posts';

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();

  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        url: getPostUrl(post),
        cover: getPostCover(post),
        tags: post.data.tags,
        category: post.data.category,
        pubDate: formatDate(post.data.pubDate)
      }))
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  );
};
