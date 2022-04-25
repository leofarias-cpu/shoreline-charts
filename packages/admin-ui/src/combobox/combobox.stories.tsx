import React, { useEffect } from 'react'

import type { Meta, Story } from '@storybook/react'

import {
  ComboboxField,
  ComboboxPopover,
  useComboboxState,
  ComboboxMultipleField,
  ComboboxMultiplePopover,
  useComboboxMultipleState,
} from './index'
import type { Locales } from '../i18n'
import { I18nProvider, locales } from '../i18n'

export default {
  title: 'admin-ui/Combobox',
} as Meta

function Example() {
  const combobox = useComboboxState({
    list: ['Brazil', 'France', 'Ukraine', 'Australia'],
  })

  return (
    <div>
      <ComboboxField id="basic-combobox" state={combobox} label="Country" />
      <ComboboxPopover state={combobox} />
    </div>
  )
}

export const Basic = () => {
  return <Example />
}

export const I18n: Story<{
  locale: Locales
}> = ({ locale }) => {
  return (
    <I18nProvider locale={locale}>
      <Example />
    </I18nProvider>
  )
}

I18n.argTypes = {
  locale: {
    type: 'select' as any,
    options: locales,
  },
}

export const CustomRender = () => {
  const combobox = useComboboxState({
    list: [
      { v: 'Brazil', flag: '🇧🇷', id: '#1' },
      { v: 'France', flag: '🇫🇷', id: '#2' },
      { v: 'UK', flag: '🇬🇧', id: '#3' },
      { v: 'Colombia', flag: '🇨🇴', id: '#4' },
      { v: 'Germany', flag: '🇩🇪', id: '#5' },
    ],
    getOptionValue: (item) => item.v,
    renderOption: (item) => (
      <>
        {item.v}
        {item.flag}
      </>
    ),
  })

  return (
    <div>
      {JSON.stringify(combobox.selectedItem)}
      {combobox.value}
      <ComboboxField id="basic-combobox" state={combobox} label="Country" />
      <ComboboxPopover state={combobox} />
    </div>
  )
}

export const Error = () => {
  const combobox = useComboboxState()

  useEffect(() => {
    combobox.setError(true)
    combobox.setVisible(true)
  }, [])

  return (
    <div>
      <ComboboxField id="basic-combobox" state={combobox} label="Country" />
      <ComboboxPopover state={combobox} />
    </div>
  )
}

export const Loading = () => {
  const combobox = useComboboxState()

  useEffect(() => {
    combobox.setLoading(true)
    combobox.setVisible(true)
  }, [])

  return (
    <div>
      <ComboboxField id="basic-combobox" state={combobox} label="Country" />
      <ComboboxPopover state={combobox} />
    </div>
  )
}

// fake request
const searchItems = (search: string, delay = 1000) => {
  const items = [
    { value: 'Brazil' },
    { value: 'Bahamas' },
    { value: 'Belarus' },
    { value: 'France' },
    { value: 'Ukraine' },
    { value: 'Australia' },
    { value: 'Afghanistan' },
    { value: 'Albania' },
    { value: 'Algeria' },
    { value: 'American Samoa' },
    { value: 'Andorra' },
    { value: 'Angola' },
    { value: 'Anguilla' },
    { value: 'Antarctica' },
    { value: 'Antigua and Barbuda' },
    { value: 'Argentina' },
    { value: 'Armenia' },
    { value: 'Aruba' },
    { value: 'Austria' },
    { value: 'Azerbaijan' },
  ]

  const res = items.filter((item) =>
    item.value.toLowerCase().startsWith(search.toLowerCase())
  )

  return new Promise<any[]>((resolve) =>
    setTimeout(resolve, delay, res as any[])
  )
}

export const Async = () => {
  const combobox = useComboboxState()

  useEffect(() => {
    if (combobox.deferredValue === '') {
      combobox.setMatches([])
    } else {
      combobox.setLoading(true)
      searchItems(combobox.deferredValue).then((res) => {
        combobox.setMatches(res.map((i) => i.value))
        combobox.setLoading(false)
      })
    }
  }, [combobox.deferredValue])

  return (
    <div>
      <ComboboxField id="async-combobox" state={combobox} label="Country" />
      <ComboboxPopover state={combobox} />
    </div>
  )
}

const list = [
  'Apple',
  'Bacon',
  'Banana',
  'Broccoli',
  'Burger',
  'Cake',
  'Candy',
  'Carrot',
  'Cherry',
  'Chocolate',
  'Cookie',
  'Cucumber',
  'Donut',
  'Fish',
  'Fries',
  'Grape',
  'Green apple',
  'Hot dog',
  'Ice cream',
  'Kiwi',
  'Lemon',
  'Lollipop',
  'Onion',
  'Orange',
  'Pasta',
  'Pineapple',
  'Pizza',
  'Potato',
  'Salad',
  'Sandwich',
  'Steak',
  'Strawberry',
  'Tomato',
  'Watermelon',
]

export function Multiple() {
  const combobox = useComboboxMultipleState({
    list,
  })

  return (
    <div>
      <ComboboxMultipleField
        state={combobox}
        id="combobox-multiple"
        label="Foods"
        csx={{
          width: '100%',
        }}
      />
      <ComboboxMultiplePopover state={combobox} />
    </div>
  )
}

export const CustomRenderMultiple = () => {
  const combobox = useComboboxMultipleState({
    list: [
      { v: 'Brazil', flag: '🇧🇷' },
      { v: 'France', flag: '🇫🇷' },
      { v: 'UK', flag: '🇬🇧' },
      { v: 'Colombia', flag: '🇨🇴' },
      { v: 'Germany', flag: '🇩🇪' },
    ],
    getOptionValue: (item) => item.v,
    renderOption: (item) => (
      <>
        {item.v}
        {item.flag}
      </>
    ),
    renderTag: (item) => item.v.substring(0, 2),
  })

  return (
    <div>
      {JSON.stringify(combobox.selectedItems)}
      {combobox.value}
      <ComboboxMultipleField
        state={combobox}
        id="combobox-multiple"
        label="Countries"
        csx={{
          width: '100%',
        }}
      />
      <ComboboxMultiplePopover state={combobox} />
    </div>
  )
}

export function MultipleDefaultSelected() {
  const combobox = useComboboxMultipleState({
    defaultSelected: ['Bacon', 'Pasta', 'Tomato'],
    list,
  })

  return (
    <div>
      <ComboboxMultipleField
        state={combobox}
        id="combobox-multiple"
        label="Foods"
      />
      <ComboboxMultiplePopover state={combobox} />
    </div>
  )
}
