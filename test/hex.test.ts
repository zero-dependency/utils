import { describe, expect } from 'vitest'

import { colorBrightness, hexToRgb, parseHex, rgbToHex } from '../src/hex.js'

describe('hex', (test) => {
  test('should be defined', () => {
    expect(hexToRgb).toBeDefined()
    expect(rgbToHex).toBeDefined()
    expect(parseHex).toBeDefined()
  })

  test('hex to rgb', () => {
    expect(hexToRgb('#cceeee')).toEqual({ r: 204, g: 238, b: 238 })
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 })
    expect(hexToRgb('#673AB7')).toEqual({ r: 103, g: 58, b: 183 })
    expect(hexToRgb('#673AB750')).toEqual({ r: 103, g: 58, b: 183, a: 80 })
  })

  test('rgb to hex', () => {
    expect(rgbToHex('rgb(255, 255, 255)')).toBe('#ffffff')
    expect(rgbToHex('rgba(255, 255, 255, 0)')).toBe('#ffffff00')

    expect(rgbToHex({ r: -100, g: Infinity, b: NaN })).toBe('#640000')
    expect(rgbToHex({ r: -103, g: -58, b: -183 })).toBe('#673ab7')
    expect(rgbToHex({ r: 103, g: 58, b: 183 })).toBe('#673ab7')
    expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000')
    expect(rgbToHex({ r: 204, g: 238, b: 238 })).toBe('#cceeee')

    // alpha
    expect(rgbToHex({ r: 204, g: 238, b: 238, a: undefined })).toBe('#cceeee')
    expect(rgbToHex({ r: 204, g: 238, b: 238, a: 128 })).toBe('#cceeee80')
  })

  test('is hex color', () => {
    // valid
    const matches = parseHex('#ffffff')!
    expect(matches[0]).toBe('ff')
    expect(matches[1]).toBe('ff')
    expect(matches[2]).toBe('ff')
    expect(parseHex('#fff')).toBeDefined()

    // invalid
    expect(parseHex('#cpp')).toBeNull()
    expect(parseHex('#wrong')).toBeNull()
  })

  test('color brightness', () => {
    const whiteColor = hexToRgb('#ffffff')!
    const blackColor = hexToRgb('#000000')!

    const whiteBrightness = colorBrightness(whiteColor)
    const blackBrightness = colorBrightness(blackColor)

    expect(whiteBrightness).toBe(255)
    expect(blackBrightness).toBe(0)
  })
})
