import { useMutation } from '@tanstack/react-query'

import { userQueryType } from '@/modules/user-profile-module'
import { postUserFollowingUnfollowing } from '@/modules/user-profile-module/api/postUserFollowingUnfollowing'

export const useFollowUnfollow = ({
  userIdQuery,
  refetch,
}: {
  userIdQuery?: userQueryType
  refetch: () => void
}) => {
  const { mutate: useFollowUnfollowUser, isLoading } = useMutation(
    ['following'],
    (value?: string) => postUserFollowingUnfollowing(userIdQuery ? userIdQuery : value),
    { onSuccess: () => refetch() }
  )

  return {
    useFollowUnfollowUser,
    isLoading,
  }
}
