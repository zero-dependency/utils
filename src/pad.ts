export function pad(num: number): string {
  num = Math.abs(num)
  return num > 9 ? `${num}` : `0${num}`
}
