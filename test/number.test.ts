import { describe, expect, test } from 'vitest'

import { addZero, clamp, randomNum, toNumber } from '../src/number.js'

describe('toNumber', () => {
  test('should be defined', () => {
    expect(toNumber).toBeDefined()
  })

  test('should return 0 when value is not a number', () => {
    expect(toNumber('foo')).toBe(0)
  })

  test('should return 0 when value is NaN', () => {
    expect(toNumber(NaN)).toBe(0)
  })

  test('should return the number when value is a number', () => {
    expect(toNumber(1)).toBe(1)
  })

  test('should return the number when value is a string number', () => {
    expect(toNumber('1')).toBe(1)
  })

  test('should return the number when value is a string number with decimals', () => {
    expect(toNumber('1.1')).toBe(1.1)
  })
})

describe('addZero', () => {
  test('should be defined', () => {
    expect(addZero).toBeDefined()
  })

  test('pad less 9', () => {
    expect(addZero(9)).toBe('09')
    expect(addZero(0)).toBe('00')
  })

  test('pad over 9', () => {
    expect(addZero(10)).toBe('10')
    expect(addZero(-1)).toBe('01')
  })
})

describe('randomNum', () => {
  test('should be defined', () => {
    expect(randomNum).toBeDefined()
  })

  test('should return a random number between 0 and `MAX_SAFE_INTEGER`', () => {
    expect(randomNum()).toBeGreaterThanOrEqual(0)
    expect(randomNum()).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER - 1)
  })
})

describe('clamp', () => {
  test('should be defined', () => {
    expect(clamp).toBeDefined()
  })

  test('should return the number when value is a number', () => {
    expect(clamp(1, 0, 10)).toBe(1)
    expect(clamp(10, 0, 10)).toBe(10)
    expect(clamp(-1, 0, 10)).toBe(0)
  })
})
