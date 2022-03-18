import { createComponent, useElement } from '@vtex/admin-ui-react'
import { withUnit } from '@vtex/admin-ui-core'
import type { HSpaceTokens, VSpaceTokens, CSSUnit } from '@vtex/admin-ui-core'

export const Inline = createComponent<'div', InlineProps>((props) => {
  const { vSpace = '$s', hSpace = '$s', unit = 'rem', ...htmlProps } = props

  return useElement('div', {
    ...htmlProps,
    baseStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      '> *': {
        marginLeft: withUnit(hSpace, unit),
        marginTop: withUnit(vSpace, unit),
      },
    },
  })
})

export interface InlineProps {
  /**
   * Vertical space
   * @default '$s'
   */
  vSpace?: VSpaceTokens | number
  /**
   * Horizontal space
   * @default '$s'
   */
  hSpace?: HSpaceTokens | number
  /**
   * Unit used in case of a number value
   * @default 'rem'
   */
  unit?: CSSUnit
}
