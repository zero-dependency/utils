import { describe, expect, test } from 'vitest'
import { hexToRgb, isHexColor, rgbToHex } from '../src/index.js'

describe('colors', () => {
  test('should be defined', () => {
    expect(hexToRgb).toBeDefined()
    expect(rgbToHex).toBeDefined()
    expect(isHexColor).toBeDefined()
  })

  test('hex to rgb', () => {
    expect(hexToRgb('#wronghex')).toBeNull()
    expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 })
    expect(hexToRgb('#673AB7')).toEqual({ r: 103, g: 58, b: 183 })
  })

  test('rgb to hex', () => {
    expect(rgbToHex({ r: -100, g: Infinity, b: NaN })).toBe('#640000')
    expect(rgbToHex({ r: -103, g: -58, b: -183 })).toBe('#673AB7')
    expect(rgbToHex({ r: 103, g: 58, b: 183 })).toBe('#673AB7')
    expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000')
  })

  test('is hex color', () => {
    expect(isHexColor('#wrong')).toBeNull()
    const hex = isHexColor('#ffffff')!
    expect(hex).toBeDefined()
    expect(hex[0]).toBe('#ffffff')
    expect(hex[1]).toBe('ff')
    expect(hex[2]).toBe('ff')
  })
})
