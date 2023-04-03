export function toNumber(value: any): number {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : num
}

export function addZero(num: number): string {
  num = Math.abs(num)
  return num > 9 ? `${num}` : `0${num}`
}
