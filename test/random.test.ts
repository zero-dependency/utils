import { describe, expect, test } from 'vitest'
import { random } from '../src/random.js'

describe('pluralize', () => {
  test('should be defined', () => {
    expect(random).toBeDefined()
  })

  test('should return a random number between 0 and `MAX_SAFE_INTEGER`', () => {
    expect(random()).toBeGreaterThanOrEqual(0)
    expect(random()).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER - 1)
  })
})
