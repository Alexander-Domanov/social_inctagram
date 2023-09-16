import React from 'react'

import { nanoid } from 'nanoid'

import { StatisticsLikes } from '@/modules/statistics-modules'

interface Tab {
  id: string
  label: string
  content: JSX.Element
}

export const statistics_business_tabs: Tab[] = [
  { id: nanoid(), label: 'Week', content: <StatisticsLikes props={'week'} /> },
  {
    id: nanoid(),
    label: 'Month',
    content: <StatisticsLikes props={'month'} />,
  },
]
