import { FC } from 'react'

import { FaRegBookmark, FaBookmark } from 'react-icons/fa6'

import { Post } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useToggleFavoritePost } from '@/modules/post-modules/latest-posts-module/hooks/useToggleFavoritePost'

interface Props {
  postId: number | null
  post: Post | undefined
}

export const PostFavorite: FC<Props> = ({ postId, post }) => {
  const { toggleFavoritePostMutation } = useToggleFavoritePost(postId)

  const onFavoriteClick = () => {
    toggleFavoritePostMutation()
  }

  return (
    <button className="w-6 h-6 ml-auto" onClick={onFavoriteClick}>
      {post?.isFavorite ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  )
}
