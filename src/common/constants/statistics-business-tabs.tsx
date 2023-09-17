import React from 'react'

import { nanoid } from 'nanoid'

import { useTranslation } from '@/components/translation'
import { StatisticsLikes } from '@/modules/statistics-modules'
import { StatisticsComments } from '@/modules/statistics-modules/components/comments/StatisticsComments'
import { StatisticsPublicationViews } from '@/modules/statistics-modules/components/publicationViews/StatisticsPublicationViews'

interface Tab {
  id: string
  label: string
  content: JSX.Element
}

interface Tabs {
  tabsLikes: Tab[]
  tabsComments: Tab[]
  tabsPublicationViews: Tab[]
}

export const statistics_business_tabs = (): Tabs => {
  const { t } = useTranslation()

  return {
    tabsLikes: [
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
    ],
    tabsComments: [
      {
        id: nanoid(),
        label: t.statistics.tabsTitle.week,
        content: <StatisticsComments type={'comments'} category={'week'} />,
      },
      {
        id: nanoid(),
        label: t.statistics.tabsTitle.month,
        content: <StatisticsComments type={'comments'} category={'month'} />,
      },
    ],
    tabsPublicationViews: [
      {
        id: nanoid(),
        label: t.statistics.tabsTitle.week,
        content: <StatisticsPublicationViews type={'publicationViews'} category={'week'} />,
      },
      {
        id: nanoid(),
        label: t.statistics.tabsTitle.month,
        content: <StatisticsPublicationViews type={'publicationViews'} category={'month'} />,
      },
    ],
  }
}
