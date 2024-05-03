import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import { MenuItem as BaseMenuItem } from '@ariakit/react'

/**
 * Option within a menu popover box
 */
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(props, ref) {
    const {
      children,
      asChild = false,
      critical = false,
      disabled = false,
      ...otherProps
    } = props

    return (
      <BaseMenuItem
        data-sl-menu-item
        data-critical={critical}
        data-disabled={disabled}
        ref={ref}
        render={asChild && (children as any)}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </BaseMenuItem>
    )
  }
)

export interface MenuItemOptions {
  /**
   * Children composition
   * @default false
   */
  asChild?: boolean
  /**
   * Wether is critical
   * @default false
   */
  critical?: boolean
  /**
   * Wether is disabled
   * @default false
   */
  disabled?: boolean
}

export type MenuItemProps = MenuItemOptions & ComponentPropsWithoutRef<'div'>
