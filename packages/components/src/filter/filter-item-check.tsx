import React, { forwardRef } from 'react'
import { IconCheckSmall } from '@vtex/shoreline-icons'
import type { SelectItemCheckOptions, SelectItemCheckProps } from '../select'
import { useSelectContext, SelectItemCheck } from '../select'

/**
 * Check state of the FilterItem
 */
export const FilterItemCheck = forwardRef<HTMLDivElement, FilterItemCheckProps>(
  function FilterItemCheck(props, ref) {
    const select = useSelectContext()
    const multiselect = Array.isArray(select?.getState().value)

    return (
      <span
        aria-hidden="true"
        data-sl-filter-item-check
        data-multiselect={multiselect}
        ref={ref}
        {...props}
      >
        <SelectItemCheck>
          <span
            data-sl-filter-item-check-indicator
            data-multiselect={multiselect}
          >
            {multiselect ? (
              <IconCheckSmall />
            ) : (
              <span data-sl-filter-item-check-radio-center />
            )}
          </span>
        </SelectItemCheck>
      </span>
    )
  }
)

export type FilterItemCheckOptions = SelectItemCheckOptions
export type FilterItemCheckProps = SelectItemCheckProps
