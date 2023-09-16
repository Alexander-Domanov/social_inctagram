import React from 'react'

import { format } from 'date-fns'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import { useTranslation } from '@/components/translation'
import { useGetStatistics } from '@/modules/statistics-modules'

export const StatisticsLikes = ({ props }: { props: string }) => {
  const { statisticsData, isSuccessData, isLoadingData } = useGetStatistics({ grouping: props })
  const { t, localeLanguage } = useTranslation()
  const count = statisticsData?.data.metrics.count
  const dataTimeStart = statisticsData?.data.metrics.time_intervals[0]

  const data = count?.map((value, index) => ({
    name: dataTimeStart ? new Date(dataTimeStart).getTime() + index * 24 * 60 * 60 * 1000 : null,
    value,
  }))

  const formatDate = (date: any) => {
    const parsedDate = date instanceof Date ? date : new Date(date)

    if (isNaN(parsedDate.getTime())) {
      return '' // Возвращаем пустую строку, если дата неверная
    }

    const formattedDate = format(parsedDate, 'do MMM')

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
      return (
        <div className="bg-dark-300 w-[110px] text-light-100 text-sm leading-6 font-normal text-center">
          <p className="label">{`${format(label, 'do MMMM')}`}</p>
          <p className="label">{`${payload[0].value} Like`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <div className="text-light-100">
      {data && !isLoadingData && (
        <LineChart
          width={972}
          height={300}
          data={data}
          className={'bg-dark-500 border-dark-300 border-1 rounded-sm pt-3 text-xs text-light-900'}
          margin={{ right: 24, left: 24, bottom: 12 }}
        >
          <XAxis
            dataKey="name"
            interval="preserveStartEnd"
            tickFormatter={formatDate}
            minTickGap={props === 'week' ? 400 : 375}
          />
          <Tooltip
            cursor={false}
            cursorStyle="red"
            isAnimationActive={true}
            content={<CustomTooltip />}
            wrapperStyle={{ lineHeight: 0 }}
          />
          <Line
            // legendType={'square'}
            // dot={false}
            // activeDot={false}
            //   type={'basis'}
            dataKey="value"
            stroke="#CC1439"
            strokeWidth={3}
            strokeLinecap="square"
          />

          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      )}
    </div>
  )
}
