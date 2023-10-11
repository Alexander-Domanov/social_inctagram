import React, { useState } from 'react'

import { FieldValues, SubmitHandler } from 'react-hook-form'

import { useGlobalForm } from '@/common'
import { Confirm } from '@/components/modals'
import { forgotPassSchema } from '@/modules/auth-modules/password-recovery-module'
import { Captcha } from '@/modules/auth-modules/password-recovery-module/components/forgot-password/forgot-password-form/captcha/Captcha'
import { useForgotPassword } from '@/modules/auth-modules/password-recovery-module/hooks/useForgotPassword'
import { GlobalButton, GlobalInput, Preloader } from '@/ui'
import {useTranslation} from "@/components/translation";

export const ForgotPasswordWithCaptcha = () => {
  const { errors, register, reset, handleSubmit, setCustomError } = useGlobalForm(forgotPassSchema)
  const [captcha, setCaptcha] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {t} = useTranslation()
  const onConfirm = () => {
    setIsModalOpen(false)
  }
  const onClose = () => {
    setIsModalOpen(false)
  }

  const onSuccess = () => {
    setIsModalOpen(true)
    setCaptcha('')
  }

  const { sendLinkPasswordRecovery, isLoading, variables } = useForgotPassword(
    onSuccess,
    (field: string, massage: string) => {
      setCustomError(field, massage)
      setCaptcha('')
    }
  )

  const onSubmitHandler = async (email: string, recaptcha: string) => {
    await sendLinkPasswordRecovery({ email, recaptcha })
  }

  const onRecaptchaChange = (token: string) => {
    setCaptcha(token)
  }

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const { email } = data

    onSubmitHandler(email, captcha)
    reset()
  }

  if (isLoading) return <Preloader />

  return (
    <div className={'relative flex flex-col place-content-center w-4/5'}>
      <form
        className="flex flex-col grow gap-3 pt-6  pb-5 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <GlobalInput
          type="email"
          id="email"
          placeholder=""
          label={t.auth.email}
          //@ts-ignore
          error={errors?.email?.message}
          {...register('email')}
        />

        <div className={'pt-11 pb-3 text-base leading-6 text-light-900 font-normal'}>
          {t.auth.forgotPassword.description}
        </div>
        <GlobalButton variant="default" type="submit" disabled={!captcha}>
          {t.auth.forgotPassword.buttonSend}
        </GlobalButton>
        <Captcha onRecaptchaChangeHandler={onRecaptchaChange} />
      </form>

      <Confirm
        isOpen={isModalOpen}
        onConfirm={onConfirm}
        onClose={onClose}
        title={t.auth.forgotPassword.modal.title}
        text={t.auth.forgotPassword.modal.text.getDescription(variables?.email)}
        confirmButtonText={t.confirm.buttonYes}
      />
    </div>
  )
}
