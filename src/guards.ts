/**
 * Type guard function that checks whether the given object is an array.
 *
 * @param {unknown} obj - The object to check.
 * @return {obj is Array<any>} Returns true if the object is an array of any type, otherwise false.
 */
export function isArray(obj: unknown): obj is Array<any> {
  return Array.isArray(obj)
}

/**
 * Checks if the given object is a string.
 *
 * @param {unknown} obj - the object to check if it is a string.
 * @return {boolean} returns true if the given object is a string, false otherwise.
 */
export function isString(obj: unknown): obj is string {
  return typeof obj === 'string'
}

/**
 * Checks if the given value is an object.
 *
 * @param {unknown} obj - The value to be checked.
 * @return {obj is Record<any, any>} Returns true if the value is an object, false otherwise.
 */
export function isObject(obj: unknown): obj is Record<any, any> {
  return typeof obj === 'object' && obj !== null && !isArray(obj)
}

/**
 * Checks if the given object is a number and not NaN.
 *
 * @param {unknown} obj - The object to be checked.
 * @return {boolean} - Returns true if obj is a number and not NaN, false otherwise.
 */
export function isNumber(obj: unknown): obj is number {
  return typeof obj === 'number' && !isNaN(obj)
}

/**
 * Checks if the passed argument is a boolean or not.
 *
 * @param {unknown} obj - The value to be checked for boolean.
 * @return {boolean} Returns true if the passed argument is a boolean, otherwise false.
 */
export function isBoolean(obj: unknown): obj is boolean {
  return obj === true || obj === false
}

/**
 * Checks if the input object is a function.
 *
 * @param {unknown} obj - The object to be checked.
 * @return {boolean} Returns true if the input object is a function, otherwise false.
 */
export function isFunction(obj: unknown): obj is Function {
  return typeof obj === 'function'
}

/**
 * Checks if an object is empty.
 *
 * @param {unknown} obj - The object to check.
 * @return {obj is Record<never, never>} Returns true if the object is empty.
 */
export function isObjectEmpty(obj: unknown): obj is Record<never, never> {
  if (!isObject(obj)) return false
  return !Object.keys(obj).length
}

/**
 * Type guard that checks if a given value is not null or undefined.
 *
 * @param {T | null | undefined} value - The value to check.
 * @return {value is NonNullable<T>} A boolean indicating whether the value is not nullish.
 */
export function notNullish<T>(
  value: T | null | undefined
): value is NonNullable<T> {
  return value != null
}

/**
 * Defines a type guard function that determines whether a value is not null.
 *
 * @param {T | null} value - The value to check.
 * @returns {value is Exclude<T, null>} Whether the value is not null.
 */
export function notNull<T>(value: T | null): value is Exclude<T, null> {
  return value !== null
}

/**
 * Checks if the given value is not undefined.
 *
 * @param {T} value - The value to check.
 * @return {value is Exclude<T, undefined>} Returns true if the value is not undefined.
 */
export function notUndefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}

/**
 * Checks whether the given value is truthy, meaning it is not null, undefined,
 * false, 0, NaN, or an empty string.
 *
 * @param {T} value - The value to be checked.
 * @returns {value is NonNullable<T>} - Returns true if the value is truthy,
 * false otherwise.
 */
export function isTruthy<T>(value: T): value is NonNullable<T> {
  return Boolean(value)
}
