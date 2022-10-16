interface Rgb {
  r: number
  g: number
  b: number
}

export function hexToRgb(hex: string): Rgb | null {
  const result = isHexColor(hex)

  // prettier-ignore
  return result ? {
    r: parseInt(result[1]!, 16),
    g: parseInt(result[2]!, 16),
    b: parseInt(result[3]!, 16)
  } : null
}

export function rgbToHex(color: Rgb): string {
  return `#${Object.values(color)
    .map((v) => padNum(v))
    .join('')}`.toUpperCase()
}

export function isHexColor(hex: string): RegExpExecArray | null {
  return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
}

function padNum(color: number): string {
  const hex = Math.abs(color).toString(16)
  return hex.length > 2 ? '00' : hex.length === 1 ? `0${hex}` : hex
}
