import type { ReactNode } from 'react'
import React from 'react'

import { Stack } from '../stack'
import { Text } from '../components/Text'

import { useFormControlContext } from './context'

export function FormControlMessage(props: FormControlMessageProps) {
  const { helpText, errorText } = props

  const { error } = useFormControlContext()

  const hasError = error && errorText
  const hasMessage = hasError || helpText

  return hasMessage ? (
    <Stack space="$space-0">
      {helpText ? (
        <Text variant="detail" tone="secondary">
          {helpText}
        </Text>
      ) : null}
      {hasError ? (
        <Text variant="detail" tone="critical" role="alert">
          {errorText}
        </Text>
      ) : null}
    </Stack>
  ) : (
    <></>
  )
}

export interface FormControlMessageProps {
  helpText?: ReactNode
  errorText?: ReactNode
}
