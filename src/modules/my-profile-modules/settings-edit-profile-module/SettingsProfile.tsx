import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { settings_profile_tabs, useLocalStorage } from '@/common'
import { TabsTitle } from '@/components/account'
import { ArrowBack } from '@/modules/my-profile-modules/settings-edit-profile-module/utils/ArrowBack'
import { routes } from '@/routing/router'

export const SettingsProfile = () => {
  const [storedTabsLabel, setStoredTabsLabel] = useLocalStorage(
    'setting_tabs',
    settings_profile_tabs[0].label
  )
  const [activeTab, setActiveTab] = useState('')

  const onChangeTab = (tabLabel: string | undefined) => {
    setActiveTab(tabLabel ?? '')

    setStoredTabsLabel(tabLabel ?? '')
  }

  const tabsLayout = settings_profile_tabs?.map(tab => {
    return <div key={tab.id}>{activeTab === tab.label && tab.content}</div>
  })

  useEffect(() => {
    setStoredTabsLabel(storedTabsLabel)
    setActiveTab(storedTabsLabel)
  }, [])

  return (
    <div className="relative w-full">
      <Link href={routes.sideBar.profile} className="flex pb-5 w-full hidingElementMoreMobile">
        <ArrowBack />
        <span className="text-lg m-auto font-bold leading-6 text-light-100">Profile Settings</span>
      </Link>
      <TabsTitle tabs={settings_profile_tabs} setActiveTab={onChangeTab} activeTab={activeTab} />
      {tabsLayout}
    </div>
  )
}
