import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconCaretUpDownSmall = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconCaretUpDownSmall(props, ref) {
  return (
    <svg
      data-sl-icon-small
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.46967 10.4697C4.76256 10.1768 5.23744 10.1768 5.53033 10.4697L8 12.9393L10.4697 10.4697C10.7626 10.1768 11.2374 10.1768 11.5303 10.4697C11.8232 10.7626 11.8232 11.2374 11.5303 11.5303L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303L4.46967 11.5303C4.17678 11.2374 4.17678 10.7626 4.46967 10.4697Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.46967 1.46967C7.76256 1.17678 8.23744 1.17678 8.53033 1.46967L11.5303 4.46967C11.8232 4.76256 11.8232 5.23744 11.5303 5.53033C11.2374 5.82322 10.7626 5.82322 10.4697 5.53033L8 3.06066L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967L7.46967 1.46967Z"
        fill="currentColor"
      />
    </svg>
  )
})
