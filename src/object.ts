export type Keys<T> = Extract<keyof T, string>
export type Values<T> = T[keyof T]
export type Entries<T> = [Keys<T>, Values<T>][]
export type Plain<T> = T extends (...a: any[]) => any
  ? T
  : T extends new (...a: any[]) => any
  ? T
  : T extends object
  ? {
      [Key in keyof T]: T[Key]
    }
  : T

/**
 * Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 *
 * @param {T extends object} obj
 * The object to get the entries of.
 *
 * @return {Entries<T>}
 * Returns the new array of key-value pairs.
 *
 * @example
 * entries({ a: 1, b: '2' }) // [['a', 1], ['b', '2']]
 */
export function entries<T extends object>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>
}

/**
 * Returns a new object with properties from the original object that are
 * specified in the keys array.
 *
 * @template T
 * The type of the original object.
 *
 * @template K
 * The type of the keys of the original object to be picked.
 *
 * @param {T} target
 * The original object to pick properties from.
 *
 * @param {K[]} keys
 * An array of keys to pick from the original object.
 *
 * @return {Plain<Pick<T, K>>}
 * A new object with properties picked from the original object.
 *
 * @example
 * pick({ a: 1, b: '2' }, ['a']) // { a: 1 }
 */
export function pick<T, K extends keyof T>(
  target: T,
  keys: Array<K>
): Plain<Pick<T, K>> {
  const result: any = {}

  for (const key of keys) {
    result[key] = target[key]
  }

  return result
}

/**
 * Returns a new object with all properties of target except the ones in keys.
 *
 * @template T
 * The type of the target object.
 *
 * @template K
 * The type of the keys to omit.
 *
 * @param {T} target
 * The target object to omit the keys from.
 *
 * @param {K[]} keys
 * The keys to omit from target.
 *
 * @returns {Plain<Omit<T, K>>}
 * A new object with all properties of target except the ones in keys.
 *
 * @example
 * omit({ a: 1, b: '2' }, ['a']) // { b: '2' }
 */
export function omit<T, K extends keyof T>(
  target: T,
  keys: Array<K>
): Plain<Omit<T, K>> {
  const result: any = {}

  for (const key in target) {
    if (!keys.includes(key as any)) {
      result[key] = target[key]
    }
  }

  return result
}
