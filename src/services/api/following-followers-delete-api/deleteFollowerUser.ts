import { authInstance } from '@/services'

export const deleteFollowerUser = async (userId: number): Promise<any> => {
  return await authInstance.delete(`users/follower/${userId}`)
}
