export type PluralizeToken = (string[] | ((total: number) => string | number))[]

/**
 * Returns a function that takes a `TemplateStringsArray` and an array of tokens and
 * returns a string by concatenating the interpolated values of the strings and tokens.
 *
 * @param {number} total
 * The total number of items.
 *
 * @returns {(strings: TemplateStringsArray, ...tokens: PluralizeToken) => string}
 * The function that takes a `TemplateStringsArray` and an array of tokens and returns the final string.
 *
 * @example
 * pluralize(2)`${(count) => count} packag${['e', 'es']}` // 2 packages
 */
export function pluralize(
  total: number
): (strings: TemplateStringsArray, ...tokens: PluralizeToken) => string {
  return (strings, ...tokens) => {
    return strings.reduce((acc, item, index) => {
      const currentToken = tokens[index - 1]!

      if (typeof currentToken === 'function') {
        return acc + currentToken(total) + item
      }

      return acc + pluralizeToken(total, currentToken) + item
    })
  }
}

// prettier-ignore
const cases = [2, 0, 1, 1, 1, 2]

function pluralizeToken(total: number, tokens: string[]): string {
  total = Math.abs(total)

  const index =
    total % 100 > 4 && total % 100 < 20
      ? 2
      : cases[total % 10 < 5 ? total % 10 : 5]!

  if (index === 2 && tokens.length === 2) {
    return tokens[1]!
  }

  return tokens[index]!
}
