import React, { Dispatch, SetStateAction } from 'react'

import { useGetQueryUserNameUserId } from '@/common'
import { useModal } from '@/common/hooks/useModal'
import { Confirm } from '@/components/modals'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useTranslation } from '@/components/translation'
import { useUserStore } from '@/store'
import { FollowingsFollowersType, FollowUnfollowButtonPropsInterface } from '@/types'
import {
  DeleteUserButton,
  FollowUnfollowButton,
  URLUsernameForModal,
} from 'src/components/following-followers'

type FollowingUsersProps = {
  items: FollowingsFollowersType[]
  setCurrentDeleteUserId: Dispatch<SetStateAction<number | null>>
  currentUserId: number | null
  isLoadingDeleteUser: boolean
  handleToggleSubscriptionsCallBack: ({
    userId,
    userName,
  }: {
    userId: number
    userName: string
  }) => void
  deleteUserCallBack: () => void
  currentDeleteUserId: any
  textModal: string | null
  setTextModal: (text: string | null) => void
} & Omit<FollowUnfollowButtonPropsInterface, 'isFollowing' | 'handleToggleSubscriptionsCallBack'>

export const FollowersUsers = ({
  items,
  currentUserId,
  currentDeleteUserId,
  isLoadingDeleteUser,
  handleToggleSubscriptionsCallBack,
  isRefetching,
  isLoadingButton,
  setCurrentDeleteUserId,
  deleteUserCallBack,
  textModal,
  setTextModal,
}: FollowingUsersProps) => {
  const { isModalOpen, setIsModalOpen, onConfirmModal, onDeclineModal } = useModal({
    callBack: () => deleteUserCallBack(),
  })
  const { t } = useTranslation()
  const { userNameQuery } = useGetQueryUserNameUserId()
  const { userName } = useUserStore()
  const isUserName: boolean = userName === userNameQuery

  return (
    <>
      {items.length > 0 ? (
        items.map((user: FollowingsFollowersType, index) => (
          <div
            className="flex xsm:flex-col items-center align-middle justify-between"
            key={user.userId}
          >
            <URLUsernameForModal
              avatartSrc={user.avatars?.thumbnail.url || null}
              userName={user.userName}
            />
            {isUserName && (
              <>
                {!user.isFollowing && (
                  <FollowUnfollowButton
                    key={index}
                    isFollowing={user.isFollowing}
                    handleToggleSubscriptionsCallBack={() =>
                      handleToggleSubscriptionsCallBack({
                        userId: user.userId,
                        userName: user.userName,
                      })
                    }
                    isLoadingButton={currentUserId === user.userId && isLoadingButton}
                    isRefetching={currentUserId === user.userId && isRefetching}
                  />
                )}
                <Confirm
                  isOpen={isModalOpen}
                  onConfirm={() => onConfirmModal({ value: user.userId })}
                  onDecline={onDeclineModal}
                  onClose={onDeclineModal}
                  title={t.profile.profilePage.confirmTitleDeleteFollowing}
                  text={`${t.profile.profilePage.confirmDescriptionDeleteFollowing} ${textModal}"?`}
                />
                <DeleteUserButton
                  disabled={user.userId === currentDeleteUserId && isLoadingDeleteUser}
                  userId={user.userId}
                  setCurrentDeleteUserId={setCurrentDeleteUserId}
                  setIsModalOpen={setIsModalOpen}
                  textModal={user.userName}
                  setTextModal={setTextModal}
                />
              </>
            )}
          </div>
        ))
      ) : (
        <NotFoundComponent message={'Not Found'} />
      )}
    </>
  )
}
