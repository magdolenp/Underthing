import { DiceEnum } from './enums/dice.enum';
import { SpellModel, ApiSpellTable } from './models/spell.model';

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

export const rollDice = (diceType: DiceEnum): number =>
  Math.floor(Math.random() * diceType + 1);

export const displayTime = (date: Date): string =>
  `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

export type Modify<T, R> = Omit<T, keyof R> & R;

export function normalizeSpells(
  spells: Partial<ApiSpellTable[]>,
): Partial<SpellModel[]> {
  if (spells == null) {
    return [];
  }
  return (spells || []).map(value => ({
    ...value,
    ...(value && value.dnd_class != null
      ? { dnd_class: value.dnd_class.replace(/\s+/g, '').split(',') }
      : {}),
    ...(value && value.components != null
      ? { components: value.components.replace(/\s+/g, '').split(',') }
      : {}),
  })) as Partial<SpellModel[]>;
}
