import { getFormattedDate, getRandomId, getRandomColor } from '../index'

const date = new Date('2021-12-22T13:24:00')

describe('getFormattedDate', () => {
  test('returns date in default format', () => {
    expect(getFormattedDate(date)).toBe('Wed Dec 22 2021')
  })

  test('returns date in dd/mm/yyyy format', () => {
    expect(getFormattedDate(date, 'dd/mm/yyyy')).toBe('22/12/2021')
  })

  test('returns date in dd-mm-yyyy format', () => {
    expect(getFormattedDate(date, 'dd-mm-yyyy')).toBe('22-12-2021')
  })

  test('returns date in yyyy/mm/dd format', () => {
    expect(getFormattedDate(date, 'yyyy/mm/dd')).toBe('2021/12/22')
  })

  test('returns week day in portuguese', () => {
    expect(getFormattedDate(date, 'day')).toBe('quarta-feira')
  })

  test('returns week day in english', () => {
    expect(getFormattedDate(date, 'day', 'en-us')).toBe('Wednesday')
  })

  test('returns month name in portuguese', () => {
    expect(getFormattedDate(date, 'month')).toBe('dezembro')
  })

  test('returns month name in english', () => {
    expect(getFormattedDate(date, 'month', 'en-us')).toBe('December')
  })
})

describe('getRandomId', () => {
  test('returns random ID of string type', () => {
    expect(typeof getRandomId(5)).toBe('string')
  })

  test('returns random ID with 1 char', () => {
    expect(getRandomId(1).length).toBe(1)
  })

  test('returns random ID with 5 chars', () => {
    expect(getRandomId(5).length).toBe(5)
  })

  test('returns random ID with 10 chars', () => {
    expect(getRandomId(10).length).toBe(10)
  })

  test('returns random ID with 20 chars', () => {
    expect(getRandomId(20).length).toBe(20)
  })

  test('returns random ID with 100 chars', () => {
    expect(getRandomId(100).length).toBe(100)
  })
})

describe('getRandomColor', () => {
  test('returns a string with 7 chars', () => {
    expect(getRandomColor().length).toBe(7)
  })

  test('returns a string that starts with #', () => {
    expect(getRandomColor()[0]).toBe('#')
  })
})
