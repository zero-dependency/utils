import { describe, expect } from 'vitest'
import { match } from '../src/match.js'

describe('match', (test) => {
  test('should be defined', () => {
    expect(match).toBeDefined()
  })

  test('should match', () => {
    const matcher = match<[string, string], string>((test) => ({
      [test((firstName) => !firstName)]: 'User not found',
      [test((firstName) => firstName.length < 8)]: (firstName, lastName) =>
        `${firstName} ${lastName}`,
      [test((firstName) => firstName.length >= 8)]: (firstName) => firstName
    }))

    expect(matcher('', '')).toBe('User not found')
    expect(matcher('John', 'Doe')).toBe('John Doe')
    expect(matcher('John Doe', 'Doe')).toBe('John Doe')
  })

  test('should be unexpected case', () => {
    const matcher = match((test) => ({
      [test()]: () => {
        throw new Error('Unexpected case')
      }
    }))

    expect(() => matcher('')).toThrowError('Unexpected case')
  })

  test('should be no predicates were defined', () => {
    const matcher = match(() => ({}))
    expect(() => matcher('')).toThrowError('No predicates were defined')
  })

  test('should be return null', () => {
    const matcher = match<[string], string>((test) => ({
      [test((value) => value === 'bar')]: (value) => value
    }))

    expect(matcher('foo')).toBeNull()
  })
})
