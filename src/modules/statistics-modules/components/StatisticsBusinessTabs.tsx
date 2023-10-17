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
  tabs: Tab[]
  title: string
}) => {
  const { locale } = useRouter()
  const [storedTabsLabel, setStoredTabsLabel] = useLocalStorage(keyLocalStorage, tabs[0].label)
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    setStoredTabsLabel(tabs[0].label)
    setActiveTab(tabs[0].label)
  }, [locale])

  const onChangeTab = (tabLabel: string | undefined) => {
    setActiveTab(tabLabel ?? '')

    setStoredTabsLabel(tabLabel ?? '')
  }

  const tabsLayout = tabs?.map(tab => {
    return <div key={tab.id}>{activeTab === tab.label && tab.content}</div>
  })

  // useEffect(() => {
  //   setStoredTabsLabel(storedTabsLabel)
  //   setActiveTab(storedTabsLabel)
  // }, [])

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center">
        <span className="w-full">{title}</span>
        <TabsTitle
          className="justify-end mb-3"
          tabs={tabs}
          setActiveTab={onChangeTab}
          activeTab={activeTab}
        />
      </div>
      {tabsLayout}
    </div>
  )
}
