import React from 'react'

import { nanoid } from 'nanoid'

import { useTranslation } from '@/components/translation'
import { Devices } from '@/modules/my-profile-modules/devices-module'
import { EditSettingProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import AccountManagementPage from '@/pages/profile/settings/account-management'
import { MyPayments } from 'src/modules/my-profile-modules/payments-table-module'

export const settings_profile_tabs = () => {
  const { t } = useTranslation()
  const { generalInformationTab, devices, accountManagement, myPayments } =
    t.profile.settingsProfile.settingsProfileTabs

  return [
    { id: nanoid(), label: generalInformationTab, content: <EditSettingProfile /> },
    {
      id: nanoid(),
      label: devices,
      content: <Devices />,
    },
    {
      id: nanoid(),
      label: accountManagement,
      content: <AccountManagementPage />,
    },
    {
      id: nanoid(),
      label: myPayments,
      content: <MyPayments />,
    },
  ]
}
