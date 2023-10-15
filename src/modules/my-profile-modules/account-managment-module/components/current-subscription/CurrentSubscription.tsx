import React, { ChangeEvent } from 'react'

import { format, parseJSON } from 'date-fns'

import { useTranslation } from '@/components/translation'
import { useGetCurrentSubscription } from '@/modules/my-profile-modules/account-managment-module/hooks/useGetCurrentSubscription'
import { useSetCancelAutoRenewal } from '@/modules/my-profile-modules/account-managment-module/hooks/useSetCancelAutoRenewal'
import { Checkbox } from '@/ui'

export const CurrentSubscription = () => {
  const { currentSubscriptions } = useGetCurrentSubscription()
  const { cancelAutoRenewal } = useSetCancelAutoRenewal()
  const hasAutoRenewal = currentSubscriptions && currentSubscriptions.hasAutoRenewal
  const { t } = useTranslation()
  const canceledAutoRenewalClick = (e: ChangeEvent<HTMLInputElement>) => {
    cancelAutoRenewal()
    e.currentTarget.checked = false
    e.currentTarget.disabled = true
  }

  const { currentSubscription, endDateSub, datePayment, autoRenewal } =
    t.profile.settingsProfile.accountManagement.currentSubscription

  return (
    <div className={'flex flex-col gap-3 my-6 text-light-100'}>
      <div className={'text-base'}>{currentSubscription}</div>
      <table className={'bg-dark-500 border border-dark-300 rounded-sm border-collapse'}>
        <thead className={'text-sm text-light-900 text-left'}>
          <tr>
            <th className={'px-6 pt-3 font-normal'}>{datePayment}</th>
            <th className={'px-6 pt-3 font-normal'}>{endDateSub}</th>
          </tr>
        </thead>
        <tbody className={'text-sm text-light-100'}>
          {currentSubscriptions &&
            currentSubscriptions.data.map(sub => {
              const dateOfPayment = format(parseJSON(sub.dateOfPayment), 'dd.MM.yyyy')
              const endDateOfSub = format(parseJSON(sub.endDateOfSubscription), 'dd.MM.yyyy')

              return (
                <tr key={sub.subscriptionId}>
                  <td className={'px-6 py-3'}>{dateOfPayment}</td>
                  <td className={'px-6 py-3 '}>{endDateOfSub}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <Checkbox
        checked={hasAutoRenewal}
        disabled={!hasAutoRenewal}
        onChange={canceledAutoRenewalClick}
      >
        {autoRenewal}
      </Checkbox>
    </div>
  )
}
