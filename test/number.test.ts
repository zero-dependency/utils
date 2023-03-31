import { describe, expect, test } from 'vitest'
import { addZero, toNumber } from '../src/number.js'

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
