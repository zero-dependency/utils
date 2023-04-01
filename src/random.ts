/**
 * Returns a random number between min (inclusive) and max (inclusive)
 * @param min min value
 * @param max max value
 * @returns random number between min and max
 */
export function random(min = 0, max = Number.MAX_SAFE_INTEGER - 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
