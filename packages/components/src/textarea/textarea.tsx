import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import React, { forwardRef } from 'react'
import { useId } from '@vtex/shoreline-utils'

import { Field, FieldLabel } from '../field'
import { Stack } from '../stack'
import { Grid } from '../grid'

export const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
  function Textarea(props, ref) {
    const {
      error = false,
      disabled = false,
      className = '',
      children,
      value = '',
      maxLength,
      label,
      helpText = '',
      errorText = '',
      id: baseId,
      ...htmlProps
    } = props

    const charCount = String(value).length

    const id = baseId ?? useId()

    return (
      <Field ref={ref} className={className} data-sl-textarea>
        {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
        <textarea
          id={id}
          data-sl-textarea-input
          data-error={error}
          data-disabled={disabled}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={error}
          value={value}
          {...htmlProps}
        />
        <Grid templateColumns="1fr auto" data-sl-field-message>
          <Stack space="$space-0">
            {helpText && <p data-sl-field-message-text>{helpText}</p>}
            {error && (
              <p data-sl-field-message-text role="alert">
                {errorText}
              </p>
            )}
          </Stack>
          {maxLength && (
            <div data-sl-textarea-char-counter>
              {charCount} / {maxLength}
            </div>
          )}
        </Grid>
      </Field>
    )
  }
)

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  error?: boolean
  label?: ReactNode
  helpText?: ReactNode
  errorText?: ReactNode
}
