import React, { Fragment } from 'react'
import { createComponent, useElement } from '@vtex/admin-ui-react'

import { TableHead } from './table-head'
import { TableBody } from './table-body'
import type { TableState } from '../hooks/use-table-state'
import { StateContext } from '../context'

export const Table = createComponent<'table', TableOptions>((props) => {
  const { children, state, ...dtgProps } = props

  return useElement('table', {
    ...dtgProps,
    baseStyle: { display: 'table', width: '100%' },
    children: (
      <StateContext.Provider value={state}>
        {children ?? (
          <Fragment>
            <TableHead />
            <TableBody />
          </Fragment>
        )}
      </StateContext.Provider>
    ),
  })
})

export interface TableOptions {
  /**
   * Table state
   */
  state: TableState<any>
}
