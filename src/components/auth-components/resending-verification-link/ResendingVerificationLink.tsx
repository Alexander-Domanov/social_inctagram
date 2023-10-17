import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import EmailResendingImg from '@/assets/images/rafiki.svg'
import { useTranslation } from '@/components/translation'

export const ResendingVerificationLink: FC<{ path: string }> = ({ path }) => {
  const { t } = useTranslation()

  return (
    <div className={'flex justify-center items-center flex-col text-light-100 h-screen'}>
      <span className={'font-bold mt-6 mb-3'}>
        {t.auth.registrationConfirmation.ResendingVerificationLink.title}
      </span>
      <br />
      <span className={'mb-12 w-96 text-center'}>
        {t.auth.registrationConfirmation.ResendingVerificationLink.description}
      </span>
      <Link
        className={
          'hover:no-underline hover:text-light-100 hover:bg-accent-100 text-light-100 inline-block text-center bg-accent-500 px-6 py-1.5 rounded-sm item leading-6'
        }
        href={path}
      >
        {t.auth.registrationConfirmation.ResendingVerificationLink.resendLink}
      </Link>
      <Image className={'mt-20'} src={EmailResendingImg} alt={'bro'} height={473} width={353} />
      {t.auth.registrationConfirmation.ResendingVerificationLink.resendLink}
    </div>
  )
}
