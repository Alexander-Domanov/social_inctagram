import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { FieldValues } from 'react-hook-form'

import { useChangingFormWhenChangingLanguage, useGlobalForm } from '@/common'
import { useTranslation } from '@/components/translation'
import { schemaLogin, useLoginMutation } from '@/modules/auth-modules/login-module'
import { routes } from '@/routing/router'
import { GlobalButton, GlobalInput, InputWithEye, Preloader } from '@/ui'

export const LoginForm = () => {
  const { setCustomError, trigger, handleSubmit, register, errors, reset } = useGlobalForm(
    schemaLogin()
  )
  const { t } = useTranslation()
  const { push } = useRouter()

  const { sendLoginData, isLoading } = useLoginMutation(
    () => {
      push(routes.sideBar.profile)
    },
    () => setCustomError('password', t.auth.login.customErrors),
    () => reset()
  )

  useChangingFormWhenChangingLanguage({ trigger, errors })

  const handleFormSubmit = async ({ email, password }: FieldValues) => {
    await sendLoginData({
      email,
      password,
    })
  }

  return (
    <>
      {isLoading && <Preloader />}
      <form
        className="flex flex-col grow gap-[10px] pt-[22px]  pb-[18px] w-full gap-[24px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <GlobalInput
          type="email"
          id="email"
          placeholder={t.auth.email}
          label={t.auth.email}
          error={errors?.email?.message}
          {...register('email')}
        />
        <InputWithEye
          label={t.auth.password}
          id="password"
          placeholder={t.auth.password}
          error={errors?.password?.message}
          {...register('password')}
        />
        <Link
          href={'/auth/forgot-password'}
          className={'flex justify-end text-light-900 text-xs mt-5'}
        >
          {t.auth.login.forgotPassword}
        </Link>
        <GlobalButton variant="default" type="submit">
          {t.auth.singIn}
        </GlobalButton>
      </form>
    </>
  )
}
