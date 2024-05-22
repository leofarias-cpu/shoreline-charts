import { useState } from 'react'
import { LocaleProvider } from '../../locale'
import { Field, FieldDescription, FieldError } from '../../field'
import { Label } from '../../label'
import { Stack } from '../../stack'

import { DatePicker } from '../index'
import { getLocalTimeZone, today } from '../../utils'

export default {
  title: 'date/date-picker',
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export function Default() {
  return (
    <Field error>
      <Label>Date</Label>
      <DatePicker />
      <FieldDescription>The event starting date</FieldDescription>
      <FieldError>Something went wrong</FieldError>
    </Field>
  )
}

export function Controlled() {
  const now = today(getLocalTimeZone())
  const [value, setValue] = useState(now)
  const [focusedValue, setFocusedValue] = useState(now)

  return (
    <Stack>
      <p>Selected Date: {value.toString()}</p>
      <p>Focused Date: {focusedValue.toString()}</p>
      <button
        onClick={() => {
          setValue(now)
          setFocusedValue(now)
        }}
      >
        Today
      </button>
      <DatePicker value={value} onChange={setValue} />
    </Stack>
  )
}

export function Locale() {
  return (
    <LocaleProvider locale="ja-JP">
      <DatePicker />
    </LocaleProvider>
  )
}


export function AsField() {
  return (
    <Field error>
      <Label>Date</Label>
      <DatePicker />
      <FieldDescription>The event starting date</FieldDescription>
      <FieldError>Something went wrong</FieldError>
    </Field>
  )
}
