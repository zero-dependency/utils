export function toNumber(value: any): number {
  const num = parseFloat(value)
  return typeof num !== 'number' || Number.isNaN(num) ? 0 : num
}
