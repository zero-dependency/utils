/**
 * Debounce function execution by a given time in milliseconds (only the last call is executed)
 * @param fn function to be debounced
 * @param ms debounce time in milliseconds
 * @returns debounced function
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
