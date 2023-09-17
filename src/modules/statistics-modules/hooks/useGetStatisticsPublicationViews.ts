import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getStatistics_api, StatisticsQueryParamsType } from '@/modules/statistics-modules'

export const useGetStatisticsPublicationViews = ({ grouping }: StatisticsQueryParamsType) => {
  const {
    data: statisticsData,
    isSuccess: isSuccessData,
    isLoading: isLoadingData,
  } = useQuery({
    queryKey: ['statistics-publication-views', grouping],
    queryFn: () => getStatistics_api.getStatisticsViews({ grouping }),
    onError: (err: Error) => toast.error(err.message),
    staleTime: 60 * 1000,
    enabled: Boolean(grouping),
  })

  return { statisticsData, isSuccessData, isLoadingData }
}
