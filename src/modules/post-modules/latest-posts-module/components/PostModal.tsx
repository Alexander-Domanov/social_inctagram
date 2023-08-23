import { FC, useState } from 'react'

import dayjs from 'dayjs'
import { FaPen, FaTimes, FaTrash } from 'react-icons/fa'
import { FaEllipsis } from 'react-icons/fa6'
import Modal from 'react-modal'

import { getTimeFromNow } from '@/common/helpers/getTimeFromNow'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { DeletePost } from '@/modules/post-modules/edit-post-module/components/DeletePost'
import { EditPost } from '@/modules/post-modules/edit-post-module/components/description-edit/AllEditPost'
import { AddCommentForm } from '@/modules/post-modules/latest-posts-module/components/AddCommentForm'
import { PostComments } from '@/modules/post-modules/latest-posts-module/components/PostComments'
import { PostFooter } from '@/modules/post-modules/latest-posts-module/components/PostFooter'
import { PostImagesSlider } from '@/modules/post-modules/latest-posts-module/components/PostImagesSlider'
import { useGetPost } from '@/modules/post-modules/latest-posts-module/hooks/useGetPost'
import { useSaveDescription, useUserStore } from '@/store'
import { Avatar } from '@/ui'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const mockDescription =
  'URLProfiele Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const PostModal: FC<Props> = ({ isOpen, onClose }) => {
  const { postId, setDescriptionLocal } = useUserStore()
  const { setDescription } = useSaveDescription()

  const { post, isLoading } = useGetPost(postId, description => {
    setDescription(description)
    setDescriptionLocal(description)
  })

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeletePostShown, setIsDeletePostShown] = useState(false)

  const onPostDelete = () => {
    setIsDeletePostShown(true)
  }

  const onPostEdit = () => {
    setIsEditModalOpen(true)
  }

  const onRequestClose = () => {
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="fixed w-full h-full top-0 left-0 bg-dark-900/60 z-[100]"
      className="absolute w-full h-full max-h-[564px] max-w-[972px] bg-dark-300 border-dark-100 border rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] focus:outline-none"
    >
      <button
        className="absolute -top-8 -right-8 text-base w-6 h-6 flex items-center justify-center text-white"
        onClick={() => onClose()}
      >
        <FaTimes size={'24px'} />
      </button>

      <div className="grid grid-cols-2 h-full">
        <div>
          <PostImagesSlider />
        </div>

        <div className="flex flex-col">
          <div className="h-[60px] px-6 flex items-center justify-between border-dark-100 border-b">
            <div className="flex items-center">
              {isLoading ? (
                <Skeleton className="w-9 h-9 mr-3 rounded-full" />
              ) : (
                <div className="w-9 h-9 mr-3 relative rounded-full overflow-hidden">
                  <Avatar
                    src={post?.avatars?.thumbnail.url}
                    width={36}
                    height={36}
                    alt={post?.userName || ''}
                  />
                </div>
              )}

              {isLoading ? (
                <Skeleton className="w-32 h-6" />
              ) : (
                <div className="text-white font-semibold">{post?.userName}</div>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild disabled={isLoading}>
                <button className="text-2xl w-6 h-6 text-white hover:text-accent-500 transition-colors data-[state=open]:text-accent-500 disabled:opacity-50">
                  <FaEllipsis />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="z-[100]" side="bottom" align="end">
                <DropdownMenuItem onSelect={onPostEdit}>
                  <FaPen className="mr-2" /> Edit Post
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={onPostDelete}>
                  <FaTrash className="mr-2" /> Delete Post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="overflow-y-auto h-[calc(564px_-_228px)]">
            <div className="px-6 py-3">
              <div className="grid grid-cols-[36px_1fr] gap-3">
                {isLoading ? (
                  <Skeleton className="w-9 h-9 rounded-full" />
                ) : (
                  <div className="w-9 h-9 shrink-0">
                    <Avatar
                      src={post?.avatars?.thumbnail.url}
                      width={36}
                      height={36}
                      alt={post?.userName || ''}
                    />
                  </div>
                )}

                <div className="text-sm leading-6 text-white">
                  {isLoading ? (
                    <Skeleton className="w-full h-6" />
                  ) : (
                    <div>
                      <span className="font-semibold">{post?.userName}</span> {mockDescription}
                    </div>
                  )}

                  <div className="mt-1">
                    <time
                      dateTime={post?.createdAt}
                      title={dayjs(post?.createdAt).format('DD.MM.YYYY HH:mm')}
                      className="text-xs text-light-900"
                    >
                      {post?.createdAt && getTimeFromNow(post?.createdAt)}
                    </time>
                  </div>
                </div>
              </div>
            </div>

            <PostComments postId={postId} />
          </div>

          <PostFooter />

          <AddCommentForm postId={postId} />
        </div>
      </div>

      <DeletePost
        isDeleteModalOpen={isDeletePostShown}
        setIsDeleteModalOpen={setIsDeletePostShown}
        postId={postId}
        onPostModalClose={onClose}
      />

      {isEditModalOpen && (
        <>
          {post!.images.map((e, index) => (
            <EditPost
              key={index}
              description={post!.description}
              imageUrl={e.versions.huge.url}
              setOpenModal={setIsEditModalOpen}
              isModalOpen={isEditModalOpen}
              onCloseClick={() => setIsEditModalOpen(false)}
            />
          ))}
        </>
      )}
    </Modal>
  )
}
