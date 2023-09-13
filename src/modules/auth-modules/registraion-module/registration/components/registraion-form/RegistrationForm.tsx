import React, { useEffect, useState } from 'react'

import { useChangingFormWhenChangingLanguage, useGlobalForm } from '@/common'
import { Confirm } from '@/components/modals/confirm/Confirm'
import { useTranslation } from '@/components/translation'
import { registrationSchema, useRegister } from '@/modules/auth-modules/registraion-module'
import { GlobalButton, GlobalInput, InputWithEye, Preloader } from '@/ui'

export const RegistrationForm = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const { localeLanguage, t } = useTranslation()

  const { errors, trigger, register, reset, handleSubmit, setCustomError } = useGlobalForm(
    registrationSchema()
  )
  const { sendRegisteredData, isLoading, variables } = useRegister(
    () => setToggleModal(true),
    () => reset(),
    setCustomError
  )

  useChangingFormWhenChangingLanguage({ trigger, localeLanguage, errors })

  const registeredDataSubmit = (data: any) => {
    sendRegisteredData(data)
  }

  const modalToggle = () => setToggleModal(!toggleModal)

  return (
    <>
      {isLoading && <Preloader />}
      <form
        className="flex flex-col grow gap-8 pt-[22px]  pb-[18px] w-full "
        onSubmit={handleSubmit(registeredDataSubmit)}
      >
        <GlobalInput
          type="text"
          id="Username"
          label={t.auth.registration.userName}
          error={errors?.userName?.message}
          {...register('userName')}
        />
        <GlobalInput
          type="email"
          id="email"
          label={t.auth.registration.email}
          error={errors?.email?.message}
          {...register('email')}
        />
        <InputWithEye
          label={t.auth.registration.password}
          id="password"
          error={errors?.password?.message}
          {...register('password')}
        />
        <InputWithEye
          label={t.auth.registration.passwordConfirmation}
          id="confirmPassword"
          error={errors?.confirmPassword?.message}
          {...register('confirmPassword')}
        />
        <GlobalButton variant="default" type="submit">
          {t.auth.signUp}
        </GlobalButton>
        <Confirm
          isOpen={toggleModal}
          onConfirm={modalToggle}
          onClose={modalToggle}
          title={t.auth.confirm.titleEmail}
          text={`${t.auth.confirm.text} ${variables?.email || ''}`}
          confirmButtonText={t.auth.confirm.ok}
        />
      </form>
    </>
  )
}
