import { authInstance } from '@/services'
import { myPaymentsType } from 'src/modules/my-profile-modules/payments-table-module'

export const getMyPayments = async () => {
  const res = await authInstance.get<myPaymentsType[]>('subscriptions/my-payments')

  return res.data
}
