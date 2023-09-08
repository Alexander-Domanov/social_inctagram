import React, { FC, Fragment, useState } from 'react'

import { useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { Favorite } from '@/modules/favorites-module/components/Favorite'
import { FavoriteSkeleton } from '@/modules/favorites-module/components/FavoriteSkeleton'
import { useGetFavorites } from '@/modules/favorites-module/hooks/useGetFavorites'
import { PostModal } from '@/modules/post-modules/latest-posts-module/components/PostModal'
import { useUserStore } from '@/store'

export const Favorites: FC = () => {
  const { setPostId } = useUserStore()
  const {
    isInitialLoading,
    favorites,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isSuccess,
    isLoading,
  } = useGetFavorites()
  const [isOpenPostModal, setIsOpenPostModal] = useState(false)

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

  const onClose = () => {
    setIsOpenPostModal(false)
  }

  const onPostClick = (id: number) => {
    setPostId(id)
    setIsOpenPostModal(true)
  }

  const FavoriteSkeletons = () => {
    return (
      <>
        {Array.from({ length: 4 }, (_, i) => i).map(i => (
          <FavoriteSkeleton key={i} />
        ))}
      </>
    )
  }

  return (
    <div className="text-xl font-bold">
      <div>Favorites</div>

      <div className="mt-4">
        <div className="grid grid-cols-4 gap-3">
          {isInitialLoading ? (
            <FavoriteSkeletons />
          ) : (
            favorites?.pages.map((page, idx) => (
              <Fragment key={idx}>
                {page.items.map(post => (
                  <Favorite key={post.id} post={post} onPostClick={onPostClick} />
                ))}
              </Fragment>
            ))
          )}
        </div>

        <RenderLoadingIndicator
          isSuccess={isSuccess}
          isFetchNextPage={isFetchingNextPage}
          customRef={ref}
        />
      </div>

      <PostModal isOpen={isOpenPostModal} onClose={onClose} />
    </div>
  )
}
