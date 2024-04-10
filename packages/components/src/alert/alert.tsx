import {
  IconCheckCircleFill,
  IconInfoFill,
  IconWarningCircleFill,
  IconX,
  IconXCircleFill,
} from '@vtex/shoreline-icons'
import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react'
import React, { forwardRef } from 'react'

import { IconButton } from '../icon-button'

/**
 * Alert indicators allow users to view semantic messages that are prominent and can be dismissable.
 * @playground
 * @example
 * <Alert onDismiss={() => {}}>
 *  <Text variant="body">Message</Text>
 *  <Button variant="tertiary">Action</Button>
 * </Alert>
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  const {
    variant = 'informational',
    children,
    onDismiss,
    ...otherProps
  } = props

  const icon = getIcon(variant)

  return (
    <div data-sl-alert data-variant={variant} ref={ref} {...otherProps}>
      <div data-sl-alert-icon-container>{icon}</div>
      <div data-sl-alert-container>{children}</div>
      <div data-sl-alert-dismiss-container>
        {onDismiss && (
          <IconButton onClick={onDismiss} label="dismiss" variant="tertiary">
            <IconX />
          </IconButton>
        )}
      </div>
    </div>
  )
})

function getIcon(variant: AlertVariant = 'informational') {
  switch (variant) {
    case 'informational': {
      return <IconInfoFill />
    }

    case 'success': {
      return <IconCheckCircleFill />
    }

    case 'critical': {
      return <IconXCircleFill />
    }

    case 'warning': {
      return <IconWarningCircleFill />
    }
  }
}

export type AlertVariant = 'informational' | 'success' | 'critical' | 'warning'

export interface AlertOptions {
  /**
   * Variants of the alert, one of: informational, success, critical, warning.
   * @default 'informational'
   */
  variant?: AlertVariant
  /**
   * Callback fired when the alert is dismissed.
   */
  onDismiss?: MouseEventHandler<HTMLButtonElement>
}

export type AlertProps = AlertOptions & ComponentPropsWithoutRef<'div'>
