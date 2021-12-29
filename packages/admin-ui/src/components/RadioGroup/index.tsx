import type { ReactNode } from 'react'
import React, { Fragment } from 'react'
import type { RadioGroupProps as ReakitRadioGroupProps } from 'reakit/Radio'
import { RadioGroup as ReakitRadioGroup } from 'reakit/Radio'
import type { StyleObject } from '@vtex/admin-ui-core'
import { tag } from '@vtex/admin-ui-react'
import { get } from '@vtex/admin-ui-util'

import type { SystemComponent } from '../../types'
import { Label } from '../Label'

export function RadioGroup(props: RadioGroupProps) {
  const {
    label,
    orientation = 'horizontal',
    size = 'regular',
    csx,
    id,
    state,
    children,
    ...htmlProps
  } = props

  return (
    <Fragment>
      {label && (
        <Label
          csx={{
            text: '$detail',
            color: '$secondary',
          }}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
      <tag.div
        as={ReakitRadioGroup}
        csx={{
          text: '$body',
          marginTop: 3,
          marginBottom: 6,
          display: 'flex',
          alignItems: 'flex-start',
          '& > label > input': {
            marginRight: 2,
            marginLeft: 0,
          },
          '& > label': {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          },
          ...get<Record<string, StyleObject>, string, object>(
            {
              'horizontal-regular': {
                flexDirection: 'row',
                '& label:not(:last-child)': {
                  marginRight: 6,
                },
              },
              'vertical-regular': {
                flexDirection: 'column',
                '& label:not(:last-child)': {
                  marginBottom: 4,
                },
              },
              'horizontal-small': {
                flexDirection: 'row',
                '& label:not(:last-child)': {
                  marginRight: 5,
                },
              },
              'vertical-small': {
                flexDirection: 'column',
                '& label:not(:last-child)': {
                  marginBottom: 4,
                },
              },
            },
            `${orientation}-${size}`,
            {}
          ),
          ...csx,
        }}
        orientation={orientation}
        id={id}
        {...state}
        {...htmlProps}
      >
        {children}
      </tag.div>
    </Fragment>
  )
}

export interface RadioGroupProps extends SystemComponent {
  label?: string
  size?: 'regular' | 'small'
  orientation?: 'horizontal' | 'vertical'
  state: ReakitRadioGroupProps
  children?: ReactNode
  id?: string
}
