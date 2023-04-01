/**
 * Throttle function execution by a given time in milliseconds (only the first call is executed)
 * @param fn function to be throttled
 * @param ms throttle time in milliseconds
 * @returns throttled function
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
