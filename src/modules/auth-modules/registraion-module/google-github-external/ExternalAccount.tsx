import React, { FC } from 'react'

import Image from 'next/image'

import BroSingUp from '@/assets/images/bro-sing-up.png'
import { Confirm } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { useExternalAccount } from '@/modules/auth-modules/registraion-module'
import { GlobalButton } from '@/ui'

type PropsType = {
  code: string
  email: string
}

export const ExternalAccount: FC<PropsType> = ({ code, email }) => {
  const { confirmMerge, cancelMerge, closePopup, isLoading, popupContent } = useExternalAccount()
  const { t } = useTranslation()

  return (
    <>
      <div className={'flex justify-center items-center flex-col text-light-100 gap-7'}>
        <span className={'font-bold mt-9'}>{t.auth.registration.externalAccount.title}</span>

        <span className={'w-96 text-center text-base font-normal'}>
          {t.auth.registration.externalAccount.description(email)}
        </span>
        <GlobalButton
          type="button"
          variant="transparent"
          className="w-48"
          callback={() => confirmMerge(code)}
          disabled={isLoading}
        >
          {t.auth.registration.externalAccount.buttonYes}
        </GlobalButton>
        <GlobalButton
          type="button"
          variant="transparent"
          className="w-48"
          callback={() => cancelMerge(code)}
          disabled={isLoading}
        >
          {t.auth.registration.externalAccount.buttonNo}
        </GlobalButton>
        <Image src={BroSingUp} alt={'broSingUp'} height={290} width={290} priority />
      </div>
      <Confirm
        isOpen={popupContent.isOpen}
        onConfirm={closePopup}
        onClose={closePopup}
        title={t.auth.registration.externalAccount.modalConfirm.title}
        text={popupContent.content}
        confirmButtonText={t.auth.registration.externalAccount.modalConfirm.buttonOk}
      />
    </>
  )
}
