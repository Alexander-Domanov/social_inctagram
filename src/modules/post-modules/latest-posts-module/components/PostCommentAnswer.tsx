import { FC } from 'react'

import dayjs from 'dayjs'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

import { getTimeFromNow } from '@/common/helpers/getTimeFromNow'
import { Answer, LikeStatus } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useChangePostCommentAnswerLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostCommentAnswerLikeStatus'
import { Avatar } from '@/ui'

interface Props {
  postId: number | null
  answer: Answer
}

export const PostCommentAnswer: FC<Props> = ({ answer, postId }) => {
  const { isLoading, mutate } = useChangePostCommentAnswerLikeStatus(
    postId,
    answer.commentId,
    answer.id,
    answer.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )
  const onLikeClick = () => {
    mutate()
  }

  return (
    <div className="py-3">
      <div className="grid grid-cols-[36px_1fr_24px] gap-3">
        <div className="w-9 h-9 shrink-0">
          <Avatar
            src={answer.from.avatars?.thumbnail.url}
            width={36}
            height={36}
            alt={answer.from.username}
          />
        </div>

        <div className="text-sm leading-6 text-white">
          <div>
            <span className="font-semibold">{answer.from.username}</span> {answer.content}
          </div>

          <div className="mt-2 flex items-center gap-3 text-xs text-light-900 leading-none">
            <time
              dateTime={answer.createdAt}
              title={dayjs(answer.createdAt).format('DD.MM.YYYY HH:mm:ss')}
            >
              {answer.content && getTimeFromNow(answer.createdAt)}
            </time>

            {answer.likeCount > 0 && <div className="font-semibold">Like: {answer.likeCount}</div>}

            <button className="font-semibold">Answer</button>
          </div>
        </div>

        <div>
          <button
            className="w-6 h-6 flex items-center justify-center text-white text-base outline-none"
            onClick={onLikeClick}
          >
            {answer.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  )
}
