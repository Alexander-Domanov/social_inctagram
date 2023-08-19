import { authInstance } from '@/services'
import { myPaymentsType } from 'src/modules/my-profile-modules/payments-table-module'

export const getMyPayments = () => {
  return authInstance
    .get<{ data: myPaymentsType[] }>('subscriptions/my-payments')
    .then(res => res.data)
}
