import { describe, expect, test } from 'vitest'
import { pad } from '../src/index.js'

describe('pad', () => {
  test('should be defined', () => {
    expect(pad).toBeDefined()
  })

  test('pad less 9', () => {
    expect(pad(9)).toBe('09')
    expect(pad(0)).toBe('00')
  })

  test('pad over 9', () => {
    expect(pad(10)).toBe('10')
    expect(pad(-1)).toBe('01')
  })
})
