import React from 'react'

import { FieldValues, SubmitHandler } from 'react-hook-form'

import { useGlobalForm } from '@/common'
import { createNewPasswordSchema } from '@/modules/auth-modules/password-recovery-module'
import { GlobalButton, InputWithEye } from '@/ui'

type PropsType = {
  onSubmitHandler: (password: string) => void
}

export const CreateNewPasswordForm = ({ onSubmitHandler }: PropsType) => {
  const { errors, register, reset, handleSubmit } = useGlobalForm(createNewPasswordSchema)

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
        label="New password"
        id="password"
        placeholder=""
        error={errors?.password?.message}
        {...register('password')}
      />
      <InputWithEye
        placeholder=""
        label="Password confirmation"
        id="confirmPassword"
        error={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <div className="leading-6 pb-5 text-sm font-normal text-light-900">
        Your password must be between 6 and 20 characters
      </div>
      <GlobalButton variant="default" type="submit">
        Create new password
      </GlobalButton>
    </form>
  )
}
