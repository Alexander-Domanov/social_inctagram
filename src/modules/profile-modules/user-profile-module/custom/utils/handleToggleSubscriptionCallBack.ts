export const handleToggleSubscriptionCallBack = ({
  followUnfollowUser,
  refetch,
}: {
  followUnfollowUser: () => void
  refetch: () => void
}) => {
  followUnfollowUser()
  refetch()
}
