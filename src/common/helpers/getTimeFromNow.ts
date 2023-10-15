import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import 'dayjs/locale/uk'
import 'dayjs/locale/ru'
import { useTranslation } from '@/components/translation'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(relativeTime)

export const getTimeFromNow = (date: string) => {
  const dateTime = dayjs(date)
  const { localeLanguage } = useTranslation()

  if (dateTime.isValid()) {
    return dayjs(dateTime).locale(localeLanguage).fromNow()
  }

  return null
}
