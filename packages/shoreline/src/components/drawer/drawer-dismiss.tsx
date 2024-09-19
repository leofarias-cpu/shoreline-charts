import { Drawer as Vaul } from 'vaul'

import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { IconX } from '../../icons'

import type { IconButtonOptions } from '../icon-button'
import { IconButton } from '../icon-button'

/**
 * Drawer's dismiss action
 * @example
 * <DrawerProvider>
 *  <DrawerPopover>
 *    <DrawerHeader>
 *      <DrawerHeading>Heading</DrawerHeading>
 *      <DrawerDismiss />
 *    </DrawerHeader>
 *  </DrawerPopover>
 * </DrawerProvider>
 */
export const DrawerDismiss = forwardRef<HTMLButtonElement, DrawerDismissProps>(
  function DrawerDismiss(props, ref) {
    const { children, size = 'large', ...otherProps } = props

    return (
      <IconButton
        data-sl-modal-dismiss
        variant="tertiary"
        label="close"
        asChild
        size={size}
        ref={ref}
        {...otherProps}
      >
        <Vaul.Close>
          <IconX />
        </Vaul.Close>
      </IconButton>
    )
  }
)

export type DrawerDismissOptions = Pick<IconButtonOptions, 'size'>

export type DrawerDismissProps = DrawerDismissOptions &
  ComponentProps<typeof Vaul.Close>
