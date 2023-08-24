import React from 'react'

import { cn } from '@/common/utils/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-slate-200 animate-pulse', className)} {...props} />
}

export { Skeleton }
