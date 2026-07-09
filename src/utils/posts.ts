import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const DEFAULT_COVER = '/images/posts/default-cover.png';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getPostUrl(post: Post) {
  return `/artigos/${getPostSlug(post)}`;
}

export function getPostCover(post: Post) {
  return post.data.cover || DEFAULT_COVER;
}

export function getPostSlug(post: Post) {
  return post.data.slug ?? post.id.replace(/\.(md|mdx)$/, '');
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
