import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { userQueryType } from '@/modules/user-profile-module'
import { postUserFollowingUnfollowing } from '@/modules/user-profile-module/api/postUserFollowingUnfollowing'

export const useFollowingOrUnfollowingUser = ({
  userIdQuery,
  refetch,
}: {
  userIdQuery?: userQueryType
  refetch: () => void
}) => {
  const { mutate: useFollowUnfollowUser, isLoading } = useMutation(
    ['following'],
    (value?: string) => postUserFollowingUnfollowing(userIdQuery ? userIdQuery : value),
    { onSuccess: () => refetch(), onError: (err: Error) => toast.error(err.message) }
  )

  return {
    useFollowUnfollowUser,
    isLoading,
  }
}
