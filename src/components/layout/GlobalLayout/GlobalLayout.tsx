import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { LayoutWithHeader } from '@/components/layout/LayoutWithHeader/LayoutWithHeader'
import { Modals } from '@/components/modals'
import { Sidebar } from '@/components/sidebar/Sidebar'

export const GlobalLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutWithHeader>
      <div className="xsm:flex grid grid-cols-[220px_1fr] sm:grid-cols-[120px_1fr] min-h-[calc(100vh-60px)]">
        <Sidebar />

        <div className="xsm:pl-4 xsm:pr-4 xsm:pt-6 sm:pl-8 sm:pr-8 sm:pt-10 md:pl-12 md:pr-12 md:pt-14  pr-16 pb-9  pt-9 w-full flex-1 pl-6 xsm:flex-1">
          {children}
        </div>
      </div>

      <Modals />
    </LayoutWithHeader>
  )
}
export const getGlobalLayout = (page: ReactElement) => {
  return <GlobalLayout>{page}</GlobalLayout>
}
