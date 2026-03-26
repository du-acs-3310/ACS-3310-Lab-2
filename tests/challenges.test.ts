import { describe, it, expect } from 'vitest'
import {
  mapBy,
  countBy,
  last,
  filterBy,
  pluck,
  applyTwice,
} from '../src/challenges'

describe('mapBy', () => {
  it('maps numbers to new values', () => {
    expect(mapBy([1, 2, 3], n => n * 2)).toEqual([2, 4, 6])
  })

  it('maps objects to one property', () => {
    const users = [
      { name: 'Ana', age: 22 },
      { name: 'Ben', age: 30 },
    ]

    expect(mapBy(users, user => user.name)).toEqual(['Ana', 'Ben'])
  })

  it('returns an empty array for an empty input array', () => {
    expect(mapBy([], n => n)).toEqual([])
  })
})

describe('countBy', () => {
  it('counts items by the group name returned from the callback', () => {
    expect(countBy(['ant', 'bear', 'cat'], word => String(word.length))).toEqual({
      '3': 2,
      '4': 1,
    })
  })

  it('counts repeated categories correctly', () => {
    expect(countBy([1, 2, 3, 4, 5], n => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({
      odd: 3,
      even: 2,
    })
  })

  it('returns an empty object for an empty array', () => {
    expect(countBy([], () => 'x')).toEqual({})
  })
})

describe('last', () => {
  it('returns the last number in an array', () => {
    expect(last([1, 2, 3])).toBe(3)
  })

  it('returns the last string in an array', () => {
    expect(last(['a', 'b', 'c'])).toBe('c')
  })

  it('returns undefined for an empty array', () => {
    expect(last([])).toBeUndefined()
  })
})

describe('filterBy', () => {
  it('filters numbers using a callback', () => {
    expect(filterBy([1, 2, 3, 4], n => n > 2)).toEqual([3, 4])
  })

  it('filters objects using a callback', () => {
    const users = [
      { name: 'Ana', active: true },
      { name: 'Ben', active: false },
      { name: 'Cara', active: true },
    ]

    expect(filterBy(users, user => user.active)).toEqual([
      { name: 'Ana', active: true },
      { name: 'Cara', active: true },
    ])
  })

  it('returns an empty array when nothing matches', () => {
    expect(filterBy([1, 2, 3], n => n > 10)).toEqual([])
  })
})

describe('pluck', () => {
  it('plucks names from an array of objects', () => {
    const users = [
      { name: 'Ana', age: 22 },
      { name: 'Ben', age: 30 },
    ]

    expect(pluck(users, 'name')).toEqual(['Ana', 'Ben'])
  })

  it('plucks ages from an array of objects', () => {
    const users = [
      { name: 'Ana', age: 22 },
      { name: 'Ben', age: 30 },
    ]

    expect(pluck(users, 'age')).toEqual([22, 30])
  })

  it('returns an empty array for an empty input array', () => {
    expect(pluck<{ name: string }, 'name'>([], 'name')).toEqual([])
  })
})

describe('applyTwice', () => {
  it('applies a function two times', () => {
    expect(applyTwice(2, n => n + 1)).toBe(4)
  })

  it('works with multiplication', () => {
    expect(applyTwice(3, n => n * 2)).toBe(12)
  })

  it('works with identity functions', () => {
    expect(applyTwice(5, n => n)).toBe(5)
  })
})