import React from 'react'

import {
  ChartStatisticsComponent,
  StatisticsProps,
  useGetStatisticsLikes,
} from '@/modules/statistics-modules'

export const StatisticsLikes = ({ type, category }: StatisticsProps) => {
  const { statisticsData, isLoadingData } = useGetStatisticsLikes({ grouping: category })

  return (
    <div className="text-light-100">
      <ChartStatisticsComponent
        type={type}
        category={category}
        isLoadingData={isLoadingData}
        statisticsData={statisticsData}
      />
    </div>
  )
}
