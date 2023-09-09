import React from 'react'

import { formatDistance, parseISO } from 'date-fns'

import { localTimeDisplayLanguageInThePost, useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { SliderImagesPost } from '@/components/slider/SliderImagesPosts'
import { useTranslation } from '@/components/translation'
import { LikesMessageSendBlock } from '@/modules/home-module'
import { AddCommentForm } from '@/modules/post-modules/latest-posts-module/components/AddCommentForm'
import { PostActions } from '@/modules/post-modules/latest-posts-module/components/PostActions'
import { useGetPublication } from '@/services'
import { useModalsStore, useUserStore } from '@/store'
import { Avatar, Spinner } from '@/ui'
import { URLUsernameForModal } from 'src/components/following-followers-likes'

export const HomePage = () => {
  const { setPostId, postId } = useUserStore()
  const { t } = useTranslation()
  const {
    dataPublications,
    isSuccessPublications,
    isFetchNextPublications,
    hasNextPagePublications,
    fetchNextPublications,
    isLoadingPublications,
  } = useGetPublication()
  const { localeLanguage } = useTranslation()
  const { setPostIdAndOpenModal } = useModalsStore(state => state.postModal)
  const localeTime: Locale = localTimeDisplayLanguageInThePost[localeLanguage]
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPagePublications,
    fetchNextPage: fetchNextPublications,
  })

  const onPostClick = (id: number) => {
    setPostId(id)
    setPostIdAndOpenModal(id)
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
                    post={publication}
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
                      className="text-sm cursor-pointer font-semibold leading-6 text-light-900"
                    >{`${t.homepage.viewComments} (${publication.commentCount})`}</span>
                    <AddCommentForm setPostId={() => setPostId(publication.id)} postId={postId} />
                  </div>
                </div>
              ))
          )}
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
