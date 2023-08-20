import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { LayoutWithHeader } from '@/components/layout/LayoutWithHeader/LayoutWithHeader'
import { Sidebar } from '@/components/sidebar/Sidebar'

export const GlobalLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutWithHeader>
      <div className="flex min-h-[calc(100vh-60px)]">
        <Sidebar />
        <div className="xsm:pl-4 xsm:pr-4 pr-16 xsm:pt-6 pt-9 w-full flex-1 pl-6 xsm:flex-1">
          {children}
        </div>
      </div>
    </LayoutWithHeader>
  )
}

export const getGlobalLayout = (page: ReactElement) => {
  return <GlobalLayout>{page}</GlobalLayout>
}
