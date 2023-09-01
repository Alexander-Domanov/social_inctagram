import React, { useEffect } from 'react'

import { formatDistance, parseISO } from 'date-fns'

import { localTimeDisplayLanguageInThePost, useInViewScrollEffect } from '@/common'
import { URLUsernameForModal } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { SliderImagesPost } from '@/components/slider/SliderImagesPosts'
import { useTranslation } from '@/components/translation'
import { LikesMessageSendBlock } from '@/modules/home-module'
import { AddCommentForm } from '@/modules/post-modules/latest-posts-module/components/AddCommentForm'
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
  const localeTime: Locale | undefined = localTimeDisplayLanguageInThePost[locale || 'en']
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPagePublications,
    fetchNextPage: fetchNextPublications,
  })

  useEffect(() => {
    dataPublications?.pages.map(publications =>
      publications.items.map(publication => setPostId(publication.id))
    )
  }, [dataPublications?.pages])

  return (
    <div className="flex flex-col gap-9 w-full text-light-100 ">
      {!isLoadingPublications ? (
        <>
          {dataPublications?.pages.map(
            publications =>
              publications.items.length > 0 &&
              publications.items.map((publication, index) => (
                <div key={index} className="flex flex-col w-full h-full">
                  <div className="flex items-center w-full">
                    <URLUsernameForModal
                      avatartSrc={publication.avatars?.thumbnail.url}
                      userName={publication.userName}
                    />
                    <div className="flex text-light-900 leading-none text-xs">
                      {formatDistance(parseISO(publication.createdAt.toString()), new Date(), {
                        addSuffix: true,
                        locale: localeTime,
                      })}
                    </div>
                  </div>
                  {publication.images ? (
                    <div className="flex h-[491px]">
                      <SliderImagesPost postImages={publication.images} />
                    </div>
                  ) : (
                    <NotFoundComponent message={'No images'} />
                  )}
                  <LikesMessageSendBlock>
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
                    <span className="text-sm font-semibold leading-6 text-light-900">{`View All Comments (${publication.commentCount})`}</span>
                    <AddCommentForm postId={postId} />
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
        </>
      ) : (
        <div className="absolute h-full w-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  )
}
