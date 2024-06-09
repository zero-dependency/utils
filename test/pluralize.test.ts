import { describe, expect, test } from 'vitest'

import { pluralize } from '../src/pluralize.js'

describe('pluralize', () => {
  test('should be defined closure', () => {
    expect(pluralize).toBeDefined()
  })

  function pluralizeTasks(count: number): string {
    return pluralize(count)`задани${[
      'е',
      'я',
      'й'
    ]}`
  }

  test('should pluralize tasks count', () => {
    const packageTokens = ['e', 'es']
    const agencyTokens = ['y', 'ies']

    expect(pluralizeTasks(1)).toBe('задание')
    expect(pluralizeTasks(2)).toBe('задания')
    expect(pluralizeTasks(5)).toBe('заданий')
    expect(pluralizeTasks(10)).toBe('заданий')
    expect(pluralize(1)`packag${packageTokens} agenc${agencyTokens}`).toBe(
      'package agency'
    )
    expect(pluralize(2)`packag${packageTokens} agenc${agencyTokens}`).toBe(
      'packages agencies'
    )
    expect(pluralize(10)`packag${packageTokens} agenc${agencyTokens}`).toBe(
      'packages agencies'
    )
  })

  test('negative total', () => {
    expect(pluralizeTasks(-999)).toBe('заданий')
  })

  test('should be return current count from template tagged string', () => {
    expect(pluralize(10)`${(count) => count} packag${['e', 'es']}`).toBe(
      '10 packages'
    )
  })
})
