import { isObject } from '../methods/evaluators'
import { sortObjectKeysAlphabetically } from '../methods/sorts'

const sortAndStringifyObj = (obj: { [key: string | number]: any }): string =>
  JSON.stringify(sortObjectKeysAlphabetically(obj))

const generateArrayHash = (arr: any[]): string => `arr-${arr.sort((x: any, y: any) => x - y)}`

const generateObjectHash = (obj: { [key: string | number]: any }): string => `obj-${sortAndStringifyObj(obj)}`

export const findItemIndexOnArray = (arr: any[], itemToFind: any): number | undefined => {
  const arraysHash: { [key: string]: number } = {}

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      arraysHash[generateArrayHash(arr[i])] = i
    } else if (isObject(arr[i])) {
      arraysHash[generateObjectHash(arr[i])] = i
    } else {
      arraysHash[arr[i]] = i
    }
  }

  if (Array.isArray(itemToFind) && arraysHash.hasOwnProperty(generateArrayHash(itemToFind))) {
    return arraysHash[generateArrayHash(itemToFind)]
  } else if (isObject(itemToFind) && arraysHash.hasOwnProperty(generateObjectHash(itemToFind))) {
    return arraysHash[generateObjectHash(itemToFind)]
  }
}

export const getSquareRoot = (x: number, y: number) => {
  if (x > 0) {
    return Math.pow(x, y)
  }
  return -1 * Math.pow(-x, y)
}
