import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import { Radio as BaseRadio } from '@ariakit/react'
import { Field, FieldLabel } from '../field'

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref
) {
  const { error, disabled, label, value, ...otherProps } = props

  return (
    <Field variant="control" data-sl-radio-field>
      <FieldLabel data-disabled={disabled}>{label}</FieldLabel>
      <BaseRadio
        data-sl-radio
        value={value}
        data-error={error || 'false'}
        data-disabled={disabled}
        disabled={disabled}
        ref={ref}
        {...otherProps}
      />
    </Field>
  )
})

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean
  value: string
  label: string
}
