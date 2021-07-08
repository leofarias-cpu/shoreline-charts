import React, { cloneElement, Fragment } from 'react'
import { jsx, tag } from '@vtex/onda-react'
import { IconTriangle } from '@vtex/admin-ui-icons'

import { Row } from './Row'
import { useStateContext } from '../context'

interface SortIndicatorOptions {
  direction?: 'ASC' | 'DSC' | null
}

const SortIndicator = jsx.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 1,
    minHeight: '0.75rem',
  },
  {
    options: ['direction'],
    useOptions(options: SortIndicatorOptions, props) {
      const { direction } = options

      const triangleCsx = {
        width: '6px',
        height: '5px',
        minHeight: '5px',
        minWidth: '6px',
      }

      return {
        ...props,
        children: (
          <Fragment>
            {direction !== 'DSC' && (
              <IconTriangle
                csx={{
                  ...triangleCsx,
                  marginBottom: 0.5,
                  path: {
                    fill:
                      direction === 'ASC' ? 'dark.secondary' : 'mid.secondary',
                  },
                }}
              />
            )}
            {direction !== 'ASC' && (
              <IconTriangle
                csx={{
                  ...triangleCsx,
                  marginTop: 0.5,
                  path: {
                    fill:
                      direction === 'DSC' ? 'dark.secondary' : 'mid.secondary',
                  },
                }}
                direction="down"
              />
            )}
          </Fragment>
        ),
      }
    },
  }
)

export const Head = jsx.thead(
  {
    display: 'table-header-group',
  },
  {
    useOptions: (_, props) => {
      const { children, ...headProps } = props
      const state = useStateContext()

      return {
        ...headProps,
        role: 'rowgroup',
        children: (
          <Row>
            {state.columns.map((column) => {
              const {
                content,
                isSortable,
                sortDirection,
              } = state.resolveHeader({
                column,
                items: state.data,
              })

              return (
                <Fragment key={String(column.id)}>
                  {cloneElement(children as any, {
                    column,
                    role: 'columnheader',
                    density: 'compact',
                    onClick: isSortable
                      ? () => state.sortState.sort(column.id)
                      : undefined,
                    children: isSortable ? (
                      <tag.div csx={{ display: 'flex', alignItems: 'center' }}>
                        {content}
                        <SortIndicator direction={sortDirection} />
                      </tag.div>
                    ) : (
                      content
                    ),
                  })}
                </Fragment>
              )
            })}
          </Row>
        ),
      }
    },
  }
)
