import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconBell = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconBell(props, ref) {
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
        d="M7.5 15C7.5 15.663 7.76339 16.2989 8.23223 16.7678C8.70107 17.2366 9.33696 17.5 10 17.5C10.663 17.5 11.2989 17.2366 11.7678 16.7678C12.2366 16.2989 12.5 15.663 12.5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.37515 8.125C4.37515 6.63316 4.96778 5.20242 6.02267 4.14752C7.07756 3.09263 8.5083 2.5 10.0001 2.5C11.492 2.5 12.9227 3.09263 13.9776 4.14752C15.0325 5.20242 15.6251 6.63316 15.6251 8.125C15.6251 10.9234 16.2736 13.1719 16.7892 14.0625C16.844 14.1574 16.8728 14.2649 16.8729 14.3745C16.873 14.484 16.8444 14.5916 16.7898 14.6865C16.7352 14.7815 16.6566 14.8604 16.5619 14.9154C16.4672 14.9705 16.3597 14.9996 16.2501 15H3.75015C3.64076 14.9993 3.53345 14.97 3.43896 14.9149C3.34448 14.8597 3.26611 14.7808 3.2117 14.6859C3.15729 14.591 3.12874 14.4835 3.12891 14.3741C3.12907 14.2647 3.15795 14.1572 3.21265 14.0625C3.72749 13.1719 4.37515 10.9227 4.37515 8.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})
