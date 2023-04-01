/**
 * Waits for a given amount of time
 * @param ms time in milliseconds
 * @returns promise that resolves after ms milliseconds
 */
export async function wait(ms = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
