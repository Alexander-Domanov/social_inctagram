import React from 'react'

import { nanoid } from 'nanoid'

import { useTranslation } from '@/components/translation'
import { StatisticsLikes } from '@/modules/statistics-modules'

interface Tab {
  id: string
  label: string
  content: JSX.Element
}

export const statistics_business_tabs = (): Tab[] => {
  const { t } = useTranslation()

  return [
    {
      id: nanoid(),
      label: t.statistics.tabsTitle.week,
      content: <StatisticsLikes type={'likes'} category={'week'} />,
    },
    {
      id: nanoid(),
      label: t.statistics.tabsTitle.month,
      content: <StatisticsLikes type={'likes'} category={'month'} />,
    },
  ]
}
