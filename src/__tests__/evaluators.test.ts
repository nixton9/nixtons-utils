import { isString, isNumber, isObject, areObjectsEqual, areArraysEqual } from '../index'

const obj1 = {
  id: 1,
  name: 'john',
  lastName: 'doe',
  address: {
    city: 'London',
    country: 'England',
  },
}
const obj2 = {
  id: 1,
  name: 'john',
  lastName: 'doe',
  address: {
    city: 'London',
    country: 'England',
  },
}
const obj3 = {
  lastName: 'doe',
  name: 'john',
  address: {
    country: 'England',
    city: 'London',
  },
  id: 1,
}

const arrA: any[] = []
const arrB: any[] = []
const arr1A = [1, 2, 3, 19]
const arr1B = [1, 2, 3, 19]
const arr1C = [1, 2, 3, 18]
const arr2A = ['this', 'is', 'an', 'array']
const arr2B = ['this', 'is', 'an', 'array']
const arr3A = ['string', 102, [4, 5, 6], { id: 1, name: 'john' }]
const arr3B = ['string', 102, [4, 5, 6], { id: 1, name: 'john' }]
const arr4A = [[4, 5, 6], 'string', 102, 'another', 2]
const arr4B = [2, 'string', 102, 'another', [4, 5, 6]]
const arr5A = [
  [1, 2],
  [3, 4, 5],
  ['strings', 'array'],
]
const arr5B = [
  [1, 2],
  [3, 4, 5],
  ['strings', 'array'],
]
const arr6A = [
  [2, 3],
  [4, 5],
]
const arr6B = [
  [2, 3],
  [4, 6],
]
const arr7A = [{}]
const arr7B = [{}]
const arr8A = [
  { id: 1, name: 'john', address: 'london' },
  { name: 'Eric', id: 2, address: 'Florida' },
]
const arr8B = [
  { address: 'Florida', id: 2, name: 'Eric' },
  { address: 'london', name: 'john', id: 1 },
]

describe('areObjectsEqual', () => {
  test('returns true with equal objects', () => {
    expect(areObjectsEqual(obj1, obj2)).toBe(true)
  })
  test('returns true with equal objects that have different properties order', () => {
    expect(areObjectsEqual(obj1, obj3)).toBe(true)
  })
})

describe('areArraysEquals', () => {
  test('returns true when both arrays are empty', () => {
    expect(areArraysEqual(arrA, arrB)).toBe(true)
  })
  test('returns false when one element is different', () => {
    expect(areArraysEqual(arr1A, arr1C)).toBe(false)
  })
  test('returns true with equal arrays of numbers', () => {
    expect(areArraysEqual(arr1A, arr1B)).toBe(true)
  })
  test('returns true with equal arrays of strings', () => {
    expect(areArraysEqual(arr2A, arr2B)).toBe(true)
  })
  test('returns true with equal arrays of different types', () => {
    expect(areArraysEqual(arr3A, arr3B)).toBe(true)
  })
  test('returns true with equal arrays that have different sortings', () => {
    expect(areArraysEqual(arr4A, arr4B)).toBe(true)
  })
  test('returns true with equal arrays of arrays', () => {
    expect(areArraysEqual(arr5A, arr5B)).toBe(true)
  })
  test('returns false when an inner array has one different element', () => {
    expect(areArraysEqual(arr6A, arr6B)).toBe(false)
  })
  test('returns true with equal arrays of empty objects', () => {
    expect(areArraysEqual(arr7A, arr7B)).toBe(true)
  })
  test('returns true with equal arrays of objects with different sortings', () => {
    expect(areArraysEqual(arr8A, arr8B)).toBe(true)
  })
})

describe('isString', () => {
  test('returns true with a string', () => {
    expect(isString('a string')).toBe(true)
  })
  test('returns false with a number', () => {
    expect(isString(12)).toBe(false)
  })
  test('returns false with a boolean', () => {
    expect(isString(false)).toBe(false)
  })
  test('returns false with an object', () => {
    expect(isString({})).toBe(false)
  })
  test('returns false with an array', () => {
    expect(isString([])).toBe(false)
  })
  test('returns false with null', () => {
    expect(isString(null)).toBe(false)
  })
  test('returns false with undefined', () => {
    expect(isString(undefined)).toBe(false)
  })
})

describe('isNumber', () => {
  test('returns true with a number', () => {
    expect(isNumber(12)).toBe(true)
  })
  test('returns false with a string', () => {
    expect(isNumber('a string')).toBe(false)
  })
  test('returns false with a boolean', () => {
    expect(isNumber(false)).toBe(false)
  })
  test('returns false with an object', () => {
    expect(isNumber({})).toBe(false)
  })
  test('returns false with an array', () => {
    expect(isNumber([])).toBe(false)
  })
  test('returns false with null', () => {
    expect(isNumber(null)).toBe(false)
  })
  test('returns false with undefined', () => {
    expect(isNumber(undefined)).toBe(false)
  })
})

describe('isObject', () => {
  test('returns true with an object with many properties', () => {
    expect(isObject(obj1)).toBe(true)
  })
  test('returns true with an object with one property', () => {
    expect(isObject({ id: 1 })).toBe(true)
  })
  test('returns true with an empty object', () => {
    expect(isObject({})).toBe(true)
  })
  test('returns false with a string', () => {
    expect(isObject('random string')).toBe(false)
  })
  test('returns false with a number', () => {
    expect(isObject(1234)).toBe(false)
  })
  test('returns false with a boolean', () => {
    expect(isObject(true)).toBe(false)
  })
  test('returns false with an array', () => {
    expect(isObject([1, 2])).toBe(false)
  })
  test('returns false with a function', () => {
    expect(isObject(() => alert('test'))).toBe(false)
  })
})
