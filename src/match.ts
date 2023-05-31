import { randomToken } from './string.js'

type Input = [any] | [any, any]
type Out<T> = T | null | undefined
type Predicate<I extends Input, Out> = (...args: I) => Out

/**
 * Returns a predicate function that matches against a set of input predicates.
 *
 * @param {function} callback - a function that accepts a `test` function and returns an object whose keys
 * are the names of the predicates, and whose values are the corresponding predicate functions.
 * @return {function} - a predicate function that returns the output of the matching predicate function
 * or `null` if no predicates match.
 */
export function match<InputValue extends Input, OutValue>(
  callback: (
    test: (predicate?: Predicate<InputValue, boolean>) => string
  ) => Record<string, Predicate<InputValue, OutValue> | OutValue>
): Predicate<InputValue, Out<OutValue>> {
  const predicates: Record<string, Predicate<InputValue, OutValue>> = {}

  function test(predicate: Predicate<InputValue, any> = () => true): string {
    const predicateName = randomToken()
    predicates[predicateName] = predicate
    return predicateName
  }

  const tests = callback(test)
  return function (...args): Out<OutValue> {
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
