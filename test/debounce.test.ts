import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { debounce } from '../src/debounce.js'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('should be defined', () => {
    expect(debounce).toBeDefined()
  })

  test('should be defined closure', () => {
    const debouncedFn = vi.fn()
    const debounceFn = debounce(debouncedFn, 1000)

    expect(debounceFn).toBeDefined()
  })

  test('execute just once', () => {
    const debouncedFn = vi.fn()
    const debounceFn = debounce(debouncedFn, 1000)

    debounceFn()
    debounceFn()
    debounceFn()
    vi.runAllTimers()

    expect(debouncedFn).toBeCalledTimes(1)
  })

  test('apply arguments', () => {
    const debouncedFn = vi.fn((key: number, value: string) => {
      expect(key).toBe(0)
      expect(value).toBe('foo')
    })

    const debounceFn = debounce(debouncedFn, 1000)
    debounceFn(0, 'foo')
    vi.runAllTimers()

    expect(debouncedFn).toBeCalledTimes(1)
  })
})
