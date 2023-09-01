import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { noRefetch } from '@/common'
import { postUserFollowingUnfollowing } from '@/modules/user-profile-module/api/postUserFollowingUnfollowing'
import { userQueryType } from '@/types'

export const useFollowingOrUnfollowingUser = ({
  userIdQuery,
  refetch,
  userId,
}: {
  userIdQuery?: userQueryType
  refetch: () => void
  userId?: number | null
}) => {
  const client = useQueryClient()
  const { mutate: useFollowUnfollowUser, isLoading } = useMutation(
    ['following'],
    () => postUserFollowingUnfollowing(userIdQuery ? userIdQuery : userId),
    {
      onSuccess: () => {
        refetch()
        if (userId) {
          client.invalidateQueries({ queryKey: ['get-profile-page'] })
        }
      },
      onError: (err: Error) => toast.error(err.message),
      cacheTime: 0,
      ...noRefetch,
    }
  )

  return {
    useFollowUnfollowUser,
    isLoading,
  }
}
