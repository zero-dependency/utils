/**
 * Return a number
 * @param value value to convert to number
 */
export function toNumber(value: any): number {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : num
}

/**
 * Returns a number with a leading zero if it is less than 10
 * @param num number to add zero to
 * @returns number with leading zero
 */
export function addZero(num: number): string {
  num = Math.abs(num)
  return num > 9 ? `${num}` : `0${num}`
}

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 * @param min min value
 * @param max max value
 * @returns random number between min and max
 */
export function randomNum(min = 0, max = Number.MAX_SAFE_INTEGER - 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Returns a value that is clamped between a minimum and a maximum value.
 *
 * @param {number} value The value to clamp.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @return {number} The clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
