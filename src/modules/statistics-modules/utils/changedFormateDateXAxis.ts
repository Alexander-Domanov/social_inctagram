import { format } from 'date-fns'

export const changedFormatDateXAxis = ({ date, language }: { date: any; language: Locale }) => {
  const parsedDate = date instanceof Date ? date : new Date(date)

  if (isNaN(parsedDate.getTime())) {
    return ''
  }

  const utcDay = parsedDate.getUTCDate()
  const utcMonth = parsedDate.getUTCMonth()
  const formattedDate = format(
    new Date(Date.UTC(parsedDate.getUTCFullYear(), utcMonth, utcDay)),
    'd MMM',
    { locale: language }
  )

  return formattedDate
}
