import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconReceipt = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconReceipt(props, ref) {
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
        d="M5.5 8.125C5.5 7.71079 5.83579 7.375 6.25 7.375H13.75C14.1642 7.375 14.5 7.71079 14.5 8.125C14.5 8.53921 14.1642 8.875 13.75 8.875H6.25C5.83579 8.875 5.5 8.53921 5.5 8.125Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10.625C5.5 10.2108 5.83579 9.875 6.25 9.875H13.75C14.1642 9.875 14.5 10.2108 14.5 10.625C14.5 11.0392 14.1642 11.375 13.75 11.375H6.25C5.83579 11.375 5.5 11.0392 5.5 10.625Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 4.5V15.0365L4.66459 14.3292C4.87574 14.2236 5.12426 14.2236 5.33541 14.3292L7.5 15.4115L9.66459 14.3292C9.87574 14.2236 10.1243 14.2236 10.3354 14.3292L12.5 15.4115L14.6646 14.3292C14.8757 14.2236 15.1243 14.2236 15.3354 14.3292L16.75 15.0365V4.5H3.25ZM2.15273 3.40273C2.41059 3.14487 2.76033 3 3.125 3H16.875C17.2397 3 17.5894 3.14487 17.8473 3.40273C18.1051 3.66059 18.25 4.01033 18.25 4.375V16.25C18.25 16.5099 18.1154 16.7513 17.8943 16.888C17.6732 17.0246 17.3971 17.0371 17.1646 16.9208L15 15.8385L12.8354 16.9208C12.6243 17.0264 12.3757 17.0264 12.1646 16.9208L10 15.8385L7.83541 16.9208C7.62426 17.0264 7.37574 17.0264 7.16459 16.9208L5 15.8385L2.83541 16.9208C2.60292 17.0371 2.32681 17.0246 2.1057 16.888C1.88459 16.7513 1.75 16.5099 1.75 16.25V4.375C1.75 4.01033 1.89487 3.66059 2.15273 3.40273Z"
        fill="currentColor"
      />
    </svg>
  )
})
