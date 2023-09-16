import React, { useEffect, useState } from 'react'

import { statistics_business_tabs, useLocalStorage } from '@/common'
import { TabsTitle } from '@/components/account'
import { Tab } from '@/types/tabs/tabsTypes'

export const StatisticsBusinessTabs = ({
  keyLocalStorage,
  tabs,
}: {
  keyLocalStorage: string
  tabs: Tab[]
}) => {
  const [storedTabsLabel, setStoredTabsLabel] = useLocalStorage(keyLocalStorage, tabs[0].label)
  const [activeTab, setActiveTab] = useState('')
  const onChangeTab = (tabLabel: string | undefined) => {
    setActiveTab(tabLabel ?? '')

    setStoredTabsLabel(tabLabel ?? '')
  }

  const tabsLayout = tabs?.map(tab => {
    return <div key={tab.id}>{activeTab === tab.label && tab.content}</div>
  })

  useEffect(() => {
    setStoredTabsLabel(storedTabsLabel)
    setActiveTab(storedTabsLabel)
  }, [])

  return (
    <div className="relative w-full">
      <TabsTitle tabs={statistics_business_tabs} setActiveTab={onChangeTab} activeTab={activeTab} />
      {tabsLayout}
    </div>
  )
}
