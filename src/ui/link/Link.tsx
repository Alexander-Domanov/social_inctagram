import React from 'react'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ILink {
  title: string
  href: string
  className?: string
  styleText?: string
  children?: React.ReactNode
}

export default function ({ title, href, className, styleText, children }: ILink) {
  return (
    <Link href={href} className={twMerge('flex flex-row-reverse justify-end gap-3', className)}>
      <span className={styleText}>{title}</span>
      {children}
    </Link>
  )
}
