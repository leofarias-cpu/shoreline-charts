import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import {
  Modal,
  ModalContent,
  ModalDismiss,
  ModalFooter,
  ModalHeader,
  ModalHeading,
} from '../modal'
import { Button } from '../button'
import { createMessageHook } from '@vtex/shoreline-primitives'
import { messages } from './messages'
import './confirmation-modal.css'

const useMessage = createMessageHook(messages)

/**
 * Confirmation Modal containers allow merchants to confirm an action through an overlay window that opens on top of the current page.
 *
 * @example
 *  const [open, setOpen] = useState(false)
 *
 *  const handleClose = () => {
 *   setOpen(false)
 *  }
 *
 *  <Button onClick={() => setOpen((open) => !open)}>
 *    Open confirmation modal
 *  </Button>
 *  <ConfirmationModal
 *    open={open}
 *    onClose={handleClose}
 *    onConfirm={handleClose}
 *    onCancel={handleClose}
 *  >
 *    <Text>Hello world</Text>
 *  </ConfirmationModal>
 */
export const ConfirmationModal = forwardRef<
  HTMLDivElement,
  ConfirmationModalProps
>(function ConfirmationModal(props, ref) {
  const {
    children,
    open,
    onClose,
    onConfirm,
    onCancel,
    locale = 'en-US',
    messages,
    ...otherProps
  } = props

  const getMessage = useMessage(messages)

  return (
    <Modal
      data-sl-confirmation-modal
      open={open}
      onClose={onClose}
      ref={ref}
      {...otherProps}
      size="small"
    >
      {getMessage('title') ? (
        <ModalHeader>
          <ModalHeading>{getMessage('title')}</ModalHeading>
          <ModalDismiss />
        </ModalHeader>
      ) : null}
      <ModalContent>{children}</ModalContent>
      <ModalFooter data-sl-confirmation-modal-footer>
        <Button onClick={onCancel} size="large">
          {getMessage('cancel')}
        </Button>
        <Button onClick={onConfirm} size="large" variant="primary">
          {getMessage('confirm')}
        </Button>
      </ModalFooter>
    </Modal>
  )
})

export interface ConfirmationModalProps
  extends ComponentPropsWithoutRef<'div'> {
  /**
   * Callback fired when the backdrop or close button is clicked.
   */
  onClose?: (event: Event) => void
  /**
   * Callback fired when the ok button is clicked.
   */
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * Callback fired when the cancel button is clicked.
   */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * Whether the modal is open or not.
   * @default false
   */
  open?: boolean
  /**
   * The BCP47 language code for the locale.
   * @link https://www.ietf.org/rfc/bcp/bcp47.txt
   * @default en-US
   */
  locale?: string
  messages?: {
    title?: string
    confirm?: string
    cancel?: string
  }
}
