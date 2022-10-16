import { describe, expect, test } from 'vitest'
import { pluralize } from '../src/index.js'

describe('pluralize', () => {
  const options = {
    one: 'задание',
    two: 'задания',
    few: 'заданий'
  }
  const decl = pluralize({ ...options, prefix: true })

  test('should be defined closure', () => {
    expect(decl).toBeDefined()
  })

  test('correct pluralized', () => {
    expect(decl(1)).toBe('1 задание')
    expect(decl(3)).toBe('3 задания')
    expect(decl(5)).toBe('5 заданий')
    expect(decl(999)).toBe('999 заданий')
  })

  test('without count prefixes', () => {
    const decl2 = pluralize(options)

    expect(decl2(1)).toBe('задание')
    expect(decl2(3)).toBe('задания')
    expect(decl2(5)).toBe('заданий')
    expect(decl2(999)).toBe('заданий')
  })

  test('negative count', () => {
    expect(decl(-999)).toBe('999 заданий')
  })
})
