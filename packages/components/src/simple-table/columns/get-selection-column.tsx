import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '../../checkbox'
import { VisuallyHidden } from '../../visually-hidden'
import './selection-column.css'

export function getSelectionColum<T>(): ColumnDef<T> {
  return {
    id: 'sl-selection-column',
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        >
          <VisuallyHidden>Select</VisuallyHidden>
        </Checkbox>
      )
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
      >
        <VisuallyHidden>{row.index}</VisuallyHidden>
      </Checkbox>
    ),
  }
}
