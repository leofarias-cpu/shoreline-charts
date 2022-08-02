import { Role } from 'reakit'
import { createComponent, useElement } from '@vtex/admin-ui-react'
import React from 'react'

import { FilterListbox } from '../filter-listbox'
import { FilterPopover } from '../filter-popover'

import { FilterOptionCheckbox } from '../filter-multiple/filter-option-checkbox'
import type { FilterVisibilityStateReturn } from './filter-visibility-state'
import { FilterFooter } from '../filter-footer'
import { MenuButton } from 'ariakit'

import * as style from '../filter.style'

import { Button } from '../../button'
import { IconCaretUp, IconCheck } from '../..'

export const FilterToggleVisible = createComponent<
  typeof Role,
  FilterToggleVisibleProps
>((props) => {
  const { state } = props
  const { combobox, menu } = state.filterState

  //   const formatMessage = useMessageFormatter(messages.actions)

  return useElement(Role, {
    children: (
      <>
        <Button
          as={MenuButton as any}
          icon={
            <IconCaretUp size="small" csx={style.caretIcon(menu.mounted)} />
          }
          state={menu}
          variant="neutralTertiary"
          iconPosition="end"
        >
          More filters
        </Button>

        <FilterPopover state={state.filterState}>
          <FilterListbox>
            {state.items.map((item) => (
              <FilterOptionCheckbox id={item.id} label={item.label}>
                {item.label}
                {combobox.isSelected(item) && (
                  <IconCheck csx={{ marginLeft: '$3xl' }} />
                )}
              </FilterOptionCheckbox>
            ))}
          </FilterListbox>
          <FilterFooter isClearable={false} />
        </FilterPopover>
      </>
    ),
    ...props,
  })
})

interface FilterToggleVisibleProps {
  state: FilterVisibilityStateReturn
}
