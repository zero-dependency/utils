import { describe, expect, test } from 'vitest'
import { zeroPad } from '../src/index.js'

describe('zeroPad', () => {
  test('should be defined', () => {
    expect(zeroPad).toBeDefined()
  })

  test('pad less 9', () => {
    expect(zeroPad(9)).toBe('09')
    expect(zeroPad(0)).toBe('00')
  })

  test('pad over 9', () => {
    expect(zeroPad(10)).toBe('10')
    expect(zeroPad(-1)).toBe('01')
  })
})
