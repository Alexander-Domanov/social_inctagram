import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type ReplyTo = 'post' | 'comment'

interface ModalsStore {
  postModal: {
    postId: number | null
    isOpen: boolean
    replyTo: ReplyTo
    commentId: number | null
    answerId: number | null
    setPostIdAndOpenModal: (posId: number) => void
    setIsOpen: (open: boolean) => void
    setReply: (type: ReplyTo, commentId: number | null) => void
    closeModal: () => void
  }
}

export const useModalsStore = create<ModalsStore>()(
  immer(set => ({
    postModal: {
      postId: null,
      isOpen: false,
      replyTo: 'post',
      commentId: null,
      answerId: null,
      setPostIdAndOpenModal: postId => {
        set(state => {
          state.postModal.postId = postId
          state.postModal.isOpen = true
        })
      },
      setIsOpen: open => {
        set(state => {
          state.postModal.isOpen = open
        })
      },
      setReply: (type, commentId) => {
        set(state => {
          state.postModal.replyTo = type
          state.postModal.commentId = commentId
        })
      },
      closeModal: () => {
        set(state => {
          state.postModal.isOpen = false
        })
      },
    },
  }))
)
