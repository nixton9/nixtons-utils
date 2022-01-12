import { capitalizeWord, capitalizeSentence, abbreviateNumber } from '../index'

describe('capitalizeWord', () => {
  test('works with single word', () => {
    expect(capitalizeWord('john')).toBe('John')
  })
  test('works on the first word with multiple words', () => {
    expect(capitalizeWord('john doe is a person')).toBe('John doe is a person')
  })
  test('has no effect on special charts', () => {
    expect(capitalizeWord('//&&$$##!!')).toBe('//&&$$##!!')
  })
  test('has no effect on strings that begin with numbers', () => {
    expect(capitalizeWord('112313word')).toBe('112313word')
  })
  test('has no effects on numbers', () => {
    expect(capitalizeWord('word 112313')).toBe('Word 112313')
  })
})

describe('capitalizeSentence', () => {
  test('works with single word', () => {
    expect(capitalizeSentence('john')).toBe('John')
  })
  test('works with multiple words', () => {
    expect(capitalizeSentence('john doe is a person')).toBe('John Doe Is A Person')
  })
  test('has no effect on special charts', () => {
    expect(capitalizeSentence('//&&$$##!!')).toBe('//&&$$##!!')
  })
  test('has no effect on strings that begin with numbers', () => {
    expect(capitalizeSentence('112313word')).toBe('112313word')
  })
  test('when first word is number it works on other words', () => {
    expect(capitalizeSentence('112313 word')).toBe('112313 Word')
  })
  test('has no effects on numbers', () => {
    expect(capitalizeSentence('word 112313')).toBe('Word 112313')
  })
})

describe('abbreviateNumber', () => {
  test('abbreviates 1000 to 1K', () => {
    expect(abbreviateNumber(1000)).toBe('1K')
  })

  test('abbreviates 1045.45 to 1K', () => {
    expect(abbreviateNumber(1045.45)).toBe('1K')
  })

  test('abbreviates 123000 to 123K', () => {
    expect(abbreviateNumber(123000)).toBe('123K')
  })

  test('abbreviates 3000000 to 3M', () => {
    expect(abbreviateNumber(3000000)).toBe('3M')
  })

  test('abbreviates 5000000000 to 5B', () => {
    expect(abbreviateNumber(5000000000)).toBe('5B')
  })

  test('abbreviates 7000000000000 to 7T', () => {
    expect(abbreviateNumber(7000000000000)).toBe('7T')
  })

  test('with fixed 2 abbreviates 100 to 100', () => {
    expect(abbreviateNumber(100, 2)).toBe('100')
  })

  test('with fixed 2 abbreviates 1500.99 to 1.5K', () => {
    expect(abbreviateNumber(1500.99, 2)).toBe('1.501K')
  })

  test('with fixed 3 abbreviates 2000.99 to 1.5K', () => {
    expect(abbreviateNumber(2000.99, 3)).toBe('2.001K')
  })

  test('does not abbreviate 10', () => {
    expect(abbreviateNumber(10)).toBe('10')
  })

  test('does not abbreviate 100', () => {
    expect(abbreviateNumber(100)).toBe('100')
  })
})
