export function toNumber(value: any): number {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : num
}

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
