import { useMutation } from '@tanstack/react-query'

import { userQueryType } from '@/modules/profile-modules/user-profile-module'
import { postUserFollowingUnfollowing } from '@/modules/profile-modules/user-profile-module/api/postUserFollowingUnfollowing'

export const useFollowUnfollow = (userIdQuery: userQueryType) => {
  const { mutate: followUnfollowUser, isLoading } = useMutation(
    ['following'],
    () => postUserFollowingUnfollowing(userIdQuery),
    {
      onSuccess: () => console.log('Success'),
    }
  )

  return {
    followUnfollowUser,
    isLoading,
  }
}
