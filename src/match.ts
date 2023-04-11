import { randomToken } from './string.js'

type Predicate<I extends [any] | [any, any], O> = (...args: I) => O
type Out<T> = T | null | undefined

export function match<I extends [any] | [any, any], O>(
  callback: (
    test: (predicate?: Predicate<I, boolean>) => string
  ) => Record<string, Predicate<I, O> | O>
): Predicate<I, Out<O>> {
  const predicates: Record<string, Predicate<I, O>> = {}

  function test(predicate: Predicate<I, any> = () => true): string {
    const predicateName = randomToken()
    predicates[predicateName] = predicate
    return predicateName
  }

  const tests = callback(test)
  return function (...args): Out<O> {
    if (Object.keys(predicates).length === 0) {
      throw new Error('No predicates were defined')
    }

    for (const predicateName in predicates) {
      const condition = predicates[predicateName]!(...args)
      if (condition) {
        const handler = tests[predicateName]
        return handler instanceof Function ? handler(...args) : handler
      }
    }

    return null
  }
}
