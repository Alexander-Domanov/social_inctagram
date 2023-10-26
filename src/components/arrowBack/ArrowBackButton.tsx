import React from 'react'

import { ArrowBack } from '@/components/arrowBack/ArrowBack'
import Link from '@/ui/link/Link'

interface IArrowBackButton {
  title: string
  href: string
}

export const ArrowBackButton = ({ title, href }: IArrowBackButton) => {
  return (
    <>
      <Link
        href={href}
        title={title}
        styleText="xsm:hidden"
        className="xsm:pt-[18px] xsm: font-normal text-sm leading-6 absolute pt-6 pl-[64px]"
      >
        <ArrowBack />
      </Link>
    </>
  )
}
