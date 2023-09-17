import { format } from 'date-fns'

export const changedFormatDateXAxis = ({ date, language }: { date: any; language: Locale }) => {
  const parsedDate = date instanceof Date ? date : new Date(date)

  if (isNaN(parsedDate.getTime())) {
    return ''
  }

  return format(parsedDate, 'd MMM', { locale: language })
}
