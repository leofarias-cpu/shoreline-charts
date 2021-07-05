import React, { ReactNode } from 'react'
import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from 'reakit/Button'

import { StyleProp, useSystem, jsxs, createComponent } from '@vtex/admin-core'
import { Variant, Size } from './types'
import { SystemComponentProps } from '../../types'
import { Primitive, Box, Flex } from '@vtex/admin-primitives'
import { Spinner } from '../Spinner'

/**
 * Component that handles all Button variants of the DS.
 * It renders a button jsx element by default
 * @example
 * ```jsx
 * import { Button, ButtonProps } from `@vtex/admin-ui`
 * <Button>Default Button</Button>
 * ```
 */
export const Button = createComponent(ReakitButton, useButton)

export function useButton(props: ButtonProps): ReakitButtonProps {
  const {
    variant = 'primary',
    size = 'regular',
    iconPosition = 'start',
    icon,
    children: prevChildren,
    csx,
    loading = false,
    ...compoundProps
  } = props

  const { resolvedSize, containerStyles } = useButtonSize({
    size,
    icon,
    iconPosition,
    children: prevChildren,
  })
  const { cn } = useSystem()
  const className = cn({
    themeKey: `components.button.${variant}-${resolvedSize}`,
    ...csx,
  })

  return {
    className,
    children: jsxs(
      Primitive,
      {
        csx: {
          display: 'flex',
          height: 'full',
          width: 'full',
          margin: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      <Flex
        align="center"
        justify="center"
        csx={{ visibility: loading ? 'hidden' : 'visible', ...containerStyles }}
      >
        {icon} {prevChildren}
      </Flex>,
      <Box
        csx={{
          position: 'absolute',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          visibility: loading ? 'visible' : 'hidden',
        }}
      >
        <Spinner color="currentColor" />
      </Box>
    ),
    ...compoundProps,
  }
}

function useButtonSize({
  size,
  icon,
  iconPosition,
  children,
}: Pick<ButtonProps, 'size' | 'icon' | 'iconPosition' | 'children'>) {
  const iconStart = !!icon && iconPosition === 'start'
  const iconEnd = !!icon && iconPosition === 'end'
  const iconOnly = !!icon && !children

  const containerStyles: StyleProp = {
    flexDirection: iconEnd ? 'row-reverse' : 'row',
  }

  const resolvedSize = `${size}${
    iconOnly ? `-icon` : iconStart || iconEnd ? `-icon-${iconPosition}` : ''
  }`

  return {
    resolvedSize,
    containerStyles,
  }
}

export interface ButtonProps extends SystemComponentProps<ReakitButtonProps> {
  /**
   *  Whether is loading
   * @default false
   */
  loading?: boolean
  /** Size of the button
   * @default regular
   */
  size?: Size
  /** Button variant
   * @default primary
   */
  variant?: Variant
  /**
   * Icon of the button
   */
  icon?: ReactNode
  /**
   * Position of the icon
   * @default start
   */
  iconPosition?: 'start' | 'end'
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: ButtonProps) => React.ReactNode)
}
