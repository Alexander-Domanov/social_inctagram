import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import paypal from '@/assets/icons/paypal.png'
import stripe from '@/assets/icons/stripe.png'
import { Confirm } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { useSetSubscription } from '@/modules/my-profile-modules/account-managment-module/hooks/useSetSubscription'
import { useSubscription } from '@/modules/my-profile-modules/account-managment-module/store/subscriptionStore'
import { Preloader } from '@/ui'

export const PaymentMethods = () => {
  const { t } = useTranslation()
  const { text, buttonOk } = t.profile.settingsProfile.accountManagement.paymentMethods.confirm
  const router = useRouter()
  const [iJokeModalOpen, setIsJokeModalOpen] = useState(false)

  const { subscription, setPaymentType } = useSubscription()

  const { isLoading, mutate: setSubscription, isSuccess, data } = useSetSubscription()
  const onPaypalClick = async () => {
    setIsJokeModalOpen(true)
  }
  const onStripeClick = async () => {
    await setPaymentType('STRIPE')
    setSubscription(subscription)
  }

  useEffect(() => {
    if (isSuccess) {
      //@ts-ignore
      router.push(data.data.url)
    }
  }, [isSuccess])

  if (isLoading) return <Preloader />

  return (
    <>
      <div className="flex gap-[60px] justify-end items-end mt-[24px]">
        <div
          className={
            'bg-dark-500 border-1 border-dark-300 mt-[6px] py-[5px] px-[5px] rounded-[5px]'
          }
        >
          <Image src={paypal} width={86} height={54} alt={'paypalIcon'} onClick={onPaypalClick} />
        </div>
        <Image src={stripe} width={96} height={64} alt={'stripeIcon'} onClick={onStripeClick} />
      </div>
      <Confirm
        isOpen={iJokeModalOpen}
        onConfirm={() => setIsJokeModalOpen(false)}
        onClose={() => setIsJokeModalOpen(false)}
        confirmButtonText={buttonOk}
        title={'Paypal'}
        text={text}
      />
    </>
  )
}
