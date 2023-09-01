import React from 'react'

// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import plusOutline from '@/assets/icons/plus-square-outline.svg'
import plus from '@/assets/icons/plus-square.svg'
import { useOpenCloseModal } from '@/common/hooks/open-close-modal/useOpenCloseModal'
import { useTranslation } from '@/components/translation'
import { ModalManagerPost } from '@/modules/create-post-module'
import { StateModalPostType } from '@/types'

export const CreatePost = () => {
  const { query, pathname } = useRouter()
  const { t } = useTranslation()

  const { onCloseClick, modalOpen, setModalOpen } = useOpenCloseModal<StateModalPostType>({
    closeOnRouteChange: false,
  })

  // createPostEffect(setModalOpen, query)

  return (
    <div>
      <Link
        className="flex gap-[15px] items-center"
        href={{
          pathname: pathname,
          query: { ...query, create: true },
        }}
      >
        <Image src={modalOpen ? plus : plusOutline} alt={t.navBar.create} height={24} width={24} />
        <div
          className={clsx('cursor-pointer xsm:hidden sm:hidden', modalOpen && 'text-accent-500')}
        >
          {t.navBar.create}
        </div>
      </Link>
      {
        <ModalManagerPost
          onClose={onCloseClick}
          isModalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      }
    </div>
  )
}
