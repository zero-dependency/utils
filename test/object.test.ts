import { describe, expect, expectTypeOf, test } from 'vitest'
import { entries, omit, pick } from '../src/object.js'

describe('object', () => {
  test('should be defined', () => {
    expect(entries).toBeDefined()
    expect(omit).toBeDefined()
    expect(pick).toBeDefined()
  })

  const mockData = {
    a: 1,
    b: 'foo'
  }

  test('entries', () => {
    expect(entries(mockData)).toEqual([
      ['a', 1],
      ['b', 'foo']
    ])
  })

  test('omit', () => {
    const result = omit(mockData, ['a'])
    expectTypeOf(result).toEqualTypeOf<{ b: string }>()
    expect(omit(mockData, ['a'])).toEqual({ b: 'foo' })
  })

  test('pick', () => {
    const result = pick(mockData, ['a'])
    expectTypeOf(result).toEqualTypeOf<{ a: number }>()
    expect(result).toEqual({ a: 1 })
  })
})
