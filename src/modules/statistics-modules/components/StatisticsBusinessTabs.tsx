import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useLocalStorage } from '@/common'
import { TabsTitle } from '@/components/account'
import { Tab } from '@/types/tabs/tabsTypes'

export const StatisticsBusinessTabs = ({
  keyLocalStorage,
  tabs,
  title,
}: {
  keyLocalStorage: string
  tabs: () => Tab[]
  title: string
}) => {
  const statistics_business_tabs = tabs()
  const { locale } = useRouter()
  const [storedTabsLabel, setStoredTabsLabel] = useLocalStorage(
    keyLocalStorage,
    statistics_business_tabs[0].label
  )
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => setActiveTab(statistics_business_tabs[0].label), [locale])
  const onChangeTab = (tabLabel: string | undefined) => {
    setActiveTab(tabLabel ?? '')

    setStoredTabsLabel(tabLabel ?? '')
  }

  const tabsLayout = statistics_business_tabs?.map(tab => {
    return <div key={tab.id}>{activeTab === tab.label && tab.content}</div>
  })

  useEffect(() => {
    setStoredTabsLabel(storedTabsLabel)
    setActiveTab(storedTabsLabel)
  }, [])

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <TabsTitle
          className="justify-end mb-3"
          tabs={statistics_business_tabs}
          setActiveTab={onChangeTab}
          activeTab={activeTab}
        />
      </div>
      {tabsLayout}
    </div>
  )
}
