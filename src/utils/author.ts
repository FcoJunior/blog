const GRAVATAR_AVATAR_URL = 'https://0.gravatar.com/avatar/aa6ac266c82c48fdce6b58d4f6546cf93c3d2772352568b1a806d5b68837b56f';

export const AUTHOR_NAME = 'Francisco Junior';

export function getAuthorAvatarUrl(size: number) {
  return `${GRAVATAR_AVATAR_URL}?s=${size}`;
}
