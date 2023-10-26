import React, { useState } from 'react'

import { useChangingFormWhenChangingLanguage, useGlobalForm } from '@/common'
import { Confirm } from '@/components/modals/confirm/Confirm'
import { useTranslation } from '@/components/translation'
import { registrationSchema, useRegister } from '@/modules/auth-modules/registraion-module'
import { routes } from '@/routing/router'
import { Checkbox, GlobalButton, GlobalInput, InputWithEye, Preloader } from '@/ui'
import Link from '@/ui/link/Link'

export const RegistrationForm = () => {
  const { t } = useTranslation()
  const [toggleModal, setToggleModal] = useState(false)
  const [servicesChecked, setServicesChecked] = useState<boolean>(false)
  const { errors, trigger, register, reset, handleSubmit, setCustomError } = useGlobalForm(
    registrationSchema()
  )
  const { sendRegisteredData, isLoading, variables } = useRegister(
    () => setToggleModal(true),
    () => reset(),
    setCustomError
  )

  useChangingFormWhenChangingLanguage({ trigger, errors })

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
        <div className="flex items-center justify-start text-xs gap-2">
          <Checkbox
            checked={servicesChecked}
            id="consentGiven"
            error={errors?.consentGiven?.message}
            {...register('consentGiven')}
            onChangeChecked={setServicesChecked}
          />
          <span> I agree</span>
          <Link
            className={'underline text-accent-300'}
            href={routes.policy.termsService}
            title={'Terms of Service'}
          />
          <span> and</span>
          <Link
            className={'underline text-accent-300'}
            href={routes.policy.privacyPolicy}
            title={'Privacy Policy'}
          />
        </div>

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
