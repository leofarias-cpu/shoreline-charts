import type { Dispatch, SetStateAction } from 'react'
import React, { forwardRef } from 'react'
import { useDateField } from '@react-aria/datepicker'
import { useDateFieldState } from '@react-stately/datepicker'
import type {
  CalendarDate,
  ZonedDateTime,
  DateValue,
  CalendarDateTime,
} from '@internationalized/date'
import { createCalendar } from '@internationalized/date'
import { useMergeRef } from '@vtex/shoreline-utils'
import { Field, FieldLabel } from '@vtex/shoreline-components'

import { DateSegment } from '../date-segment'
import './date-field.css'

export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(
  function DateField(props, forwardedRef) {
    const {
      granularity = 'day',
      hourCycle = 24,
      locale = 'en-US',
      onChange,
      className,
    } = props

    const state = useDateFieldState({
      ...props,
      onChange: onChange as Dispatch<SetStateAction<DateValue>>,
      granularity,
      hourCycle,
      locale,
      createCalendar,
    })

    const ref = React.useRef<HTMLDivElement>(null)
    const { labelProps, fieldProps } = useDateField(props, state, ref)

    return (
      <Field data-sl-date-field className={className}>
        <FieldLabel {...labelProps}>{props.label}</FieldLabel>
        <div
          {...fieldProps}
          ref={useMergeRef(ref, forwardedRef)}
          data-sl-date-field-input
        >
          {state.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
          {state.isInvalid && <span aria-hidden="true">🚫</span>}
        </div>
      </Field>
    )
  }
)

export interface DateFieldProps {
  className?: string
  granularity?: 'day' | 'hour' | 'minute' | 'second'
  hourCycle?: 12 | 24
  label?: string
  locale?: string
  error?: boolean
  value?: DateValue
  minValue?: DateValue
  maxValue?: DateValue
  onChange?:
    | Dispatch<SetStateAction<CalendarDate>>
    | Dispatch<SetStateAction<ZonedDateTime>>
    | Dispatch<SetStateAction<CalendarDateTime>>
  defaultValue?: DateValue
}
