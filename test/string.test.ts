import { describe, expect, test } from 'vitest'
import { capitalize, generateChars, randomToken } from '../src/string.js'

describe('generateChars', () => {
  test('should be defined', () => {
    expect(generateChars).toBeDefined()
  })

  test('should return an array of characters', () => {
    expect(generateChars('a', 'c')).toEqual([
      'a',
      'b',
      'c'
    ])
    expect(generateChars('A', 'C')).toEqual([
      'A',
      'B',
      'C'
    ])
    expect(generateChars('0', '2')).toEqual([
      '0',
      '1',
      '2'
    ])
    expect(generateChars('a', 'a')).toEqual(['a'])
  })

  test('should return an empty array if `startChar` is greater than `endChar`', () => {
    expect(generateChars('c', 'a')).toEqual([])
    expect(generateChars('C', 'A')).toEqual([])
    expect(generateChars('2', '0')).toEqual([])
  })
})

describe('capitalize', () => {
  test('should be defined', () => {
    expect(capitalize).toBeDefined()
  })

  test('should convert a string to uppercase', () => {
    expect(capitalize('a')).toBe('A')
    expect(capitalize('A')).toBe('A')
    expect(capitalize('0')).toBe('0')
    expect(capitalize('aA0')).toBe('AA0')
  })

  test('should return an empty string if `str` is empty', () => {
    expect(capitalize('')).toBe('')
  })
})

describe('randomToken', () => {
  test('should be defined', () => {
    expect(randomToken).toBeDefined()
  })

  test('should return a random string', () => {
    for (let i = 0; i < 1000; i++) {
      expect(randomToken()).toMatch(/^[a-z0-9]{8,14}$/)
    }
  })
})
