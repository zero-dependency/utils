export function random(min = 0, max = Number.MAX_SAFE_INTEGER - 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
