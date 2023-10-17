import React from 'react'

import { ChartStatisticsComponent, StatisticsProps } from '@/modules/statistics-modules'
import { useGetStatisticsPublicationViews } from '@/modules/statistics-modules/hooks/useGetStatisticsPublicationViews'

export const StatisticsPublicationViews = ({ type, category }: StatisticsProps) => {
  const { statisticsData, isFetchingData } = useGetStatisticsPublicationViews({
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
