import { Role } from 'reakit'
import { createComponent, useElement } from '@vtex/admin-ui-react'
import React from 'react'
import { Button } from '../button'
import { useMessageFormatter } from '../i18n'
import { messages } from './filter.i18n'
import { usePopoverContext } from './filter-popover-context'
import type { GenericFilterStateReturn } from './filter/filter.state'

export const FilterFooter = createComponent<
  typeof Role,
  FilterPopoverFooterProps
>((props) => {
  const { state: propState } = props

  const { state } = usePopoverContext()

  const { onChange, onClear } = propState ?? state

  const formatMessage = useMessageFormatter(messages.actions)
  const { isScrollableLayout } = usePopoverContext()

  return useElement(Role, {
    baseStyle: {
      borderTop: isScrollableLayout ? '$neutral' : 'none',
      padding: '$l',
      paddingTop: isScrollableLayout ? undefined : 0,
      display: 'flex',
      justifyContent: 'end',
      'button:not(:first-child)': {
        marginLeft: '$m',
      },
    },
    children: (
      <>
        <Button variant="tertiary" onClick={onClear}>
          {formatMessage('clear')}
        </Button>
        <Button onClick={onChange}>{formatMessage('apply')}</Button>
      </>
    ),
  })
})

interface FilterPopoverFooterProps {
  state?: Pick<GenericFilterStateReturn<any>, 'onChange' | 'onClear'>
}
