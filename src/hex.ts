import { entries } from './object.js'

export interface Rgb {
  r: number
  g: number
  b: number
  a?: number
}

function arrayOfColorsToRgb(groups: string[] | null, radix = 16): Rgb | null {
  if (!groups || groups.length < 3) return null

  // prettier-ignore
  const [r, g, b, a] = groups
  return {
    r: parseInt(r!, radix),
    g: parseInt(g!, radix),
    b: parseInt(b!, radix),
    a: a ? parseInt(a, radix) : undefined
  }
}

/**
 * Converts a hexadecimal color code to its RGB equivalent.
 *
 * @param {string} hex
 * The hexadecimal color code to convert.
 *
 * @return {Rgb | null}
 * An object containing the red, green, and blue values of the color,
 * or null if the input is not a valid hexadecimal color code.
 *
 * @example
 * hexToRgb('#ffffff') // { r: 255, g: 255, b: 255, a: undefined }
 */
export function hexToRgb(hex: string): Rgb | null {
  return arrayOfColorsToRgb(parseHex(hex))
}

/**
 * Converts an RGB(A) color strong or object to a hexadecimal color string.
 *
 * @param {Rgb | string} color
 * An object that represents an RGB color.
 *
 * @return {string}
 * A string that represents a hexadecimal color code.
 *
 * @example
 * rgbToHex({ r: 255, g: 255, b: 255 }) // '#ffffff'
 * rgbToHex('rgb(255, 255, 255)') // '#ffffff'
 * rgbToHex('rgba(255, 255, 255, 0.5)') // '#ffffff80'
 */
export function rgbToHex(color: Rgb | string): string {
  if (typeof color === 'string') {
    const rgb = arrayOfColorsToRgb(color.match(/[\.\d]+/g), 0)
    if (!rgb) return ''
    color = rgb
  }

  const hex = entries(color).map(([_, value]) => {
    if (value === undefined) return ''
    const parsedValue = Math.abs(value).toString(16)
    return parsedValue.length > 2
      ? '00'
      : parsedValue.length === 1
      ? `0${parsedValue}`
      : parsedValue
  })

  return `#${hex.join('')}`
}

/**
 * Checks if the given string represents a valid hexadecimal color code.
 *
 * @param {string} hex
 * The hexadecimal color code to be validated.
 *
 * @returns {string[] | null}
 * An array of matched values if the input is a valid hexadecimal color code, or null otherwise.
 *
 * @example
 * parseHex('#ffffff') // ['ff', 'ff', 'ff']
 */
export function parseHex(hex: string): string[] | null {
  return hex.match(/([a-f\d]{2})/gi)
}

/**
 * Returns the brightness of a color (from 0 to 255).
 *
 * @param {Rgb} color
 * An object that represents an RGB color.
 *
 * @returns {number}
 * The brightness of the color.
 *
 * @example
 * const color = hexToRgb('#ffffff')
 * const brightness = colorBrightness(color) // 255
 * const backgroundColor = brightness >= 128 ? '#000' : '#fff'
 */
export function colorBrightness(color: Rgb): number {
  return (color.r * 299 + color.g * 587 + color.b * 114) / 1000
}
