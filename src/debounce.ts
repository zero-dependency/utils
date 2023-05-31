/**
 * Returns a new function that will only be executed after being idle for
 * a certain amount of time. Useful for reducing the number of expensive
 * function calls.
 *
 * @param {function} fn - The function to execute.
 * @param {number} ms - The amount of time to wait before executing the function.
 * @returns {function} - A new function that will only be executed after being idle for
 * a certain amount of time.
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => fn(...args), ms)
  }
}
