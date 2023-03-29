import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { throttle } from '../src/index.js'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('should be defined', () => {
    expect(throttle).toBeDefined()
  })

  test('should be defined closure', () => {
    const handle = vi.fn()
    const throttledFn = throttle(handle, 100)

    expect(throttledFn).toBeDefined()
  })

  test('apply arguments', () => {
    const handle = vi.fn((key: number, value: string) => {
      expect(key).toBe(0)
      expect(value).toBe('foo')
    })

    const throttledFn = throttle(handle, 100)
    throttledFn(0, 'foo')
    vi.runAllTimers()

    expect(handle).toBeCalledTimes(1)
  })
})
