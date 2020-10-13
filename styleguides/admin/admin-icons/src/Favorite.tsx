import React, { Ref } from 'react'
import { Icon, IconProps } from '@vtex-components/icon'
import { forwardRef } from '@vtex-components/utils'

export const IconFavorite = forwardRef(
  (props: IconProps, ref: Ref<SVGSVGElement>) => (
    <Icon {...props} ref={ref}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
)
