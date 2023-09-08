import { FC } from 'react'

import dayjs from 'dayjs'
import { FaHeart, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6'

import { LikeStatus } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { PostFavorite } from '@/modules/post-modules/latest-posts-module/components/PostFavorite'
import { useChangePostLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostLikeStatus'
import { useGetPost } from '@/modules/post-modules/latest-posts-module/hooks/useGetPost'
import { useModalsStore } from '@/store'
import { Avatar } from '@/ui'

export const PostModalFooter: FC = () => {
  const { postId } = useModalsStore(state => state.postModal)
  const { post } = useGetPost(postId)
  const { mutate } = useChangePostLikeStatus(
    postId,
    post?.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )

  const onLikeClick = () => {
    mutate()
  }

  return (
    <div className="border-t border-b border-dark-100 h-[108px] px-6 py-3">
      <div className="flex items-center text-2xl leading-none text-white">
        <button className="w-6 h-6" onClick={onLikeClick}>
          {post?.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
        </button>

        <button className="w-6 h-6 ml-6">
          <FaRegPaperPlane />
        </button>

        <PostFavorite postId={postId} post={post} />
      </div>

      <div className="flex items-center mt-3 text-white text-sm leading-none h-6">
        {post?.likeCount! > 0 && (
          <div className="mr-3 flex items-center">
            {post?.newLikes?.map((like, idx, array) => (
              <div
                key={like.id}
                style={{ marginLeft: idx === 0 ? 0 : '-12px', zIndex: array.length - idx }}
              >
                <Avatar
                  alt={like.username}
                  width={24}
                  height={24}
                  src={like?.avatars?.thumbnail.url}
                />
              </div>
            ))}
          </div>
        )}

        {post && (
          <div>
            {post?.likeCount} <span className="font-bold">Like</span>
          </div>
        )}
      </div>

      <div className="mt-2 text-xs leading-none text-light-900">
        {post?.createdAt && dayjs(post.createdAt).format('MMMM D, YYYY')}
      </div>
    </div>
  )
}
