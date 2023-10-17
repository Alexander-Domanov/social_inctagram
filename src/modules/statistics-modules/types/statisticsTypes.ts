export type StatisticsQueryParamsType = {
  grouping: string
}

export type StatisticsItems = {
  items: {
    date: Date
    count: number
  }
}

export type StatisticsMetricsType = {
  items: StatisticsItems[]
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
