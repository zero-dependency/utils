export function generateChars(startChar: string, endChar: string): string[] {
  const chars = []
  const j = endChar.charCodeAt(0)
  for (let i = startChar.charCodeAt(0); i <= j; ++i) {
    chars.push(String.fromCharCode(i))
  }
  return chars
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
