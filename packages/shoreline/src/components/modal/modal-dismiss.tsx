import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import { DialogDismiss } from '@ariakit/react'
import { IconX } from '@vtex/shoreline-icons'

import type { IconButtonOptions } from '../icon-button'
import { IconButton } from '../icon-button'

/**
 * Header of the Modal
 * @example
 * ```jsx
 * function Example() {
 *  const [open, setOpen] = React.useState(false)
 *
 *  return (
 *    <>
 *      <Button onClick={() => setOpen(true)}>Open modal</Button>
 *      <Modal
 *        open={open}
 *        onClose={() => {
 *          setOpen(false)
 *        }}
 *      >
 *        <ModalHeader>
 *          <ModalHeading>Title</ModalHeading>
 *          <ModalDismiss />
 *        </ModalHeader>
 *      </Modal>
 *    </>
 *  )
 * }
 * ```
 */
export const ModalDismiss = forwardRef<HTMLButtonElement, ModalDismissProps>(
  function ModalDismiss(props, ref) {
    const { children, size = 'large', ...otherProps } = props

    return (
      <IconButton
        data-sl-modal-dismiss
        variant="tertiary"
        label="close"
        asChild
        size={size}
        {...otherProps}
        ref={ref}
      >
        <DialogDismiss>
          <IconX />
        </DialogDismiss>
      </IconButton>
    )
  }
)

export type ModalDismissOptions = Pick<IconButtonOptions, 'size'>

export type ModalDismissProps = ModalDismissOptions &
  ComponentPropsWithoutRef<'button'>
