import { describe, expect, test } from 'vitest'
import { sleep } from '../src/sleep.js'

describe('wait', () => {
  test('should be defined', () => {
    expect(sleep).toBeDefined()
  })

  test('wait with default argument (1000ms)', async () => {
    const start = Date.now()
    await sleep()
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })

  test('wait with 0 ms', async () => {
    const start = Date.now()
    await sleep(0)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(0)
  })
})
