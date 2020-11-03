import React, { useMemo } from 'react'
import { get } from '@vtex/admin-ui-system'

import { ResolverContext } from './resolvers/core'
import { TableDensity, TableDir } from './typings'
import { useTable, UseTableParams } from './useTable'
import { Table } from './components'
import { Overridable } from '../../types'
import { Box } from '../Box'

/**
 * Table used to show static & simple information
 * @example
 * ```jsx
 * import { StatefulTable, defineColumns } from `@vtex/admin-ui`
 *
 * type Item = {}
 *
 * const items: Item[] = []
 *
 * const columns = defineColumns<Item>([
 *  {
 *    id: 'prop-to-access',
 *    lead: 'column-lead-text',
 *    width: ['...responsive-width'] | 'width'
 *    resolver: one of BaseResolvers<Item>
 *  },
 *  ...
 * ])
 *
 * <StatefulTable columns={columns} items={items} />
 * ```
 */
export function StatefulTable<T>(props: StatefulTableProps<T>) {
  const {
    columns,
    items = [],
    loading = false,
    getRowKey = (item: T) => get((item as unknown) as object, 'id', ''),
    resolvers,
    density = 'regular',
    dir = 'ltr',
    styleOverrides,
    length = 5,
  } = props

  const context: ResolverContext = useMemo(
    () => ({
      density,
      loading,
      dir,
    }),
    [density, loading, dir]
  )

  const { data, resolveCell, resolveHeader } = useTable<T>({
    length,
    columns,
    resolvers,
    context,
    items,
  })

  return (
    <Box styles={{ overflow: 'auto', width: 'full', ...styleOverrides }}>
      <Table dir={context.dir} density={density}>
        <Table.Head>
          <Table.Row>
            {columns.map((column) => {
              const content = resolveHeader({ column })

              return (
                <Table.Cell key={column.id as string} column={column}>
                  {content}
                </Table.Cell>
              )
            })}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={getRowKey(item)}>
              {columns.map((column) => {
                const content = resolveCell({
                  column,
                  item,
                })

                return (
                  <Table.Cell key={column.id as string} column={column}>
                    {content}
                  </Table.Cell>
                )
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  )
}

export interface StatefulTableProps<T>
  extends Omit<UseTableParams<T>, 'context'>,
    Overridable {
  /**
   * Key extractor
   * @default (item)=>item.id
   */
  getRowKey?: (item: T) => string
  /**
   * Whether the table is loading or not
   * @default false
   */
  loading?: boolean
  /**
   * Table row height
   * @default regular
   */
  density?: TableDensity
  /**
   * HTML Dir
   * @default 'ltr'
   */
  dir?: TableDir
}
