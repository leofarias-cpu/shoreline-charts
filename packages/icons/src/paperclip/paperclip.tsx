import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconPaperclip = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconPaperclip(props, ref) {
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
        d="M12.4999 6.25004L5.9913 12.8664C5.76258 13.102 5.63576 13.4182 5.63823 13.7465C5.6407 14.0749 5.77227 14.3891 6.00451 14.6212C6.23674 14.8533 6.55099 14.9848 6.87934 14.9871C7.20769 14.9894 7.52376 14.8625 7.75927 14.6336L15.5179 6.76801C15.9868 6.29912 16.2502 5.66316 16.2502 5.00004C16.2502 4.33692 15.9868 3.70097 15.5179 3.23207C15.049 2.76318 14.413 2.49976 13.7499 2.49976C13.0868 2.49976 12.4508 2.76318 11.9819 3.23207L4.22333 11.0985C3.52953 11.8037 3.14249 12.7545 3.14652 13.7437C3.15054 14.733 3.54531 15.6806 4.24483 16.3801C4.94435 17.0796 5.89195 17.4744 6.88121 17.4784C7.87048 17.4824 8.82126 17.0954 9.52645 16.4016L15.9374 10"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})
