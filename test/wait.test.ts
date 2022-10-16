import { describe, expect, test } from 'vitest'
import { wait } from '../src/index.js'

describe('wait', () => {
  test('should be defined', () => {
    expect(wait).toBeDefined()
  })

  test('wait with default argument (ms = 1000)', async () => {
    const now = Date.now() / 1000
    await wait()
    const end = Date.now() / 1000
    expect(Math.floor(end - now)).toBe(1)
  })
})
