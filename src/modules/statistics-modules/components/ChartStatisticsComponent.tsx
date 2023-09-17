import React, { ReactNode } from 'react'

import { NotFoundComponent } from '@/components/not-found/NotFound'
import { Chart, StatisticsProps, StatisticsType } from '@/modules/statistics-modules'
import { Spinner } from '@/ui'

type ChartStatisticsComponentProps = {
  isLoadingData: boolean
  statisticsData: StatisticsType | undefined
} & StatisticsProps
export const ChartStatisticsComponent = ({
  type,
  category,
  statisticsData,
  isLoadingData,
}: ChartStatisticsComponentProps) => {
  return (
    <>
      {!isLoadingData ? (
        <>
          {statisticsData ? (
            <Chart statisticsData={statisticsData} category={category} type={type} />
          ) : (
            <NotFoundComponent className={'pt-3'} message={'no data available'} />
          )}
        </>
      ) : (
        <div className={'flex justify-center pt-3'}>
          <Spinner />
        </div>
      )}
    </>
  )
}
