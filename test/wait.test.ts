import { describe, expect, test } from 'vitest'
import { wait } from '../src/wait.js'

describe('wait', () => {
  test('should be defined', () => {
    expect(wait).toBeDefined()
  })

  test('wait with default argument (ms = 1000)', async () => {
    const start = Date.now()
    await wait()
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })

  test('wait with 0 argument', async () => {
    const start = Date.now()
    await wait(0)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(0)
  })
})
