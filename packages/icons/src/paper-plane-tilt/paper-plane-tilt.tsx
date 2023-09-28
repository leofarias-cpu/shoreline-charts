import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconPaperPlaneTilt = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconPaperPlaneTilt(props, ref) {
  return (
    <svg
      data-sl-icon
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
        d="M16.5013 1.80228C16.7365 1.736 16.9852 1.73359 17.2216 1.79532C17.458 1.85704 17.6738 1.98067 17.8466 2.15346C18.0193 2.32626 18.143 2.54198 18.2047 2.77842C18.2664 3.01486 18.264 3.26348 18.1977 3.49868L18.1936 3.51291L13.6468 18.5057C13.5699 18.7718 13.4145 19.0085 13.2008 19.1847C12.9848 19.3628 12.7196 19.4708 12.4406 19.4941C12.1617 19.5175 11.8822 19.4551 11.6396 19.3154C11.3971 19.1757 11.2029 18.9653 11.0831 18.7122L7.93448 12.0648L1.2862 8.91689C1.28618 8.91688 1.28616 8.91687 1.28614 8.91686C1.03315 8.79708 0.822732 8.60294 0.683021 8.36038C0.5433 8.1178 0.480951 7.83835 0.504307 7.55939C0.527663 7.28042 0.635612 7.01523 0.813724 6.79926C0.989998 6.58552 1.22668 6.43007 1.49272 6.35317L16.4871 1.80643L16.5013 1.80228ZM9.40189 11.6587L12.3002 17.7776L16.6866 3.31338L2.2209 7.69981L8.34144 10.5978L11.9696 6.96967C12.2625 6.67678 12.7373 6.67678 13.0302 6.96967C13.3231 7.26256 13.3231 7.73744 13.0302 8.03033L9.40189 11.6587Z"
        fill="currentColor"
      />
    </svg>
  )
})
