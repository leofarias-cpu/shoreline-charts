import React from 'react'
import { IconAction, IconDelete, IconDuplicate } from '@vtex/admin-ui-icons'
import { get } from '@vtex/admin-core'

import { Set } from '../../Set'
import { StatementProps, ConjunctionProps } from '../typings'
import { Flex } from '../../Flex'
import { Button } from '../../Button'
import { ResolvedValue } from '../resolvers/core'
import { Box } from '../../Box'
import { Menu } from '../../Menu'
import { Dropdown, DropdownProps, useDropdownState } from '../../Dropdown'
import { useFilterBarContext } from '../context'

export interface NewStatementProps<T> {
  statement: StatementProps<T>
  conjunction: ConjunctionProps
  index: number
}

export function Statement<T>(props: NewStatementProps<T>) {
  const { statement, index, conjunction } = props
  const {
    filters,
    resolvers,
    handleConjunctionChange,
    handleConditionChange,
    handleFilterChange,
    handleValueChange,
    handleDeleteStatement,
    handleDuplicateStatement,
  } = useFilterBarContext<T>()

  const filtersState = useDropdownState({
    items: filters,
    selectedItem: statement.filter,
    onSelectedItemChange: ({ selectedItem: filter }) => {
      if (filter) {
        handleFilterChange(filter, index)
        handleConditionChange(filter.conditions[0], index)
        handleValueChange(undefined, index)
      }
    },
  })

  const conditions = statement.filter.conditions

  const conditionsState = useDropdownState({
    items: conditions,
    selectedItem: statement.condition,
    onSelectedItemChange: ({ selectedItem: condition }) => {
      if (condition) {
        handleConditionChange(condition, index)
      }
    },
  })

  const message = index === 0 ? 'Where' : conjunction

  return (
    <Flex justify="space-between" styles={{ width: 'full' }} key={index}>
      <Set
        spacing={2}
        styleOverrides={{
          '> div:nth-child(n+2)': { minWidth: 150 },
          '> div:first-child': { minWidth: 100 },
        }}
      >
        {index === 1 ? (
          <ConjunctionDropdown
            conjunction={conjunction}
            handleConjunctionChange={handleConjunctionChange}
          />
        ) : (
          <Box styles={{ paddingLeft: 3, width: 100 }}>{message}</Box>
        )}

        <CustomDropdown
          state={filtersState}
          renderItem={(item) => get(item, 'label', undefined)}
          label="Filter"
          items={filters}
          variant="adaptative-dark"
        />
        <CustomDropdown
          renderItem={(item) => get(item, 'label', undefined)}
          state={conditionsState}
          label="Condition"
          items={conditions}
          variant="adaptative-dark"
        />
        <ResolvedValue
          resolvers={resolvers}
          statement={statement}
          index={index}
          handleValueChange={handleValueChange}
        />
      </Set>

      <Menu
        aria-label={`${index}-filter-menu`}
        hideOnClick
        disclosure={
          <Button
            variant="adaptative-dark"
            styleOverrides={{ color: 'dark.secondary' }}
            icon={<IconAction />}
          />
        }
      >
        <Menu.Item
          onClick={() => handleDuplicateStatement(index)}
          icon={<IconDuplicate />}
        >
          Duplicate
        </Menu.Item>
        <Menu.Item
          onClick={() => handleDeleteStatement(index)}
          icon={<IconDelete />}
        >
          Delete
        </Menu.Item>
      </Menu>
    </Flex>
  )
}

interface ConjunctionDropdownProps {
  conjunction: ConjunctionProps
  handleConjunctionChange: (conjunction: ConjunctionProps) => void
}

function ConjunctionDropdown(props: ConjunctionDropdownProps) {
  const { conjunction, handleConjunctionChange } = props
  const conjunctions = ['And', 'Or'] as ConjunctionProps[]

  const conjunctionState = useDropdownState({
    items: conjunctions,
    selectedItem: conjunction,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        handleConjunctionChange(selectedItem)
      }
    },
  })

  return (
    <Dropdown
      state={conjunctionState}
      items={conjunctions}
      label="Conjunction"
      variant="adaptative-dark"
      styleOverrides={{
        width: 100,
        bg: 'light.primary',
        border: 'default',
        color: 'dark.secondary',
        div: {
          justifyContent: 'space-between',
        },
      }}
    />
  )
}

function CustomDropdown<T extends { label?: string }>(props: DropdownProps<T>) {
  const { styleOverrides, ...restProps } = props

  return (
    <Dropdown
      variant="adaptative-dark"
      {...restProps}
      renderItem={(item) => (
        <Box
          styles={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {item?.label}
        </Box>
      )}
      styleOverrides={{
        width: 150,
        bg: 'light.primary',
        border: 'default',
        color: 'dark.secondary',
        div: {
          justifyContent: 'space-between',
        },
        ...styleOverrides,
      }}
    />
  )
}
