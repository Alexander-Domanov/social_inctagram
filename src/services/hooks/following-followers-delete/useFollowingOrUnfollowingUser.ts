import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { noRefetch } from '@/common'
import { postUserFollowingUnfollowing } from '@/modules/user-profile-module/api/postUserFollowingUnfollowing'

export const useFollowingOrUnfollowingUser = ({
  refetch,
  userId,
}: {
  refetch?: () => void
  userId: number | null
}) => {
  const client = useQueryClient()
  const { mutate: useFollowUnfollowUser, isLoading } = useMutation(
    ['following'],
    () => postUserFollowingUnfollowing(userId),
    {
      onSuccess: () => {
        if (refetch) {
          refetch()
        }
        if (userId) {
          client.invalidateQueries({ queryKey: ['get-profile-page'] })
          client.invalidateQueries({ queryKey: ['publications'] })
          client.invalidateQueries({ queryKey: ['get-user-profile-page'] })
          client.invalidateQueries({ queryKey: ['post'] })
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
