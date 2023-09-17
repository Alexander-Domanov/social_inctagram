import React from 'react'

import { ChartStatisticsComponent, StatisticsProps } from '@/modules/statistics-modules'
import { useGetStatisticsComments } from '@/modules/statistics-modules/hooks/useGetStatisticsComments'

export const StatisticsComments = ({ type, category }: StatisticsProps) => {
  const { statisticsData, isLoadingData } = useGetStatisticsComments({
    grouping: category,
  })

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
