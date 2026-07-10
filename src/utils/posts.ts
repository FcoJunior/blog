import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import type { Lang } from '@i18n/index';
import { categoriesUrl, postUrl } from '@i18n/index';

export type Post = CollectionEntry<'posts'>;

export const DEFAULT_COVER = '/images/posts/default-cover.png';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getPublishedPostsByLang(lang: Lang) {
  const posts = await getPublishedPosts();

  return posts.filter((post) => post.data.lang === lang);
}

export async function getPostByTranslationKey(translationKey: string, lang: Lang) {
  const posts = await getPublishedPosts();

  return posts.find((post) => post.data.translationKey === translationKey && post.data.lang === lang);
}

export async function getPostAlternates(post: Post) {
  const posts = await getPublishedPosts();
  const alternates = new Map<Lang, Post>();

  for (const item of posts) {
    if (item.data.translationKey === post.data.translationKey) {
      alternates.set(item.data.lang, item);
    }
  }

  return alternates;
}

export function getPostUrl(post: Post) {
  return postUrl(post.data.lang, getPostSlug(post));
}

export function getCategoryUrl(lang: Lang, category: string) {
  return categoriesUrl(lang, slugify(category));
}

export function getPostCover(post: Post) {
  const cover = post.data.cover;

  if (!cover) return DEFAULT_COVER;
  if (typeof cover === 'string') return cover;

  return (cover as ImageMetadata).src;
}

export function getFeaturedPost(posts: Post[]) {
  return posts.find((post) => post.data.featured) ?? posts[0];
}

export function getPostCountByCategory(posts: Post[], category: string) {
  const categorySlug = slugify(category);

  return posts.filter((post) => slugify(post.data.category) === categorySlug).length;
}

export function formatArticleCount(count: number, lang: Lang = 'pt') {
  if (lang === 'en') {
    return count === 1 ? '1 article' : `${count} articles`;
  }

  return count === 1 ? '1 artigo' : `${count} artigos`;
}

export function getReadingTime(post: Post, lang: Lang = 'pt') {
  const words = (post.body ?? '').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  if (lang === 'en') {
    return `${minutes} min read`;
  }

  return `${minutes} min de leitura`;
}

export function getPostSlug(post: Post) {
  return post.data.slug ?? post.id.replace(/\/(pt|en)\.(md|mdx)$/, '').replace(/\.(md|mdx)$/, '');
}

export function formatDate(date: Date, lang: Lang = 'pt') {
  return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
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
