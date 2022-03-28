import React from 'react'
import { tag, useSystem } from '@vtex/admin-ui-react'

import { BaseFilter } from './filter-base'
import { ComboboxItem } from 'ariakit'
import { focusVisible, style } from '..'

import type { UseFilterStateReturn } from './filter.state'
import { FilterRadio } from './filter-radio'

export const itemStyle = style({
  display: 'flex',
  cursor: 'pointer',
  ...focusVisible('main'),
})

export function Filter(props: FilterProps) {
  const {
    state: { combobox, appliedItem, items },
    state,
  } = props

  const appliedValuesLabel = appliedItem && (
    <>
      <span>:</span>
      <tag.span
        csx={{
          color: '$primary',
          marginLeft: '$s',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '300px',
        }}
      >
        {appliedItem.label}
      </tag.span>
    </>
  )

  const { cn } = useSystem()

  // TODO: Check the reason that we get a type error if the className is passed directly to Checkbox
  const styleProps: any = {
    className: cn(itemStyle),
  }

  return (
    <BaseFilter state={state} appliedValuesLabel={appliedValuesLabel}>
      {items.map(({ id, label }) => (
        <ComboboxItem
          {...styleProps}
          aria-selected={!!(id && id === combobox.value)}
          key={id}
          value={id}
          focusOnHover
          hideOnClick={false}
        >
          <FilterRadio checked={!!(id && id === combobox.value)} />
          {label}
        </ComboboxItem>
      ))}
    </BaseFilter>
  )
}

export interface FilterProps {
  state: UseFilterStateReturn
}
