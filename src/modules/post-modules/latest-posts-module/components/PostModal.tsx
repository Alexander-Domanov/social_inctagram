import React, { FC, useRef } from 'react'

import dayjs from 'dayjs'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'

import { getTimeFromNow } from '@/common/helpers/getTimeFromNow'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { AddCommentForm } from '@/modules/post-modules/latest-posts-module/components/AddCommentForm'
import { PostComments } from '@/modules/post-modules/latest-posts-module/components/PostComments'
import { PostImagesSlider } from '@/modules/post-modules/latest-posts-module/components/PostImagesSlider'
import { PostModalFooter } from '@/modules/post-modules/latest-posts-module/components/PostModalFooter'
import { PostModalHeader } from '@/modules/post-modules/latest-posts-module/components/PostModalHeader'
import { useGetPost } from '@/modules/post-modules/latest-posts-module/hooks/useGetPost'
import { useModalsStore, useSaveDescription, useUserStore } from '@/store'
import { Avatar } from '@/ui'

export const PostModal: FC = () => {
  const { setDescriptionLocal } = useUserStore()
  const { setDescription } = useSaveDescription()
  const { localeLanguage } = useTranslation()
  const { postId, isOpen, closeModal } = useModalsStore(state => state.postModal)

  const { post, isLoading } = useGetPost(postId)

  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const onRequestClose = () => {
    closeModal()
  }

  const onLinkClick = () => {
    closeModal()
  }

  if (!isOpen) return null

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="fixed w-full h-full top-0 left-0 bg-dark-900/60 z-[100]"
      className="absolute w-full h-full max-h-[564px] max-w-[972px] bg-dark-300 border-dark-100 border rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] outline-none"
    >
      <button
        className="absolute -top-8 -right-8 text-base w-6 h-6 flex items-center justify-center text-white"
        onClick={() => onRequestClose()}
      >
        <FaTimes size={'24px'} />
      </button>

      <div className="grid grid-cols-2 h-full">
        <div>
          <PostImagesSlider />
        </div>

        <div className="flex flex-col">
          <PostModalHeader post={post} isLoading={isLoading} />

          <ScrollArea className="h-[calc(564px_-_228px)]" type="always">
            <div className="px-6 py-3">
              <div className="grid grid-cols-[36px_1fr] gap-3">
                {isLoading ? (
                  <Skeleton className="w-9 h-9 rounded-full" />
                ) : (
                  <div className="w-9 h-9 shrink-0">
                    <Avatar
                      src={post?.avatars?.thumbnail.url}
                      width={36}
                      height={36}
                      alt={post?.userName || ''}
                    />
                  </div>
                )}

                <div className="text-sm leading-6 text-white">
                  {isLoading ? (
                    <>
                      <Skeleton className="w-full h-6" />

                      <Skeleton className="mt-2 w-20 h-3" />
                    </>
                  ) : (
                    <>
                      <div>
                        <Link href={`/${post?.userName}`} onClick={onLinkClick}>
                          <span className="font-semibold">{post?.userName}</span>
                        </Link>{' '}
                        {post?.description}
                      </div>

                      <div className="mt-2 text-xs leading-none text-light-900">
                        <time
                          dateTime={post?.createdAt}
                          title={dayjs(post?.createdAt)
                            .locale(localeLanguage)
                            .format('DD.MM.YYYY HH:mm:ss')}
                          className="inline-flex"
                        >
                          {post?.createdAt && getTimeFromNow(post?.createdAt)}
                        </time>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <PostComments postId={postId} focusInput={focusInput} />
          </ScrollArea>

          <PostModalFooter />

          <div className="px-6">
            <AddCommentForm postId={postId} ref={inputRef} />
          </div>
        </div>
      </div>
    </Modal>
  )
}
