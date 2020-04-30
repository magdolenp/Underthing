export function exists<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function filterArray<T>(
  array: (T | null | undefined)[] | null | undefined,
): T[] {
  return (array || []).filter(exists);
}

export function isObject<T>(item: T): boolean {
  return typeof item === 'object' && !Array.isArray(item);
}

export function isRelativeUrl(url: string): boolean {
  return /^([^\/]+\/[^\/].*|\/[^\/].*|[^\/]+)?\/?$/.test(url);
}

export function appendPathToUrl(url: string, path: string): string {
  return `${url.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

