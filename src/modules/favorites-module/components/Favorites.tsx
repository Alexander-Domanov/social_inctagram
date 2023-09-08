import React, { FC, Fragment } from 'react'

import { useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { Favorite } from '@/modules/favorites-module/components/Favorite'
import { FavoriteSkeleton } from '@/modules/favorites-module/components/FavoriteSkeleton'
import { useGetFavorites } from '@/modules/favorites-module/hooks/useGetFavorites'
import { useModalsStore } from '@/store'

export const Favorites: FC = () => {
  const { isInitialLoading, favorites, isFetchingNextPage, hasNextPage, fetchNextPage, isSuccess } =
    useGetFavorites()
  const { setPostIdAndOpenModal } = useModalsStore(state => state.postModal)

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

  const onPostClick = (id: number) => {
    setPostIdAndOpenModal(id)
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
    </div>
  )
}
