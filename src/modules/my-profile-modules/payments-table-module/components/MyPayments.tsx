import React, { useMemo, useState } from 'react'

import {
  getCoreRowModel,
  useReactTable,
  PaginationState,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
  ColumnDef,
  Table,
} from '@tanstack/react-table'

import { capitalizeFirstLetter } from '@/common'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useTranslation } from '@/components/translation'
import { UserPaymentsTable } from '@/modules/my-profile-modules/payments-table-module/components/UserPaymentsTable'
import { SkeletonMyPayments } from '@/ui/skeletons/SkeletonMyPayments'
import {
  dateChangesFormat,
  myPaymentsType,
  setMyPaymentsDataEffect,
  useGetMyPayments,
} from 'src/modules/my-profile-modules/payments-table-module'
export type ItemsUserPaymentsType = {
  dataOfPayment: Date
  endDateOfSubscription: Date
  price: number
  type: string
  paymentType: string
}
export const MyPayments = () => {
  const { t } = useTranslation()
  const { price, dataOfPayment, paymentType, endDateOfSubscription, subscription } =
    t.profile.settingsProfile.myPayments
  const [myPaymentsData, setMyPaymentsData] = useState<any[]>([])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const [sorting, setSorting] = useState<SortingState>([])

  const sort = sorting.map(({ id }) => `${id}`)
  const dir = sorting.map(({ desc }) => `${desc ? 'DESC' : 'ASC'}`)
  const sortBy = sort.length > 0 ? sort[0] : ''
  const sortDirection = dir.length > 0 ? dir[0] : ''

  const fetchDataOptions = {
    pageNumber: pageIndex,
    pageSize: pageSize,
    sortBy: sortBy,
    sortDirection: sortDirection,
  }

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const { data, isSuccess, isLoading } = useGetMyPayments()

  setMyPaymentsDataEffect(data, isSuccess, isLoading, setMyPaymentsData)

  const columns: ColumnDef<myPaymentsType>[] = useMemo(
    () => [
      {
        accessor: 'dateOfPayment',
        header: dataOfPayment,
        cell: (params: any) =>
          isLoading || !isSuccess ? <SkeletonMyPayments /> : dateChangesFormat(params.getValue()),
        accessorKey: 'dateOfPayment',
      },
      {
        accessor: 'endDateOfSubscription',
        header: endDateOfSubscription,
        cell: (params: any) =>
          isLoading || !isSuccess ? <SkeletonMyPayments /> : dateChangesFormat(params.getValue()),
        accessorKey: 'endDateOfSubscription',
      },
      {
        accessor: 'price',
        header: price,
        cell: (params: any) =>
          isLoading || !isSuccess ? <SkeletonMyPayments /> : '$' + params.getValue(),
        accessorKey: 'price',
      },
      {
        accessor: 'subscriptionType',
        header: subscription,
        cell: (params: any) =>
          isLoading || !isSuccess ? (
            <SkeletonMyPayments />
          ) : (
            capitalizeFirstLetter(params.getValue())
          ),
        accessorKey: 'subscriptionType',
      },
      {
        accessor: 'paymentType',
        header: paymentType,
        cell: (params: any) =>
          isLoading || !isSuccess ? (
            <SkeletonMyPayments />
          ) : (
            capitalizeFirstLetter(params.getValue())
          ),
        accessorKey: 'paymentType',
      },
    ],
    [isSuccess, isLoading]
  )
  const tableProps: Table<ItemsUserPaymentsType> = useReactTable({
    data: myPaymentsData,
    columns: columns,
    state: {
      pagination,
      sorting,
    },
    // manualSorting: true,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <>
      <div className="text-accent-500 p-2 block max-w-full pt-6">
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading ? (
          <UserPaymentsTable<ItemsUserPaymentsType> tableProps={tableProps} />
        ) : data && data.length > 0 ? (
          <UserPaymentsTable<ItemsUserPaymentsType> tableProps={tableProps} />
        ) : (
          <NotFoundComponent message={'Нет платежей'} />
        )}
        {/*{paymentsData?.pagesCount ? (*/}
        {/*    <TablePagination*/}
        {/*        pagesCount={paymentsData?.pagesCount}*/}
        {/*        pageIndex={pageIndex}*/}
        {/*        setPageIndex={setPageIndex}*/}
        {/*        pageSize={pageSize}*/}
        {/*        setPageSize={setPageSize}*/}
        {/*    />*/}
        {/*) : null}*/}
      </div>
    </>
  )
}
