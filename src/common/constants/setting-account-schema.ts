import * as yup from 'yup'

import { nameAndLastNameRegex, usernameRegex } from '@/common'
import { useTranslation } from '@/components/translation'

export const settingsSchema = () => {
  const { t } = useTranslation()

  return yup.object({
    userName: yup.lazy(value =>
      !value
        ? yup
            .string()
            .matches(
              usernameRegex,
              t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.matches
            )
            .required(
              t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.required
            )
            .min(6, t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.min)
            .max(30, t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.max)
            .trim()
        : yup
            .string()
            .min(6, t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.min)
            .max(30, t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.max)
            .matches(
              usernameRegex,
              t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.matches
            )
            .trim()
    ),
    firstName: yup
      .string()
      .min(1, t.profile.settingsProfile.settingsProfileTabs.generalInformation.firstName.min)
      .max(50, t.profile.settingsProfile.settingsProfileTabs.generalInformation.firstName.max)
      .matches(
        nameAndLastNameRegex,
        t.profile.settingsProfile.settingsProfileTabs.generalInformation.firstName.matches
      )
      .trim(),
    lastName: yup
      .string()
      .min(1, t.profile.settingsProfile.settingsProfileTabs.generalInformation.lastName.min)
      .max(50, t.profile.settingsProfile.settingsProfileTabs.generalInformation.lastName.max)
      .matches(
        nameAndLastNameRegex,
        t.profile.settingsProfile.settingsProfileTabs.generalInformation.lastName.matches
      )
      .trim(),
    dateOfBirth: yup
      .date()
      .max(
        new Date(),
        t.profile.settingsProfile.settingsProfileTabs.generalInformation.dateOfBirthday.max
      )
      .typeError(
        t.profile.settingsProfile.settingsProfileTabs.generalInformation.dateOfBirthday.typeError
      ),
    city: yup.string().trim(),
    aboutMe: yup
      .string()
      .trim()
      .max(200, t.profile.settingsProfile.settingsProfileTabs.generalInformation.aboutMe),
  })
}
