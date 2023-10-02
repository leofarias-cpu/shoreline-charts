import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconKey = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconKey(props, ref) {
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
        d="M12.9903 2.6508C11.8728 2.53762 10.7505 2.81383 9.81309 3.43272C8.87572 4.05161 8.18082 4.97521 7.84589 6.04736C7.51096 7.11951 7.55654 8.27443 7.97494 9.31684C8.08681 9.59557 8.02161 9.91416 7.80924 10.1265L3.25 14.6858V16.7501H4.875V15.6251C4.875 15.2109 5.21079 14.8751 5.625 14.8751H6.75V13.7501C6.75 13.3359 7.08579 13.0001 7.5 13.0001H9.06434L9.87358 12.1909C10.0859 11.9785 10.4045 11.9133 10.6833 12.0252C11.7257 12.4436 12.8806 12.4892 13.9528 12.1542C15.0249 11.8193 15.9485 11.1244 16.5674 10.187C17.1863 9.24966 17.4625 8.12733 17.3493 7.00979C17.2361 5.89226 16.7405 4.8481 15.9463 4.05384C15.152 3.25958 14.1078 2.76397 12.9903 2.6508ZM8.98661 2.18094C10.2124 1.37162 11.6801 1.01043 13.1415 1.15843C14.6028 1.30643 15.9683 1.95454 17.0069 2.99318C18.0456 4.03182 18.6937 5.39727 18.8417 6.85866C18.9897 8.32005 18.6285 9.78771 17.8192 11.0135C17.0099 12.2393 15.8021 13.148 14.4 13.586C13.1589 13.9737 11.833 13.9715 10.5994 13.5864L9.90533 14.2804C9.76468 14.4211 9.57391 14.5001 9.375 14.5001H8.25V15.6251C8.25 16.0393 7.91421 16.3751 7.5 16.3751H6.375V17.5001C6.375 17.9143 6.03921 18.2501 5.625 18.2501H2.5C2.08579 18.2501 1.75 17.9143 1.75 17.5001V14.3751C1.75 14.1762 1.82902 13.9854 1.96967 13.8448L6.41375 9.4007C6.02862 8.1671 6.02642 6.84119 6.41413 5.60009C6.85211 4.19804 7.76082 2.99026 8.98661 2.18094Z"
        fill="currentColor"
      />
      <path
        d="M14.0625 6.71875C14.494 6.71875 14.8438 6.36897 14.8438 5.9375C14.8438 5.50603 14.494 5.15625 14.0625 5.15625C13.631 5.15625 13.2812 5.50603 13.2812 5.9375C13.2812 6.36897 13.631 6.71875 14.0625 6.71875Z"
        fill="currentColor"
      />
    </svg>
  )
})
