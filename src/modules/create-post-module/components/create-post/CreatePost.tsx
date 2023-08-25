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
import { createPostEffect } from '@/modules/create-post-module/components/create-post/custom/custom'
import { StateModalPostType } from '@/types'

export const CreatePost = () => {
  const { query } = useRouter()
  const { t } = useTranslation()

  const { onCloseClick, modalOpen, setModalOpen } = useOpenCloseModal<StateModalPostType>({
    closeOnRouteChange: true,
  })

  createPostEffect(setModalOpen, query)

  return (
    <div>
      <Link
        className="flex gap-[15px] items-center"
        href={{
          query: { create: true },
        }}
      >
        <Image src={modalOpen ? plus : plusOutline} alt={t.navBar.create} height={24} width={24} />
        <div
          className={clsx('cursor-pointer xsm:hidden sm:hidden', modalOpen && 'text-accent-500')}
        >
          {t.navBar.create}
        </div>
      </Link>
      {query.create && (
        <ModalManagerPost
          onClose={onCloseClick}
          isModalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  )
}
