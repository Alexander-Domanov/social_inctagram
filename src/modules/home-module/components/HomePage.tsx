import React, { useState } from 'react'

import { formatDistance, parseISO } from 'date-fns'

import { localTimeDisplayLanguageInThePost, useInViewScrollEffect } from '@/common'
import { URLUsernameForModal } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { SliderImagesPost } from '@/components/slider/SliderImagesPosts'
import { useTranslation } from '@/components/translation'
import { LikesMessageSendBlock } from '@/modules/home-module'
import { AddCommentForm } from '@/modules/post-modules/latest-posts-module/components/AddCommentForm'
import { PostActions } from '@/modules/post-modules/latest-posts-module/components/PostActions'
import { PostModal } from '@/modules/post-modules/latest-posts-module/components/PostModal'
import { useGetPublication } from '@/services'
import { useUserStore } from '@/store'
import { Avatar, Spinner } from '@/ui'

export const HomePage = () => {
  const { setPostId, postId } = useUserStore()
  const {
    dataPublications,
    isSuccessPublications,
    isFetchNextPublications,
    hasNextPagePublications,
    fetchNextPublications,
    isLoadingPublications,
  } = useGetPublication()
  const { locale } = useTranslation()
  const [isOpenPostModal, setIsOpenPostModal] = useState(false)

  const localeTime: Locale | undefined = localTimeDisplayLanguageInThePost[locale || 'en']
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPagePublications,
    fetchNextPage: fetchNextPublications,
  })

  const onClose = () => {
    setIsOpenPostModal(false)
  }
  const onPostClick = (id: number) => {
    setPostId(id)
    setIsOpenPostModal(true)
  }

  return (
    <div className="flex justify-center w-full ">
      {!isLoadingPublications ? (
        <div className="flex flex-col">
          {dataPublications?.pages.map(
            publications =>
              publications.items.length > 0 &&
              publications.items.map((publication, index) => (
                <div key={index} className="flex mb-9 text-light-900 leading-none text-xs flex-col">
                  <div className="flex justify-between pb-3 items-center">
                    <div className="flex gap-3 items-center">
                      <URLUsernameForModal
                        avatartSrc={publication.avatars?.thumbnail.url}
                        userName={publication.userName}
                      />
                      <div className="flex ">
                        {formatDistance(parseISO(publication.createdAt.toString()), new Date(), {
                          addSuffix: true,
                          locale: localeTime,
                        })}
                      </div>
                    </div>
                    <PostActions post={publication} isLoading={isLoadingPublications} />
                  </div>
                  {publication.images ? (
                    <div className="flex h-[491px]">
                      <SliderImagesPost postImages={publication.images} />
                    </div>
                  ) : (
                    <NotFoundComponent message={'No images'} />
                  )}
                  <LikesMessageSendBlock
                    publication={publication}
                    postId={postId}
                    setPostId={() => setPostId(publication.id)}
                    onPostClick={() => onPostClick(publication.id)}
                  >
                    <div className="flex mt-5 gap-3 w-full">
                      <Avatar
                        src={publication.avatars?.thumbnail.url}
                        width={36}
                        height={36}
                        alt={''}
                      />
                      <p className="flex items-center text-light-100">
                        {publication.description ? publication.description : 'No Description'}
                      </p>
                    </div>
                  </LikesMessageSendBlock>
                  <div className="pt-6">
                    <span
                      onClick={() => onPostClick(publication.id)}
                      className="text-sm font-semibold leading-6 text-light-900"
                    >{`View All Comments (${publication.commentCount})`}</span>
                    <AddCommentForm setPostId={() => setPostId(publication.id)} postId={postId} />
                  </div>
                </div>
              ))
          )}
          <PostModal isOpen={isOpenPostModal} onClose={onClose} />
          <div className="flex">
            <RenderLoadingIndicator
              isSuccess={isSuccessPublications}
              isFetchNextPage={isFetchNextPublications}
              customRef={ref}
            />
          </div>
        </div>
      ) : (
        <div className="absolute h-full w-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  )
}
