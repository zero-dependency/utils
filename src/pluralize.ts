interface PluralizeOptions {
  one: string
  two: string
  few: string
  prefix?: boolean
}

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
