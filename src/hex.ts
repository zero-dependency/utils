import { entries } from './object.js'
import { repeatEveryChars } from './string.js'

export interface Rgb {
  r: number
  g: number
  b: number
}

/**
 * Converts a hexadecimal color code to its RGB equivalent.
 *
 * @param {string} hex
 * The hexadecimal color code to convert.
 *
 * @return {Rgb | null}
 * An object containing the red, green, and blue values of the color, or null if the input is not a valid hexadecimal color code.
 *
 * @example
 * hexToRgb('#fff') // { r: 255, g: 255, b: 255 }
 */
export function hexToRgb(hex: string): Rgb | null {
  const result = isHexColor(hex)

  // prettier-ignore
  return result ? {
    r: parseInt(result[1]!, 16),
    g: parseInt(result[2]!, 16),
    b: parseInt(result[3]!, 16)
  } : null
}

/**
 * Converts an RGB color object to a hexadecimal color string.
 *
 * @param {Rgb} color
 * An object that represents an RGB color.
 *
 * @return {string}
 * A string that represents a hexadecimal color code.
 *
 * @example
 * rgbToHex({ r: 255, g: 255, b: 255 }) // '#ffffff'
 */
export function rgbToHex(color: Rgb): string {
  const hex = entries(color).map(([_, value]) => {
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
 * @returns {RegExpExecArray | null}
 * An array of matched values if the input is a valid hexadecimal color code, or null otherwise.
 *
 * @example
 * isHexColor('#fff') // ['#ffffff', 'ff', 'ff', 'ff']
 */
export function isHexColor(hex: string): RegExpExecArray | null {
  if (hex.length === 4) hex = repeatEveryChars(hex.slice(1), 2)
  return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
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
 * const color = hexToRgb('#fff')
 * const brightness = colorBrightness(color) // 255
 * const backgroundColor = brightness > 128 ? '#000' : '#fff'
 */
export function colorBrightness(color: Rgb): number {
  return (color.r * 299 + color.g * 587 + color.b * 114) / 1000
}
