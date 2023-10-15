import React, {useEffect, useState} from 'react'

import { useTranslation } from '@/components/translation'
import { Radio } from '@/ui/radio/Radio'

type PropsType = {
  setIsSwitchedToBusiness: (isSwitchedToBusiness: boolean) => void
  isSwitchedToBusiness: boolean
}

export const AccountType = ({ setIsSwitchedToBusiness, isSwitchedToBusiness }: PropsType) => {
  const { t, localeLanguage } = useTranslation()
  const { titleAccountType, personal, business } =
    t.profile.settingsProfile.accountManagement.accountType
  const accountTypes = [personal, business]
  const defaultAccountType = isSwitchedToBusiness ? business : accountTypes[0]
  const [accountTypeValue, setAccountTypeValue] = useState(defaultAccountType)

  const onAccountTypeChange = (option: any) => {
    if (option === business) {
      setIsSwitchedToBusiness(true)
    } else {
      setIsSwitchedToBusiness(false)
    }

    setAccountTypeValue(option)
  }

  useEffect(() => {
    setAccountTypeValue(personal)
  }, [localeLanguage])

  return (
    <div className={'mb-[42px]'}>
      <h3 className={'text-blue-50'}>{titleAccountType}</h3>
      <div
        className={
          'bg-dark-300 border-1 border-dark-300 mt-[6px] py-[14px] px-[26px] rounded-[5px]'
        }
      >
        {accountTypes.map(value => {
          return (
            <Radio
              key={value}
              callBack={onAccountTypeChange}
              name="accountType"
              value={value}
              checked={value === accountTypeValue}
              id={value}
              disabled={value === personal && isSwitchedToBusiness}
            />
          )
        })}
      </div>
    </div>
  )
}
