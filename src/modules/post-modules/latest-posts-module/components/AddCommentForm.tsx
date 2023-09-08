import { FormEvent, forwardRef, useState } from 'react'

import { useAddComment } from '@/modules/post-modules/latest-posts-module/hooks/useAddComment'
import { useAddCommentAnswer } from '@/modules/post-modules/latest-posts-module/hooks/useAddCommentAnswer'
import { useModalsStore } from '@/store'

interface Props {
  postId: number | null
  setPostId?: () => void
}

const AddCommentForm = forwardRef<HTMLInputElement, Props>(({ postId, setPostId }, inputRef) => {
  const [comment, setComment] = useState('')
  const { postModal } = useModalsStore()
  const { addCommentAsync } = useAddComment(postId, comment)
  const { addCommentAnswerAsync } = useAddCommentAnswer(postId, postModal.commentId, comment)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    switch (postModal.replyTo) {
      case 'post': {
        addCommentAsync().then(() => {
          setComment('')
          postModal.setReply('post', null)
        })
        break
      }

      case 'comment': {
        addCommentAnswerAsync().then(() => {
          setComment('')
          postModal.setReply('post', null)
        })
      }
    }
  }

  return (
    <form
      className="h-[60px] grid grid-cols-[1fr_auto] items-center px-6 gap-6"
      onSubmit={onSubmit}
    >
      <div>
        <input
          onClick={() => (setPostId ? setPostId() : null)}
          type="text"
          className="text-white placeholder-light-900 h-6 w-full bg-transparent outline-none text-sm"
          placeholder="Add a Comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
          minLength={2}
          ref={inputRef}
        />
      </div>

      <div>
        <button type="submit" className="text-accent-500 text-base">
          Publish
        </button>
      </div>
    </form>
  )
})

AddCommentForm.displayName = 'AddCommentForm'

export { AddCommentForm }
