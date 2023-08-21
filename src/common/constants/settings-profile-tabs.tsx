import React from 'react'

import { nanoid } from 'nanoid'

import { Devices } from '@/modules/my-profile-modules/devices-module'
import { EditSettingProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import AccountManagementPage from '@/pages/profile/settings/account-management'
import { MyPayments } from 'src/modules/my-profile-modules/payments-table-module'

export const settings_profile_tabs = [
  { id: nanoid(), label: 'General information', content: <EditSettingProfile /> },
  {
    id: nanoid(),
    label: 'Devices',
    content: <Devices />,
  },
  {
    id: nanoid(),
    label: 'Account Management',
    content: <AccountManagementPage />,
  },
  {
    id: nanoid(),
    label: 'My payments',
    content: <MyPayments />,
  },
]
