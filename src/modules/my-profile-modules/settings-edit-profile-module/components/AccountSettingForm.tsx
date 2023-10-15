import React, { FC, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { settingsSchema, useChangingFormWhenChangingLanguage } from '@/common'
import { useTranslation } from '@/components/translation'
import { RootProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { DateCalendar, GlobalButton, GlobalInput, Textarea } from '@/ui'

type PropsType = {
  onSubmit: (data: any) => void
  initialProfileData: Omit<RootProfile, 'avatars' | 'id' | 'hasBusinessAccount'>
}

export const AccountSettingForm: FC<Partial<PropsType>> = ({ initialProfileData, onSubmit }) => {
  const [date, setDate] = useState(initialProfileData?.dateOfBirth)
  const { t } = useTranslation()

  const {
    register,
    setValue,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: initialProfileData?.userName,
      firstName: initialProfileData?.firstName,
      lastName: initialProfileData?.lastName,
      dateOfBirth: initialProfileData?.dateOfBirth,
      city: initialProfileData?.city,
      aboutMe: initialProfileData?.aboutMe,
    },
    resolver: yupResolver(settingsSchema()),
    mode: 'onChange',
  })

  const settingFormSubmit = (data: any) => {
    onSubmit?.(data)
  }

  useChangingFormWhenChangingLanguage({ trigger, errors })

  return (
    <form className="flex flex-col w-full gap-[22px]" onSubmit={handleSubmit(settingFormSubmit)}>
      <GlobalInput
        type="text"
        label={t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.label}
        {...register('userName')}
        error={errors?.userName?.message}
      />
      <GlobalInput
        type="text"
        label={t.profile.settingsProfile.settingsProfileTabs.generalInformation.firstName.label}
        {...register('firstName')}
        error={errors?.firstName?.message}
      />
      <GlobalInput
        type="text"
        label={t.profile.settingsProfile.settingsProfileTabs.generalInformation.lastName.label}
        {...register('lastName')}
        error={errors?.lastName?.message}
      />

      <DateCalendar
        label={
          t.profile.settingsProfile.settingsProfileTabs.generalInformation.dateOfBirthday.label
        }
        endDate={null}
        setEndDate={() => null}
        errorMessage={errors?.dateOfBirth?.message}
        startDate={date as Date}
        {...register('dateOfBirth')}
        setStartDate={(data: any) => {
          setValue('dateOfBirth', data)
          setDate(data)
        }}
      />

      <GlobalInput
        type="text"
        label={t.profile.settingsProfile.settingsProfileTabs.generalInformation.city}
        {...register('city')}
        error={errors?.city?.message}
      />
      <Textarea
        label={t.profile.settingsProfile.settingsProfileTabs.generalInformation.aboutMe.label}
        textAreaClassName="w-full resize-none"
        {...register('aboutMe')}
        error={errors?.aboutMe?.message}
      />
      <GlobalButton
        type="submit"
        variant="default"
        className="xsm:ml-0 ml-auto mt-[30px] text-[16px]"
      >
        {t.profile.settingsProfile.settingsProfileTabs.generalInformation.buttonSaveChanges}
      </GlobalButton>
    </form>
  )
}
