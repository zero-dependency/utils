export interface PluralizeOptions {
  one: string
  two: string
  few: string
  prefix?: boolean
}

/**
 * Pluralize words
 * @param one word for 1
 * @param two word for 2
 * @param few word for 5
 * @param prefix add count to the beginning of the word
 * @returns function that accepts count and returns pluralized word
 */
export function pluralize({
  one,
  two,
  few,
  prefix = false
}: PluralizeOptions): (count: number) => void {
  const words = [
    one,
    two,
    few
  ]

  const cases = [
    2,
    0,
    1,
    1,
    1,
    2
  ]

  return (count: number) => {
    count = Math.abs(count)
    const decl =
      words[
        count % 100 > 4 && count % 100 < 20
          ? 2
          : cases[count % 10 < 5 ? count % 10 : 5]!
      ]

    return (prefix ? `${count} ` : '') + decl
  }
}
