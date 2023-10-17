import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { settings_profile_tabs } from '@/common'
import { TabsTitle } from '@/components/account'
import { useTranslation } from '@/components/translation'
import { ArrowBack } from '@/modules/my-profile-modules/settings-edit-profile-module/utils/ArrowBack'
import { routes } from '@/routing/router'

export const SettingsProfile = () => {
  const tabs = settings_profile_tabs()
  const [activeTab, setActiveTab] = useState('')
  const { t, localeLanguage } = useTranslation()
  const onChangeTab = (tabLabel: string | undefined) => {
    setActiveTab(tabLabel ?? '')
  }

  useEffect(() => {
    setActiveTab(tabs[0].label)
  }, [localeLanguage])

  const tabsLayout = tabs?.map(tab => {
    return <div key={tab.id}>{activeTab === tab.label && tab.content}</div>
  })

  return (
    <div className="relative w-full">
      <Link href={routes.sideBar.profile} className="flex pb-5 w-full hidingElementMoreMobile">
        <ArrowBack />
        <span className="text-lg m-auto font-bold leading-6 text-light-100">
          {t.profile.profilePage.buttonProfileSettings}
        </span>
      </Link>
      <TabsTitle tabs={tabs} setActiveTab={onChangeTab} activeTab={activeTab} />
      {tabsLayout}
    </div>
  )
}
