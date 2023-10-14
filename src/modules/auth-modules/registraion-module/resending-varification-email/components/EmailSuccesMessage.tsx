import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import EmailConfirmationImg from '@/assets/images/bro.svg'
import { useTranslation } from '@/components/translation'

export const EmailSuccessMessage = () => {
  const { t } = useTranslation()

  return (
    <div className={'flex justify-center items-center flex-col text-light-100 h-screen'}>
      <span className={'font-bold mt-6 mb-3'}>
        {t.auth.registrationConfirmation.emailSuccessMessage.title}
      </span>
      <br />
      <span className={'mb-12'}>
        {t.auth.registrationConfirmation.emailSuccessMessage.description}
      </span>

      <Link
        className={
          'hover:no-underline hover:text-light-100 hover:bg-accent-100 text-light-100 inline-block text-center bg-accent-500 px-6 py-1.5 rounded-sm item leading-6'
        }
        href={'/'}
      >
        {t.auth.registrationConfirmation.emailSuccessMessage.signIn}
      </Link>
      <Image className={'mt-20'} src={EmailConfirmationImg} alt={'bro'} height={432} width={300} />
    </div>
  )
}
