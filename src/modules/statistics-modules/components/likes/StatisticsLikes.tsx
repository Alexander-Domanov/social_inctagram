import React from 'react'

import {
  ChartStatisticsComponent,
  StatisticsProps,
  useGetStatisticsLikes,
} from '@/modules/statistics-modules'

export const StatisticsLikes = ({ type, category }: StatisticsProps) => {
  const { statisticsData, isFetchingData } = useGetStatisticsLikes({
    grouping: category,
  })

  return (
    <div className="text-light-100">
      <ChartStatisticsComponent
        type={type}
        category={category}
        isLoadingData={isFetchingData}
        statisticsData={statisticsData}
      />
    </div>
  )
}
