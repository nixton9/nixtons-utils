import { isString, isNumber } from './evaluators'

export const sortObjectsArrayByField = (
  arr: { [prop: string | number]: any }[],
  field: string,
  isDescending?: boolean,
): { [prop: string | number]: any }[] => {
  if (!arr.every((item) => item[field])) {
    throw new Error('Field does not exist on object')
  }
  if (arr.every((item) => isString(item[field]))) {
    return arr.sort((a, b) => (isDescending ? b[field].localeCompare(a[field]) : a[field].localeCompare(b[field])))
  }
  if (arr.every((item) => isNumber(item[field]))) {
    return arr.sort((a, b) => (isDescending ? b[field] - a[field] : a[field] - b[field]))
  }

  throw new Error('Sortable field values must all be string or number')
}

export const sortObjectKeysAlphabetically = (obj: { [key: string | number]: any }): { [key: string | number]: any } =>
  Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {},
    )
