# Nixton's Utils

Set of random utils functions that I tend to use a lot across my projects.
Fully typed with Typescript and fully tested!




### Functions

**isString(val: any)** - Returns true if value provided is a string

**isNumber(val: any)** - Returns true if value provided is a number

**isObject(val: any)** - Returns true if value provided is an object

**areObjectsEqual(obj1: any, obj2: any)** - Returns true if two objects are provided are equal

**areArraysEqual(arr1: any[], arr2: any[])** - Returns true if two arrays are provided are equal

**getRandomId()** - Returns a random ID made with numbers and letters

**getRandomColor()** - Returns a random HEX color

**getFormattedDate(date: Date, format?: string, countryCode?: string)** - Returns the date provided in a customised format. format: A string that will define the formatting. Use 'dd' - for numeral day, 'day' - for day of week, 'mm' - for numeral month, 'month' - for written month and 'yyyy' - for year. For example: 'dd-mm-yyyy' returns '05-01-2021', 'day, month' return 'Wednesday, January'. countryCode: string that will change the country code for the formatting. Example: 'en-us'.

**capitalizeWord(word: string)** - Returns the word provided, capitalized.
