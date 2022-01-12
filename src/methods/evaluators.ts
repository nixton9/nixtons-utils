import { findItemIndexOnArray } from '../utils/helpers'

export const isString = (val: any): boolean => typeof val === 'string'

export const isNumber = (val: any): boolean => typeof val === 'number'

export const isObject = (val: any): boolean => typeof val === 'object' && !Array.isArray(val) && val !== null

export const areObjectsEqual = (obj1: any, obj2: any): boolean => {
  const keys = Object.keys
  const typeObj1 = typeof obj1
  const typeObj2 = typeof obj2

  return obj1 && obj2 && typeObj1 === 'object' && typeObj1 === typeObj2
    ? keys(obj1).length === keys(obj2).length && keys(obj1).every((key) => areObjectsEqual(obj1[key], obj2[key]))
    : obj1 === obj2
}

export const areArraysEqual = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (const element of arr1) {
    if (Array.isArray(element)) {
      const innerArrIndex = findItemIndexOnArray(arr2, element)
      if (innerArrIndex == null || !areArraysEqual(element, arr2[innerArrIndex])) {
        return false
      }
    } else if (isObject(element)) {
      const innerObjIndex = findItemIndexOnArray(arr2, element)
      if (innerObjIndex == null || !areObjectsEqual(element, arr2[innerObjIndex])) {
        return false
      }
    } else if (!arr2.includes(element)) {
      return false
    }
  }

  return true
}
