/**
 * Asynchronously waits for a specified number of milliseconds.
 *
 * @param {number} ms - The time to wait in milliseconds. Default is 1000.
 * @return {Promise<void>} A Promise that resolves after the specified time has elapsed.
 */
export async function wait(ms: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
