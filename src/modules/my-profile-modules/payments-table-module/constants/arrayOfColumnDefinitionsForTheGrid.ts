import { capitalizeFirstLetter } from '@/common'
import { dateChangesFormat } from 'src/modules/my-profile-modules/payments-table-module'

export const columnDefs = [
  {
    field: 'dateOfPayment',
    header: 'Date of Payment',
    valueFormatter: (params: any) => dateChangesFormat(params.value),
  },
  {
    field: 'endDateOfSubscription',
    header: 'End date of subscription',
    valueFormatter: (params: any) => dateChangesFormat(params.value),
  },
  {
    field: 'price',
    header: 'Price',
    valueFormatter: (params: any) => '$' + params.value,
  },
  {
    field: 'subscriptionType',
    header: 'Subscription Type',
    valueFormatter: (params: any) => capitalizeFirstLetter(params.value),
  },
  {
    field: 'paymentType',
    header: 'Payment Type',
    valueFormatter: (params: any) => capitalizeFirstLetter(params.value),
  },
]
