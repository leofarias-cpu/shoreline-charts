import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import { Compose } from '@vtex/shoreline-primitives'

/**
 * Centralizes its content
 * @example
 * <Center>
 *  <Text>In the absolute center</Text>
 * </Center>
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center(
  props,
  ref
) {
  const { asChild = false, ...domProps } = props

  const Comp = asChild ? Compose : 'div'

  return <Comp data-sl-center ref={ref} {...domProps} />
})

export interface CenterOptions {
  /**
   * Children composition
   * @default false
   */
  asChild?: boolean
}

export type CenterProps = CenterOptions & ComponentPropsWithoutRef<'div'>
