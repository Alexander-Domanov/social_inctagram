import { StatisticsQueryParamsType, StatisticsType } from '@/modules/statistics-modules'
import { authInstance } from '@/services'

export const getStatistics_api = {
  getStatisticsLikes: async ({ grouping }: StatisticsQueryParamsType) => {
    const res = await authInstance.get<StatisticsType>('statistics/posts/likes', {
      params: {
        grouping: grouping,
      },
    })

    return res.data
  },
  getStatisticsComments: async ({ grouping }: StatisticsQueryParamsType) => {
    const res = await authInstance.get<StatisticsType>('statistics/posts/comments', {
      params: {
        grouping: grouping,
      },
    })

    return res.data
  },
  getStatisticsViews: async ({ grouping }: StatisticsQueryParamsType) => {
    const res = await authInstance.get<StatisticsType>('statistics/posts/views', {
      params: {
        grouping: grouping,
      },
    })

    return res.data
  },
}
