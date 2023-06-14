/**
 * Asynchronously waits for a specified number of milliseconds.
 *
 * @param {number} ms
 * The time to wait in milliseconds. Default is 1000 ms.
 *
 * @return {Promise<void>}
 * A Promise that resolves after the specified time has elapsed.
 *
 * @example
 * await sleep() // wait 1000 ms
 */
export async function sleep(ms: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
