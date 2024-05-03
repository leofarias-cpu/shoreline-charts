import { forwardRef } from 'react'
import { FilterValue } from './filter-value'
import type { PopoverTriggerOptions, PopoverTriggerProps } from '../popover'
import { PopoverTrigger } from '../popover'
import { Button } from '../button'
import { IconCaretDownSmall } from '@vtex/shoreline-icons'

/**
 * Triggers the Filter Popover box, also displays the Filter applied value
 * @example
 * <FilterProvider>
 *   <FilterTrigger>Open</FilterTrigger>
 * </FilterProvider>
 */
export const FilterTrigger = forwardRef<HTMLButtonElement, FilterTriggerProps>(
  function FilterTrigger(props, ref) {
    const { children, ...otherProps } = props

    return (
      <PopoverTrigger data-sl-filter-trigger ref={ref} {...otherProps} asChild>
        <Button>
          {children}
          <FilterValue />
          <IconCaretDownSmall />
        </Button>
      </PopoverTrigger>
    )
  }
)

export type FilterTriggerOptions = PopoverTriggerOptions
export type FilterTriggerProps = PopoverTriggerProps
