import type { ColumnDef } from '@tanstack/react-table'
import { IconCaretDown, IconCaretRight } from '@vtex/shoreline'
import { VisuallyHidden, IconButton, Bleed } from '@vtex/shoreline'

export function getExpandedColumn<T>(): ColumnDef<T> {
  return {
    id: 'sl-expanded-column',
    header: () => <VisuallyHidden>Expand</VisuallyHidden>,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <Bleed
            top="$space-2"
            bottom="$space-2"
            start="$space-2"
            end="$space-2"
          >
            <IconButton
              variant="tertiary"
              label="Expand row"
              onClick={row.getToggleExpandedHandler()}
            >
              {row.getIsExpanded() ? <IconCaretDown /> : <IconCaretRight />}
            </IconButton>
          </Bleed>
        )
      )
    },
  }
}
