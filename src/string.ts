/**
 * Generate an array of characters between `startChar` and `endChar`
 * @param startChar
 * @param endChar
 */
export function generateChars(startChar: string, endChar: string): string[] {
  const chars = []
  const j = endChar.charCodeAt(0)
  for (let i = startChar.charCodeAt(0); i <= j; ++i) {
    chars.push(String.fromCharCode(i))
  }
  return chars
}

/**
 * Capitalize a string
 * @param str string to capitalize
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Generate a random string
 */
export function randomToken(): string {
  return Math.random().toString(36).slice(2)
}
