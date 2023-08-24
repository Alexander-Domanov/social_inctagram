import { Followers } from '@/components/following-followers/followers/Followers'
import { Following } from '@/components/following-followers/following/Following'
import { ModalManagerType, StateModalFollowingFollowersType } from '@/types'

export const ModalManagerFollowingFollowers = ({
  onClose,
  isModalOpen,
}: Pick<ModalManagerType<StateModalFollowingFollowersType>, 'onClose' | 'isModalOpen'>) => {
  return (
    <>
      <Following isModalOpen={isModalOpen === 'Following'} onClose={onClose} />
      <Followers isModalOpen={isModalOpen === 'Followers'} onClose={onClose} />
    </>
  )
}
