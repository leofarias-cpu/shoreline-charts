import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import { cssVar } from '@vtex/shoreline-utils'
import { isStricTrue } from '../utils/is-strict-true'
import { style } from '../utils/style'

const defaultBleed = '0rem'

export const Bleed = forwardRef<HTMLDivElement, BleedProps>(function Bleed(
  props,
  ref
) {
  const {
    top = defaultBleed,
    left = defaultBleed,
    bottom = defaultBleed,
    right = defaultBleed,
    horizontal = defaultBleed,
    vertical = defaultBleed,
    children,
    ...restProps
  } = props

  return (
    <div
      data-sl-bleed
      ref={ref}
      style={style({
        '--sl-bleed-top': cssVar({ token: String(top) }),
        '--sl-bleed-right': cssVar({ token: String(right) }),
        '--sl-bleed-bottom': cssVar({ token: String(bottom) }),
        '--sl-bleed-left': cssVar({ token: String(left) }),
        '--sl-bleed-horizontal': cssVar({ token: String(horizontal) }),
        '--sl-bleed-vertical': cssVar({ token: String(vertical) }),
      })}
      {...restProps}
    >
      <div
        data-sl-bleed-content
        data-top={isStricTrue(top)}
        data-right={isStricTrue(right)}
        data-bottom={isStricTrue(bottom)}
        data-left={isStricTrue(left)}
        data-horizontal={isStricTrue(horizontal)}
        data-vertical={isStricTrue(vertical)}
      >
        {children}
      </div>
    </div>
  )
})

export interface BleedProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Top bleed
   * @default '$space-0'
   */
  top?: string | boolean
  /**
   * Bottom bleed
   * @default '$space-0'
   */
  bottom?: string | boolean
  /**
   * Left bleed
   * @default '$space-0'
   */
  left?: string | boolean
  /**
   * Right bleed
   * @default '$space-0'
   */
  right?: string | boolean
  /**
   * Horizontal bleed
   * @default '$space-0'
   */
  horizontal?: string | boolean
  /**
   * Vertical bleed
   * @default '$space-0'
   */
  vertical?: string | boolean
}
