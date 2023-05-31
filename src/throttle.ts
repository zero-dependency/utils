/**
 * Returns a new function that, when invoked repeatedly, invokes fn at most once per every ms milliseconds.
 *
 * @param {Function} fn - The function to be throttled.
 * @param {number} ms - The number of milliseconds to throttle invocations to.
 * @return {Function} - A new function that wraps fn with throttling behavior.
 */
export function throttle<T extends (...args: any[]) => ReturnType<T>>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => ReturnType<T> {
  let isThrottle: boolean
  let lastResult: ReturnType<T>

  return (...args) => {
    if (!isThrottle) {
      isThrottle = true
      setTimeout(() => (isThrottle = false), ms)
      lastResult = fn(...args)
    }

    return lastResult
  }
}
