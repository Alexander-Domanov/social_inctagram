import React from 'react'

import { format, parseISO } from 'date-fns'

import { LocaleType } from '@/components/translation'
import { StatisticsProps } from '@/modules/statistics-modules'

type ChartCustomTooltipProps = {
  active?: any
  payload?: any
  label?: any
  t: LocaleType
  language: Locale
} & Pick<StatisticsProps, 'type'>

export const ChartCustomTooltip = ({
  active,
  payload,
  label,
  type,
  language,
  t,
}: ChartCustomTooltipProps) => {
  if (active && payload && payload.length) {
    const payloadValue = payload[0].value
    const description =
      // eslint-disable-next-line no-nested-ternary
      type === 'likes'
        ? t.statistics.popUp.getCountTitleLikes(payloadValue)
        : // eslint-disable-next-line no-nested-ternary
        type === 'comments'
        ? t.statistics.popUp.getCountTitleComments(payloadValue)
        : type === 'publicationViews'
        ? t.statistics.popUp.getCountTitlePublication(payloadValue)
        : ''
    const parsedLabel = parseISO(label)

    return (
      <div className="bg-dark-300 w-[140px] text-light-100 text-sm leading-6 font-normal text-center">
        <p className="label">{`${format(parsedLabel, 'd MMMM', { locale: language })}`}</p>
        <p className="label">{description}</p>
      </div>
    )
  }

  return null
}
