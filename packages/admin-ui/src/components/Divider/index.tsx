import { jsx } from '@vtex/onda-react'
import type { ComponentPropsWithRef } from 'react'
import { Separator as ReakitSeparator } from 'reakit'

/**
 * It renders an hr element and grants accessibility as described on the [WAI-ARIA Separator Role](https://www.w3.org/TR/wai-aria-1.1/#separator).
 */
export const Divider = jsx(ReakitSeparator)({
  text: 'headline',
  border: 'solid',
  borderWidth: 1,
  borderColor: 'mid.tertiary',
  margin: 0,
  variants: {
    orientation: {
      horizontal: {
        borderBottom: 0,
      },
      vertical: {
        borderLeft: 0,
        height: 'auto',
      },
    },
  },
})

Divider.defaultProps = {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  orientation: 'horizontal',
}

export type DividerProps = ComponentPropsWithRef<typeof Divider>
