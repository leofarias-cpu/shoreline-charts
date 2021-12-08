import type { CheckboxProps as ReakitProps } from 'reakit'
import { Checkbox as ReakitCheckbox } from 'reakit'
import { jsx } from '@vtex/admin-ui-react'

import * as style from './Toggle.style'
import type { CheckboxStateReturn } from '../Checkbox'
import { useCheckboxState } from '../Checkbox'
import type { ComponentPropsWithRef } from 'react'

export const Toggle = jsx(ReakitCheckbox)(
  {
    ...style.baseline,
    ':after': style.checkmark,
    '&:checked': style.checked,
    variants: {
      size: {
        regular: style.regular,
        small: style.small,
      },
    },
  },
  {
    options: ['state'],
    useOptions: (options: ToggleOptions, props) => {
      const { state } = options

      return { role: 'switch', ...props, ...state }
    },
  }
)

Toggle.defaultProps = {
  size: 'regular',
}

type State = Pick<ReakitProps, 'state' | 'setState'>

export interface ToggleOptions {
  state?: State
}

export type ToggleProps = ComponentPropsWithRef<typeof Toggle> & ToggleOptions

export type ToggleStateReturn = CheckboxStateReturn

export { useCheckboxState as useToggleState }
