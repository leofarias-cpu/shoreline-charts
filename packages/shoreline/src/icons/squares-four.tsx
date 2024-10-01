import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

export const IconSquaresFour = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconSquaresFour(props, ref) {
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
        d="M8.125 3.75H4.375C4.02982 3.75 3.75 4.02982 3.75 4.375V8.125C3.75 8.47018 4.02982 8.75 4.375 8.75H8.125C8.47018 8.75 8.75 8.47018 8.75 8.125V4.375C8.75 4.02982 8.47018 3.75 8.125 3.75Z"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.625 3.75H11.875C11.5298 3.75 11.25 4.02982 11.25 4.375V8.125C11.25 8.47018 11.5298 8.75 11.875 8.75H15.625C15.9702 8.75 16.25 8.47018 16.25 8.125V4.375C16.25 4.02982 15.9702 3.75 15.625 3.75Z"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.125 11.25H4.375C4.02982 11.25 3.75 11.5298 3.75 11.875V15.625C3.75 15.9702 4.02982 16.25 4.375 16.25H8.125C8.47018 16.25 8.75 15.9702 8.75 15.625V11.875C8.75 11.5298 8.47018 11.25 8.125 11.25Z"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.625 11.25H11.875C11.5298 11.25 11.25 11.5298 11.25 11.875V15.625C11.25 15.9702 11.5298 16.25 11.875 16.25H15.625C15.9702 16.25 16.25 15.9702 16.25 15.625V11.875C16.25 11.5298 15.9702 11.25 15.625 11.25Z"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})
