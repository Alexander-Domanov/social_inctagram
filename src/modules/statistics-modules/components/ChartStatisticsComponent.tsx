import React from 'react'

import { twMerge } from 'tailwind-merge'

import { useWindowSize } from '@/common'
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
  const { width } = useWindowSize()

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
        <div
          className={twMerge(
            width && width > 576 ? 'h-[300px]' : 'h-[240pxx]',
            'flex items-center justify-center pt-3'
          )}
        >
          <Spinner />
        </div>
      )}
    </>
  )
}
