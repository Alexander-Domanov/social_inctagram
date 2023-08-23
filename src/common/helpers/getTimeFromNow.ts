import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/uk'
import 'dayjs/locale/ru'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(relativeTime)

export const getTimeFromNow = (date: string) => {
  const dateTime = dayjs(date)

  if (dateTime.isValid()) {
    return dayjs(dateTime).locale('ru').fromNow()
  }

  return null
}
