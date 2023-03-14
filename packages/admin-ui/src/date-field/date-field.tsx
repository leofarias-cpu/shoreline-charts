import type { ReactNode } from 'react'
import React from 'react'
import { createComponent, useElement } from '@vtex/admin-ui-react'

import { Label } from '../label'
import { Flex } from '../flex'
import * as style from './date-field.style'
import { SegmentList, Segment } from '../segment'
import type { SegmentStateReturn } from '../segment'

export const DateField = createComponent<'div', DateFieldOptions>((props) => {
  const {
    state,
    label,
    disclosure,
    tone = 'neutral',
    disabled = false,
    ...htmlProps
  } = props

  return useElement('div', {
    ...htmlProps,
    baseStyle: {
      ...style.dateField,
      ...style.variants({
        tone,
        disabled,
      }),
    },
    children: (
      <>
        <Flex direction="column">
          <Label className={style.labelTheme}>{label}</Label>
          <SegmentList state={state}>
            {state.segments.map((segment, index) => (
              <Segment
                isDisabled={disabled}
                key={`segment-element-${index}`}
                segment={segment}
                state={state}
              />
            ))}
          </SegmentList>
        </Flex>
        {disclosure}
      </>
    ),
  })
})

export interface DateFieldOptions {
  state: SegmentStateReturn
  label: string
  disclosure?: ReactNode
  tone?: 'neutral' | 'critical'
  disabled?: boolean
}
