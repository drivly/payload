import { describe, test, expect } from 'vitest'
import { formatDate } from './utils'

describe('utils', () => {
  test('formatDate returns the correct format', () => {
    expect(formatDate(new Date('2023-05-15'))).toBe('2023-05-15')
  })
})
