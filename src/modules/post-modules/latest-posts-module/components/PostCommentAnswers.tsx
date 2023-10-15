import React, { FC, useState } from 'react'

import { useTranslation } from '@/components/translation'
import { PostCommentAnswer } from '@/modules/post-modules/latest-posts-module/components/PostCommentAnswer'
import { useGetCommentAnswers } from '@/modules/post-modules/latest-posts-module/hooks/useGetCommentAnswers'
import { Spinner } from '@/ui'

interface Props {
  answerCount: number
  postId: number
  commentId: number
  focusInput: () => void
}

export const PostCommentAnswers: FC<Props> = ({ answerCount, commentId, postId, focusInput }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, isInitialLoading } = useGetCommentAnswers(postId, commentId, isOpen)
  const { t } = useTranslation()

  return (
    <div className="mt-2 ml-12 flex flex-col">
      <div
        className="cursor-pointer inline-flex items-center text-light-900 text-xs font-semibold select-none"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="h-[1px] w-6 bg-light-900 mr-3"></span>
        {`${
          isOpen
            ? t.PostCommentAnswers.getCountHideAnswers(answerCount)
            : t.PostCommentAnswers.getCountShowAnswers(answerCount)
        }`}
      </div>

      {isInitialLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}

      <div>
        {isOpen &&
          data &&
          data.data.items.map(answer => (
            <PostCommentAnswer
              answer={answer}
              postId={postId}
              key={answer.id}
              focusInput={focusInput}
            />
          ))}
      </div>
    </div>
  )
}
