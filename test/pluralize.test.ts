import { describe, expect, test } from 'vitest'
import { pluralize } from '../src/pluralize.js'

describe('pluralize', () => {
  test('should be defined closure', () => {
    expect(pluralize).toBeDefined()
  })

  // prettier-ignore
  const tokens = ['е', 'я', 'й']
  const pluralizeTasks = (count: number): string => {
    return pluralize(count)`задани${tokens}`
  }

  test('should pluralize tasks count', () => {
    expect(pluralizeTasks(1)).toBe('задание')
    expect(pluralizeTasks(2)).toBe('задания')
    expect(pluralizeTasks(5)).toBe('заданий')
    expect(pluralize(1)`packag${['e', 'es']} agenc${['y', 'ies']}`).toBe(
      'package agency'
    )
    expect(pluralize(2)`packag${['e', 'es']} agenc${['y', 'ies']}`).toBe(
      'packages agencies'
    )
  })

  test('negative total', () => {
    expect(pluralizeTasks(-999)).toBe('заданий')
  })
})
