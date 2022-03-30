import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StyleProp } from '@vtex/admin-ui-core'

import { IconCalendarBlank } from '@vtex/phosphor-icons'
import { ariaAttr } from '@vtex/admin-ui-util'

import { Text } from '../components/Text'
import { DateField } from '../date-field'
import { Center } from '../center'
import { Picker, PickerDisclosure } from '../picker'
import type { DatePickerStateReturn } from './date-picker.state'
import * as style from './date-picker.style'

export const DatePickerField = forwardRef(
  (props: DatePickerFieldProps, ref: Ref<HTMLDivElement>) => {
    const {
      state: { required, invalid, pickerState, dateFieldState, disabled },
      label,
      helperText,
      criticalText,
    } = props

    const showCriticalMessage = invalid && criticalText

    return (
      <>
        <Picker
          ref={ref}
          aria-invalid={ariaAttr(invalid)}
          aria-required={ariaAttr(required)}
          state={pickerState}
        >
          <DateField
            label={label}
            state={dateFieldState}
            invalid={invalid}
            disabled={disabled}
            disclosure={
              <PickerDisclosure state={pickerState} csx={style.disclosure}>
                <Center
                  csx={{
                    color: disabled ? '$disabled' : '$action.neutral.tertiary',
                  }}
                >
                  <IconCalendarBlank />
                </Center>
              </PickerDisclosure>
            }
          />
          {helperText && !showCriticalMessage && (
            <Text variant="detail">{helperText}</Text>
          )}
          {showCriticalMessage && (
            <Text variant="detail" tone="critical">
              {criticalText}
            </Text>
          )}
        </Picker>
      </>
    )
  }
)

DatePickerField.displayName = 'DatePickerField'

export interface DatePickerFieldProps {
  state: DatePickerStateReturn
  label: string
  csx?: StyleProp
  helperText?: string
  criticalText?: string
}
