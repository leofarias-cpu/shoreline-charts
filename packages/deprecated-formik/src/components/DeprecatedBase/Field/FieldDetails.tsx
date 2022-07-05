import type { ComponentPropsWithRef } from 'react'
import React from 'react'
import { jsx, Text } from '@vtex/admin-ui'
import { Role } from 'reakit/Role'

export const FieldDetails = jsx(Role)(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: '',
    paddingTop: 1,
  },
  {
    options: ['message', 'charLimit', 'value', 'tone'],
    useOptions(options: FieldDetailsOptions, props) {
      const { message, tone, charLimit, value } = options

      return {
        ...props,
        children: (
          <>
            {message ? (
              <Text
                variant="detail"
                tone={tone === 'critical' ? 'critical' : 'secondary'}
              >
                {message}
              </Text>
            ) : (
              <div>{/** spacer element */}</div>
            )}
            {!!charLimit && (
              <Text variant="detail" tone="secondary">
                {`${value?.toString().length}/${charLimit}`}
              </Text>
            )}
          </>
        ),
      }
    },
  }
)

export interface FieldDetailsOptions {
  message?: React.ReactNode
  charLimit?: number
  value?: string | number | readonly string[]
  tone?: 'neutral' | 'critical'
}

export type FieldDetailsProps = ComponentPropsWithRef<typeof FieldDetails>
