import React from 'react'
import { Checkbox } from '../checkbox'
import { BaseFilter } from './filter-base'
import { ComboboxItem } from '../combobox/combobox-item'
import { MultipleItemsLabel } from './MultipleItemsLabel'
import { itemStyle } from './filter'

import type { UseFilterMultipleReturn } from './filter-multiple.state'
import type { FilterItem } from '.'

export function FilterMultiple<T extends FilterItem>(
  props: FilterMultipleProps<T>
) {
  const {
    state: { appliedItems, items, combobox, baseId },
    state,
  } = props

  return (
    <BaseFilter
      state={state}
      appliedValuesLabel={<MultipleItemsLabel appliedItems={appliedItems} />}
    >
      {items.map((item) => (
        <ComboboxItem
          aria-selected={combobox.isSelected(item)}
          key={item.id}
          onClick={() => combobox.onChange(item)}
          style={itemStyle}
          id={`${baseId ?? ''}-item-${item.id}`}
        >
          <Checkbox
            id={item.id}
            checked={combobox.isSelected(item)}
            aria-checked={undefined}
            csx={{ marginRight: '$s' }}
            aria-readonly="true"
          />
          {item.label}
        </ComboboxItem>
      ))}
    </BaseFilter>
  )
}

export interface FilterMultipleProps<T> {
  state: UseFilterMultipleReturn<T>
}
