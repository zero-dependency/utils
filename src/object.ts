type Values<T> = T[keyof T]
type Entries<T> = [keyof T, Values<T>][]

export function entries<T extends object>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>
}

type Plain<T> = T extends (...a: any[]) => any
  ? T
  : T extends new (...a: any[]) => any
  ? T
  : T extends object
  ? {
      [Key in keyof T]: T[Key]
    }
  : T

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
