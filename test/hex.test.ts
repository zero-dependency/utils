import { describe, expect } from 'vitest'
import { hexToRgb, isHexColor, rgbToHex } from '../src/hex.js'

describe('hex', (test) => {
  test('should be defined', () => {
    expect(hexToRgb).toBeDefined()
    expect(rgbToHex).toBeDefined()
    expect(isHexColor).toBeDefined()
  })

  test('hex to rgb', () => {
    expect(hexToRgb('#cee')).toEqual({ r: 204, g: 238, b: 238 })
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 })
    expect(hexToRgb('#673AB7')).toEqual({ r: 103, g: 58, b: 183 })
    expect(hexToRgb('#wrong')).toBeNull()
  })

  test('rgb to hex', () => {
    expect(rgbToHex({ r: -100, g: Infinity, b: NaN })).toBe('#640000')
    expect(rgbToHex({ r: -103, g: -58, b: -183 })).toBe('#673ab7')
    expect(rgbToHex({ r: 103, g: 58, b: 183 })).toBe('#673ab7')
    expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000')
    expect(rgbToHex({ r: 204, g: 238, b: 238 })).toBe('#cceeee')
  })

  test('is hex color', () => {
    // valid
    const matches = isHexColor('#ffffff')!
    expect(matches[0]).toBe('#ffffff')
    expect(matches[1]).toBe('ff')
    expect(matches[2]).toBe('ff')
    expect(matches[3]).toBe('ff')
    expect(isHexColor('#fff')).toBeDefined()

    // invalid
    expect(isHexColor('#cpp')).toBeNull()
    expect(isHexColor('#wrong')).toBeNull()
  })
})
