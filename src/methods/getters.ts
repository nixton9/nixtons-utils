const ALL_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export const getRandomId = (length: number): string => {
  let result = ''
  for (let i = length; i > 0; --i) {
    result += ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)]
  }
  return result
}

export const getRandomColor = (): string => '#' + Math.floor(Math.random() * 16777215).toString(16)

export const getFormattedDate = (date: Date, format?: string, countryCode?: string): string => {
  if (!format) {
    return date.toDateString()
  }

  const day = `${date.getDate()}`.padStart(2, '0')
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const year = `${date.getFullYear()}`
  const weekDay = date.toLocaleString(countryCode || 'default', { weekday: 'long' })
  const writtenMonth = date.toLocaleString(countryCode || 'default', { month: 'long' })

  return format
    .replace('dd', day)
    .replace('day', weekDay)
    .replace('mm', month)
    .replace('month', writtenMonth)
    .replace('yyyy', year)
}
