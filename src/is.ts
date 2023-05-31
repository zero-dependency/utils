export function isArray(obj: unknown): obj is Array<any> {
  return Array.isArray(obj)
}

export function isString(obj: unknown): obj is string {
  return typeof obj === 'string'
}

export function isObject(obj: unknown): obj is Record<any, any> {
  return typeof obj === 'object' && obj !== null && !isArray(obj)
}

export function isNumber(obj: unknown): obj is number {
  return typeof obj === 'number' && !isNaN(obj)
}

export function isBoolean(obj: unknown): obj is boolean {
  return obj === true || obj === false
}

export function isFunction(obj: unknown): obj is Function {
  return typeof obj === 'function'
}

export function isObjectEmpty(obj: object) {
  return obj && isObject(obj) && Object.keys(obj).length === 0
}

export function notNullish<T>(
  value: T | null | undefined
): value is NonNullable<T> {
  return value != null
}

export function notNull<T>(value: T | null): value is Exclude<T, null> {
  return value !== null
}

export function notUndefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}

export function isTruthy<T>(value: T): value is NonNullable<T> {
  return Boolean(value)
}
