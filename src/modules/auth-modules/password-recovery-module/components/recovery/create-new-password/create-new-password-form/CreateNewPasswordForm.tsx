import React from 'react'

import { FieldValues, SubmitHandler } from 'react-hook-form'

import { useChangingFormWhenChangingLanguage, useGlobalForm } from '@/common'
import { useTranslation } from '@/components/translation'
import { createNewPasswordSchema } from '@/modules/auth-modules/password-recovery-module'
import { GlobalButton, InputWithEye } from '@/ui'

type PropsType = {
  onSubmitHandler: (password: string) => void
}

export const CreateNewPasswordForm = ({ onSubmitHandler }: PropsType) => {
  const { errors, trigger, register, reset, handleSubmit } = useGlobalForm(
    createNewPasswordSchema()
  )
  const { t } = useTranslation()

  useChangingFormWhenChangingLanguage({ trigger, errors })

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const { password } = data

    onSubmitHandler(password)
    reset()
  }

  return (
    <form
      className="flex flex-col grow pt-[22px]  pb-[18px] w-full gap-[24px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputWithEye
        label={t.auth.recovery.createNewPasswordPage.password}
        id="password"
        placeholder=""
        error={errors?.password?.message}
        {...register('password')}
      />
      <InputWithEye
        placeholder=""
        label={t.auth.recovery.createNewPasswordPage.passwordConfirmation}
        id="confirmPassword"
        error={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <div className="leading-6 pb-5 text-sm font-normal text-light-900">
        {t.auth.recovery.createNewPasswordPage.descriptionPassword}
      </div>
      <GlobalButton variant="default" type="submit">
        {t.auth.recovery.createNewPasswordPage.button}
      </GlobalButton>
    </form>
  )
}
