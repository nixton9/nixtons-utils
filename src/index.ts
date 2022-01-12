import * as mutators from './methods/mutators'
import * as sorts from './methods/sorts'
import * as evaluators from './methods/evaluators'
import * as getters from './methods/getters'

export const capitalizeWord = mutators.capitalizeWord
export const capitalizeSentence = mutators.capitalizeSentence
export const abbreviateNumber = mutators.abbreviateNumber
export const sortObjectsArrayByField = sorts.sortObjectsArrayByField
export const sortObjectKeysAlphabetically = sorts.sortObjectKeysAlphabetically
export const isString = evaluators.isString
export const isNumber = evaluators.isNumber
export const isObject = evaluators.isObject
export const areObjectsEqual = evaluators.areObjectsEqual
export const areArraysEqual = evaluators.areArraysEqual
export const getFormattedDate = getters.getFormattedDate
export const getRandomId = getters.getRandomId
export const getRandomColor = getters.getRandomColor
