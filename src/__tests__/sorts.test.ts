import { sortObjectsArrayByField, sortObjectKeysAlphabetically } from '../index'

const testArray = [
  { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
  { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
  { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
]

describe('sortObjectsArrayByField', () => {
  test('sorts by number field', () => {
    expect(sortObjectsArrayByField(testArray, 'id')).toStrictEqual([
      { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
      { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
      { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
    ])
  })

  test('sorts by string field', () => {
    expect(sortObjectsArrayByField(testArray, 'name')).toStrictEqual([
      { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
      { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
      { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
    ])
  })

  test('sorts by date string field', () => {
    expect(sortObjectsArrayByField(testArray, 'date')).toStrictEqual([
      { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
      { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
      { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
    ])
  })

  test('sorts by number field descending', () => {
    expect(sortObjectsArrayByField(testArray, 'id', true)).toStrictEqual([
      { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
      { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
      { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
    ])
  })

  test('sorts by string field descending', () => {
    expect(sortObjectsArrayByField(testArray, 'name', true)).toStrictEqual([
      { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
      { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
      { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
    ])
  })

  test('sorts by date string field descending', () => {
    expect(sortObjectsArrayByField(testArray, 'date', true)).toStrictEqual([
      { id: 379, name: 'Eric Carter', date: '2021-09-18T17:00:00.000Z', status: true },
      { id: 1201, name: 'John Doe', date: '2021-02-04T17:00:00.000Z', status: true },
      { id: 23, name: 'Steve Lash', date: '2020-09-08T17:00:00.000Z', status: true },
    ])
  })

  test('errors when field is not string or number', () => {
    expect(() => sortObjectsArrayByField(testArray, 'status')).toThrow(
      'Sortable field values must all be string or number',
    )
  })

  test('errors when field does not exist on all objects', () => {
    expect(() => sortObjectsArrayByField(testArray, 'country')).toThrow('Field does not exist on object')
  })
})

describe('sortObjectKeysAlphabetically', () => {
  test('sorts object keys correctly with few properties', () => {
    expect(sortObjectKeysAlphabetically({ id: 2, name: 'John', address: 'London' })).toStrictEqual({
      address: 'London',
      id: 2,
      name: 'John',
    })
  })

  test('sorts object keys correctly with many properties', () => {
    expect(sortObjectKeysAlphabetically({ f: 1, g: 2, a: 3, c: 4, b: 5, m: 6, l: 7, p: 8, z: 9, s: 10 })).toStrictEqual(
      { a: 3, b: 5, c: 4, f: 1, g: 2, l: 7, m: 6, p: 8, s: 10, z: 9 },
    )
  })

  test('sorts object keys correctly when properties are number', () => {
    expect(sortObjectKeysAlphabetically({ 3: 'John', 1: 'Eric', 5: 'Sam', 4: 'Matt' })).toStrictEqual({
      1: 'Eric',
      3: 'John',
      4: 'Matt',
      5: 'Sam',
    })
  })
})
