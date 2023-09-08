import { FC } from 'react'

import { FaRegBookmark, FaBookmark } from 'react-icons/fa6'

import { Post } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useToggleFavoritePost } from '@/modules/post-modules/latest-posts-module/hooks/useToggleFavoritePost'

interface Props {
  postId: number | null
  post: Post | undefined
  setPostId?: () => void
}

export const PostFavorite: FC<Props> = ({ postId, post, setPostId }) => {
  const { toggleFavoritePostMutation } = useToggleFavoritePost(postId)

  const onFavoriteClick = () => {
    if (setPostId) {
      setPostId()
    }
    toggleFavoritePostMutation()
  }

  return (
    <button className="w-6 h-6 ml-auto" onClick={onFavoriteClick}>
      {post?.isFavorite ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  )
}
