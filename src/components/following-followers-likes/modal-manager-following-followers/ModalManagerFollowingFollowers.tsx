import { FollowersPage } from '@/components/following-followers-likes/followers/FollowersPage'
import { FollowingPage } from '@/components/following-followers-likes/following/FollowingPage'
import { ModalManagerType, StateModalFollowingFollowersType } from '@/types'

export const ModalManagerFollowingFollowers = ({
  onClose,
  isModalOpen,
}: Pick<ModalManagerType<StateModalFollowingFollowersType>, 'onClose' | 'isModalOpen'>) => {
  return (
    <>
      <FollowingPage isModalOpen={isModalOpen === 'Following'} onClose={onClose} />
      <FollowersPage isModalOpen={isModalOpen === 'Followers'} onClose={onClose} />
    </>
  )
}
