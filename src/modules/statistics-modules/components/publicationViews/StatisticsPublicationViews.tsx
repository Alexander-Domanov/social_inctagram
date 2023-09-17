import React from 'react'

import { ChartStatisticsComponent, StatisticsProps } from '@/modules/statistics-modules'
import { useGetStatisticsPublicationViews } from '@/modules/statistics-modules/hooks/useGetStatisticsPublicationViews'

export const StatisticsPublicationViews = ({ type, category }: StatisticsProps) => {
  const { statisticsData, isLoadingData } = useGetStatisticsPublicationViews({
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
