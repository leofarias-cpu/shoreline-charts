import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconClock = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconClock(props, ref) {
  return (
    <svg
      data-sl-icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
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
        d="M10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C13.7279 16.75 16.75 13.7279 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.875C10.4142 4.875 10.75 5.21079 10.75 5.625V9.25H14.375C14.7892 9.25 15.125 9.58579 15.125 10C15.125 10.4142 14.7892 10.75 14.375 10.75H10C9.58579 10.75 9.25 10.4142 9.25 10V5.625C9.25 5.21079 9.58579 4.875 10 4.875Z"
        fill="currentColor"
      />
    </svg>
  )
})
