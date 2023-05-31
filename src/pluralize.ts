/**
 * Returns a function that takes a `TemplateStringsArray` and an array of tokens and
 * returns a string by concatenating the interpolated values of the strings and tokens.
 *
 * @param {number} total - The total number of items.
 * @returns {(strings: TemplateStringsArray, ...tokens: string[][]) => string} The function that takes a `TemplateStringsArray` and an array of tokens and returns the final string.
 * @example pluralize(2)`packag${['e', 'es']} agenc${['y', 'ies']}` // packages agencies
 */
export function pluralize(
  total: number
): (strings: TemplateStringsArray, ...tokens: string[][]) => string {
  return (strings, ...tokens) => {
    return strings.reduce((acc, item, index) => {
      const token = getToken(total, tokens[index - 1]!)
      return acc + token + item
    })
  }
}

// prettier-ignore
const cases = [2, 0, 1, 1, 1, 2]

function getToken(total: number, tokens: string[]): string {
  total = Math.abs(total)

  const index =
    total % 100 > 4 && total % 100 < 20
      ? 2
      : cases[total % 10 < 5 ? total % 10 : 5]!

  return tokens[index]!
}
