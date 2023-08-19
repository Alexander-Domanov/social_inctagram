import { useMutation } from '@tanstack/react-query'

import { userQueryType } from '@/modules/profile-modules/user-profile-module'
import { postUserFollowingUnfollowing } from '@/modules/profile-modules/user-profile-module/api/postUserFollowingUnfollowing'

export const useFollowUnfollow = ({
  userIdQuery,
  refetch,
}: {
  userIdQuery: userQueryType
  refetch: () => void
}) => {
  const { mutate: followUnfollowUser, isLoading } = useMutation(
    ['following'],
    () => postUserFollowingUnfollowing(userIdQuery),
    { onSuccess: () => refetch() }
  )

  return {
    followUnfollowUser,
    isLoading,
  }
}
