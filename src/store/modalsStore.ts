import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type ReplyTo = 'post' | 'comment'

interface ModalsStore {
  postModal: {
    postId: number | null
    replyTo: ReplyTo
    commentId: number | null
    answerId: number | null
    setReply: (type: ReplyTo, commentId: number | null) => void
  }
}

export const useModalsStore = create<ModalsStore>()(
  immer(set => ({
    postModal: {
      postId: null,
      replyTo: 'post',
      commentId: null,
      answerId: null,
      setReply: (type, commentId) => {
        set(state => {
          state.postModal.replyTo = type
          state.postModal.commentId = commentId
        })
      },
    },
  }))
)
