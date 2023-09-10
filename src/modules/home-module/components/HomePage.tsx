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
    <>
      {!isLoadingPublications ? (
        <>
          {dataPublications?.pages.map(
            publications =>
              publications.items.length > 0 &&
              publications.items.map((publication, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col mb-9 text-light-900 leading-none text-xs"
                >
                  <div>
                    <div className="flex justify-between items-center pb-3">
                      <div className="flex items-center gap-3">
                        <URLUsernameForModal
                          avatartSrc={publication.avatars?.thumbnail.url}
                          userName={publication.userName}
                        />
                        <span>
                          {formatDistance(parseISO(publication.createdAt.toString()), new Date(), {
                            addSuffix: true,
                            locale: localeTime,
                          })}
                        </span>
                      </div>
                      <PostActions post={publication} isLoading={isLoadingPublications} />
                    </div>
                    {publication.images ? (
                      <div className="xsm:max-w-[330px] xsm:max-h[324px]  max-w-[491px] max-h-[504px]">
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
                      <div className="flex items-center mt-5 gap-3">
                        <Avatar
                          src={publication.avatars?.thumbnail.url}
                          width={36}
                          height={36}
                          alt={''}
                        />
                        <p className=" text-light-100">
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
                </div>
              ))
          )}
          <RenderLoadingIndicator
            isSuccess={isSuccessPublications}
            isFetchNextPage={isFetchNextPublications}
            customRef={ref}
          />
        </>
      ) : (
        <div className="absolute h-full w-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  )
}
