import { FC, useState } from 'react'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/uk'
import 'dayjs/locale/ru'
import { FaPen, FaTimes, FaTrash } from 'react-icons/fa'
import Modal from 'react-modal'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(relativeTime)

import { DeletePost } from '@/modules/post-modules/edit-post-module/components/DeletePost'
import { EditPost } from '@/modules/post-modules/edit-post-module/components/description-edit/AllEditPost'
import { AddCommentForm } from '@/modules/post-modules/latest-posts-module/components/AddCommentForm'
import { PostComments } from '@/modules/post-modules/latest-posts-module/components/PostComments'
import { PostFooter } from '@/modules/post-modules/latest-posts-module/components/PostFooter'
import { PostImagesSlider } from '@/modules/post-modules/latest-posts-module/components/PostImagesSlider'
import { useGetPost } from '@/modules/post-modules/latest-posts-module/hooks/useGetPost'
import { useSaveDescription, useUserStore } from '@/store'
import { Avatar } from '@/ui'
import { Dropdown } from '@/ui/dropdown/Dropdown'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const mockDescription =
  'URLProfiele Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const PostModal: FC<Props> = ({ isOpen, onClose }) => {
  const { postId, setDescriptionLocal } = useUserStore()
  const { setDescription } = useSaveDescription()

  const { post } = useGetPost(postId, description => {
    setDescription(description)
    setDescriptionLocal(description)
  })

  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeletePostShown, setIsDeletePostShown] = useState(false)

  const onDelete = () => {
    setIsOpenDropdown(false)
    setIsDeletePostShown(true)
  }

  const handleEditClick = () => {
    setIsOpenDropdown(false)
    setIsEditModalOpen(true)
  }

  const onRequestClose = () => {
    setIsOpenDropdown(false)
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
              <div className="w-9 h-9 mr-3 relative rounded-full overflow-hidden">
                <Avatar
                  src={post?.avatars?.thumbnail.url}
                  width={36}
                  height={36}
                  alt={post?.userName || ''}
                />
              </div>

              <div className="text-white font-semibold">{post?.userName}</div>
            </div>

            <Dropdown isOpen={isOpenDropdown} setIsOpen={setIsOpenDropdown}>
              <div
                className="py-1.5 px-3 text-white text-sm cursor-pointer flex items-center whitespace-nowrap"
                onClick={handleEditClick}
              >
                <FaPen className="mr-2" /> Edit Post
              </div>
              <div
                className="py-1.5 p-3 text-white text-sm cursor-pointer flex items-center whitespace-nowrap"
                onClick={onDelete}
              >
                <FaTrash className="mr-2" /> Delete Post
              </div>
            </Dropdown>
          </div>
          <DeletePost
            isDeleteModalOpen={isDeletePostShown}
            setIsDeleteModalOpen={setIsDeletePostShown}
            postId={postId}
            onPostModalClose={onClose}
          />

          <div className="overflow-y-auto h-[calc(564px_-_228px)]">
            <div className="px-6 py-3">
              <div className="grid grid-cols-[36px_1fr] gap-3">
                <div className="w-9 h-9 shrink-0">
                  <Avatar
                    src={post?.avatars?.thumbnail.url}
                    width={36}
                    height={36}
                    alt={post?.userName || ''}
                  />
                </div>

                <div className="text-sm leading-6 text-white">
                  <div>
                    <span className="font-semibold">{post?.userName}</span> {mockDescription}
                  </div>

                  <div className="mt-1">
                    <time
                      dateTime={post?.createdAt}
                      title={dayjs(post?.createdAt).format('DD.MM.YYYY HH:mm')}
                      className="text-xs text-light-900"
                    >
                      {post?.createdAt && dayjs(post.createdAt).locale('ru').fromNow()}
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
    </Modal>
  )
}
