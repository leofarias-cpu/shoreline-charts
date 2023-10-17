import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconSquaresFour = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconSquaresFour(props, ref) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 4.5V8H8V4.5H4.5ZM3 4.375C3 3.61561 3.61561 3 4.375 3H8.125C8.88439 3 9.5 3.61561 9.5 4.375V8.125C9.5 8.88439 8.88439 9.5 8.125 9.5H4.375C3.61561 9.5 3 8.88439 3 8.125V4.375Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.5V8H15.5V4.5H12ZM10.5 4.375C10.5 3.61561 11.1156 3 11.875 3H15.625C16.3844 3 17 3.61561 17 4.375V8.125C17 8.88439 16.3844 9.5 15.625 9.5H11.875C11.1156 9.5 10.5 8.88439 10.5 8.125V4.375Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 12V15.5H8V12H4.5ZM3 11.875C3 11.1156 3.61561 10.5 4.375 10.5H8.125C8.88439 10.5 9.5 11.1156 9.5 11.875V15.625C9.5 16.3844 8.88439 17 8.125 17H4.375C3.61561 17 3 16.3844 3 15.625V11.875Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12V15.5H15.5V12H12ZM10.5 11.875C10.5 11.1156 11.1156 10.5 11.875 10.5H15.625C16.3844 10.5 17 11.1156 17 11.875V15.625C17 16.3844 16.3844 17 15.625 17H11.875C11.1156 17 10.5 16.3844 10.5 15.625V11.875Z"
        fill="currentColor"
      />
    </svg>
  )
})
