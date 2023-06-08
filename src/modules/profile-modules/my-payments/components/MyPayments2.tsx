import React, { useState } from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTable } from 'react-table'

import { capitalizeFirstLetter } from '@/common'
import {
  dateChangesFormat,
  myPaymentsType,
  useGetMyPayments,
} from '@/modules/profile-modules/my-payments'
import { setMyPaymentsDataEffect } from '@/modules/profile-modules/my-payments/custom/setMyPaymentsDataEffect'
export const MyPayments2 = () => {
  const [myPaymentsData, setMyPaymentsData] = useState<any[]>([])

  const { data, isSuccess } = useGetMyPayments()

  setMyPaymentsDataEffect(data, isSuccess, setMyPaymentsData)

  const columns = React.useMemo(
    () => [
      {
        accessor: 'dateOfPayment',
        header: 'Date of Payment',
      },
      {
        accessor: 'endDateOfSubscription',
        header: 'End date of subscription',
      },
      {
        accessor: 'price',
        header: 'Price',
      },
      {
        accessor: 'subscriptionType',
        header: 'Subscription Type',
      },
      {
        accessor: 'paymentType',
        header: 'Payment Type',
      },
    ],
    []
  )
  //@ts-ignore
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columns,
    data: myPaymentsData,
  })

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // eslint-disable-next-line react/jsx-key
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)

            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  // eslint-disable-next-line react/jsx-key
                  <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
