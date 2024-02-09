import { describe, expect } from 'vitest'

import {
  isArray,
  isBoolean,
  isFunction,
  isNumber,
  isObject,
  isObjectEmpty,
  isString,
  isTruthy,
  notNull,
  notNullish,
  notUndefined
} from '../src/guards.js'

describe('is', (test) => {
  test('should be defined', () => {
    expect(isArray).toBeDefined()
    expect(isBoolean).toBeDefined()
    expect(isFunction).toBeDefined()
    expect(isNumber).toBeDefined()
    expect(isObject).toBeDefined()
    expect(isObjectEmpty).toBeDefined()
    expect(isString).toBeDefined()
    expect(notNull).toBeDefined()
    expect(notNullish).toBeDefined()
    expect(notUndefined).toBeDefined()
    expect(isTruthy).toBeDefined()
  })
})

describe('isArray', (test) => {
  test('should return true if the value is an array', () => {
    expect(isArray([])).toBe(true)
  })

  test('should return false if the value is not an array', () => {
    expect(isArray({})).toBe(false)
    expect(isArray('')).toBe(false)
    expect(isArray(1)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(() => {})).toBe(false)
  })
})

describe('isBoolean', (test) => {
  test('should return true if the value is a boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  test('should return false if the value is not a boolean', () => {
    expect(isBoolean({})).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean('')).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean(() => {})).toBe(false)
  })
})

describe('isFunction', (test) => {
  test('should return true if the value is a function', () => {
    expect(isFunction(() => {})).toBe(true)
  })

  test('should return false if the value is not a function', () => {
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction('')).toBe(false)
    expect(isFunction(1)).toBe(false)
    expect(isFunction(true)).toBe(false)
  })
})

describe('isNumber', (test) => {
  test('should return true if the value is a number', () => {
    expect(isNumber(1)).toBe(true)
  })

  test('should return false if the value is not a number', () => {
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber('')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber(NaN)).toBe(false)
  })
})

describe('isObject', (test) => {
  test('should return true if the value is an object', () => {
    expect(isObject({})).toBe(true)
  })

  test('should return false if the value is not an object', () => {
    expect(isObject([])).toBe(false)
    expect(isObject('')).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(() => {})).toBe(false)
  })
})

describe('isObjectEmpty', (test) => {
  test('should return true if the value is an empty object', () => {
    expect(isObjectEmpty({})).toBe(true)
  })

  test('should return false if the value is not an empty object', () => {
    expect(isObjectEmpty([])).toBe(false)
    expect(isObjectEmpty({ a: 1 })).toBe(false)
  })
})

describe('isString', (test) => {
  test('should return true if the value is a string', () => {
    expect(isString('')).toBe(true)
  })

  test('should return false if the value is not a string', () => {
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(() => {})).toBe(false)
  })
})

describe('noNull', (test) => {
  test('should return true if the value is not nullish', () => {
    expect(notNull(null)).toBe(false)
    expect(notNull(undefined)).toBe(true)
  })
})

describe('notNullish', (test) => {
  test('should return true if the value is nullish', () => {
    expect(notNullish(null)).toBe(false)
    expect(notNullish(undefined)).toBe(false)
  })
})

describe('notUndefined', (test) => {
  test('should return true if the value is not undefined', () => {
    expect(notUndefined(null)).toBe(true)
    expect(notUndefined(undefined)).toBe(false)
  })
})

describe('isTruthy', (test) => {
  test('should return true if the value is truthy', () => {
    expect(isTruthy(true)).toBe(true)
    expect(isTruthy('a')).toBe(true)
    expect(isTruthy(1)).toBe(true)
    expect(isTruthy({})).toBe(true)
    expect(isTruthy([])).toBe(true)
  })
})
