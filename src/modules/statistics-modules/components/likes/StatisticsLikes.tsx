import React from 'react'

// eslint-disable-next-line import/no-duplicates
import { clsx } from 'clsx'
import { format } from 'date-fns'
// eslint-disable-next-line import/no-duplicates
import { ru, enUS, uk } from 'date-fns/locale'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import { useTranslation } from '@/components/translation'
import { useGetStatistics } from '@/modules/statistics-modules'

interface StatisticsLikesProps {
  type: 'likes' | 'comments' | 'publicationViews'
  category: 'week' | 'month'
}

export const StatisticsLikes = ({ type, category }: StatisticsLikesProps) => {
  const { statisticsData, isSuccessData, isLoadingData } = useGetStatistics({ grouping: category })
  const { t, localeLanguage } = useTranslation()
  const count = statisticsData?.data.metrics.count
  const dataTimeStart = statisticsData?.data.metrics.time_intervals[0]

  const data = count?.map((value, index) => ({
    name: dataTimeStart ? new Date(dataTimeStart).getTime() + index * 24 * 60 * 60 * 1000 : null,
    value,
  }))
  // eslint-disable-next-line no-nested-ternary
  const language: Locale = localeLanguage === 'ru' ? ru : localeLanguage === 'en' ? enUS : uk
  const formatDate = (date: any) => {
    const parsedDate = date instanceof Date ? date : new Date(date)

    if (isNaN(parsedDate.getTime())) {
      return '' // Возвращаем пустую строку, если дата неверная
    }

    const formattedDate = format(parsedDate, 'd MMM', { locale: language })

    return formattedDate
  }

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: any
    payload?: any
    label?: any
  }) => {
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

      return (
        <div className="bg-dark-300 w-[110px] text-light-100 text-sm leading-6 font-normal text-center">
          <p className="label">{`${format(label, 'd MMMM', { locale: language })}`}</p>
          <p className="label">{description}</p>
        </div>
      )
    }

    return null
  }

  const classNames = {
    stroke: clsx(
      type === 'likes' && '#CC1439',
      type === 'comments' && '#397DF6',
      type === 'publicationViews' && '#14CC70'
    ),
    dot: {
      stroke: clsx(
        type === 'likes' && '#CC1439',
        type === 'comments' && '#397DF6',
        type === 'publicationViews' && '#14CC70'
      ),
      fill: clsx(
        type === 'likes' && '#CC1439',
        type === 'comments' && '#397DF6',
        type === 'publicationViews' && '#14CC70'
      ),
    },
    activeDot: {
      stroke: clsx(
        type === 'likes' && '#14CC70',
        type === 'comments' && '#397DF6',
        type === 'publicationViews' && '#CC1439'
      ),
      fill: clsx(
        type === 'likes' && '#0F9954',
        type === 'comments' && '#2F68CC',
        type === 'publicationViews' && '#990F2B'
      ),
    },
  }

  return (
    <div className="text-light-100">
      {data && !isLoadingData && (
        <LineChart
          width={972}
          height={300}
          data={data}
          className={'bg-dark-500 border-dark-300 border-1 rounded-sm pt-3 text-xs text-light-900'}
          margin={{ right: 24, bottom: 12 }}
        >
          <XAxis
            dataKey="name"
            interval="preserveStartEnd"
            tickFormatter={formatDate}
            minTickGap={category === 'week' ? 400 : 375}
          />
          <Tooltip
            cursor={false}
            isAnimationActive={true}
            content={<CustomTooltip />}
            wrapperStyle={{ lineHeight: 0 }}
          />
          <Line
            dot={{ stroke: classNames.dot.stroke, fill: classNames.dot.fill }}
            activeDot={{
              stroke: classNames.activeDot.stroke,
              fill: classNames.activeDot.fill,
              r: 4,
            }}
            dataKey="value"
            stroke={classNames.stroke}
            strokeWidth={3}
            strokeLinecap="square"
          />
          <YAxis />
        </LineChart>
      )}
    </div>
  )
}
