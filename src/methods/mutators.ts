import { getSquareRoot } from '../utils/helpers'

export const capitalizeWord = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1)

export const capitalizeSentence = (sentence: string): string => {
  const splitSentence = sentence.split(' ')
  let capitalizedSentence = ''

  for (let i = 0, length = splitSentence.length; i < length; i++) {
    capitalizedSentence += splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1)

    if (i + 1 < length) {
      capitalizedSentence += ' '
    }
  }

  return capitalizedSentence
}

export const abbreviateNumber = (num: number, fixed: number = 0) => {
  if (num === null) return null
  if (num === 0) return '0'

  fixed = !fixed || fixed < 0 ? 0 : fixed

  const preciseNumberArr = num.toPrecision(2).split('e')
  const x = preciseNumberArr.length === 1 ? 0 : Math.floor(Math.min(Number(preciseNumberArr[1].slice(1)), 14) / 3)
  const y = x < 1 ? num.toFixed(0 + fixed) : (num / getSquareRoot(10, x * 3)).toFixed(1 + fixed)
  const z = Number(y) < 0 ? y : Math.abs(Number(y))
  const final = z + ['', 'K', 'M', 'B', 'T'][x]

  return final
}
