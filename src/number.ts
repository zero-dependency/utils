/**
 * Converts the given value to a number. If the value cannot be converted, 0 is returned.
 *
 * @param {any} value
 * The value to convert.
 *
 * @return {number}
 * The converted number or 0 if conversion fails.
 */
export function toNumber(value: any): number {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : num
}

/**
 * Returns a string representation of the given number with a leading zero if the number is less than 10.
 *
 * @param {number} num
 * The number to add a leading zero to.
 *
 * @return {string}
 * A string representation of the given number with a leading zero if the number is less than 10.
 */
export function addZero(num: number): string {
  num = Math.abs(num)
  return num > 9 ? `${num}` : `0${num}`
}

/**
 * Generates a random number within a specified range.
 *
 * @param {number} [min = 0]
 * The lower bound of the range (default: 0).
 *
 * @param {number} [max = Number.MAX_SAFE_INTEGER - 1]
 * The upper bound of the range (default: Number.MAX_SAFE_INTEGER - 1).
 *
 * @returns {number}
 * A random number within the specified range.
 */
export function randomNum(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER - 1
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Returns a value that is clamped between a minimum and a maximum value.
 *
 * @param {number} value
 * The value to clamp.
 *
 * @param {number} min
 * The minimum value.
 *
 * @param {number} max
 * The maximum value.
 *
 * @return {number}
 * The clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
