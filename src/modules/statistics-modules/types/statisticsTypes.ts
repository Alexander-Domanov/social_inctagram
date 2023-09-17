export type StatisticsQueryParamsType = {
  grouping: string
}

export type StatisticsMetricsType = {
  count: number[]
  total_rows: number
  time_intervals: Date[]
  maxCount: number
  maxRound: number
  sum: number
}

export type StatisticsDataType = {
  metrics: StatisticsMetricsType
}

export type StatisticsQueryType = {
  dateStart: Date
  dateEnd: Date
  grouping: string
}

export type StatisticsType = {
  query: StatisticsQueryType
  data: StatisticsDataType
}

export type StatisticsProps = {
  type: 'likes' | 'comments' | 'publicationViews'
  category: 'week' | 'month'
}
