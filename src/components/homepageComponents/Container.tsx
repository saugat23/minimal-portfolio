'use client'

import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Page({ children, className }: Props) {
  return (
    <>
      <div className={twMerge('max-w-[1400px] mx-auto w-full', className)}>
        {children}
      </div>
    </>
  )
}
