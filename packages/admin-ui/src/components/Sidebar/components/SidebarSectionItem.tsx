import type { ReactNode, Ref } from 'react'
import React, { forwardRef } from 'react'
import { merge } from '@vtex/admin-ui-util'
import { useCompositeItem } from 'reakit/Composite'

import type { ButtonProps } from '../../Button'
import { Button } from '../../Button'
import { useSidebarContext, useItemContext } from './SidebarContext'
import { ArrowKeys } from '../consts'

/**
 * The last node of the sidebar tree.
 * This is where clients will interact most to perform actions
 */
export const SidebarSectionItem = forwardRef(function SidebarSectionItem(
  props: SidebarSectionItem,
  ref: Ref<HTMLButtonElement>
) {
  const { children, selected: currentSelected = false, ...buttonProps } = props
  const rootState = useSidebarContext()
  const { state, id, selected: parentSelected } = useItemContext()

  const compositeProps = useCompositeItem({
    ...state,
    baseId: 'section-item--',
  })

  const selected = parentSelected && currentSelected

  const handleOnKeyDown = (event: React.KeyboardEvent<any>) => {
    if (typeof compositeProps.onKeyDown === 'function') {
      compositeProps.onKeyDown(event)

      if (event.key === ArrowKeys.Left) {
        // Move focus to parent component, which is
        // at the sidebar's first level and under the
        // root state scope.
        rootState.composite.move(id!)
      }
    }
  }

  return (
    <Button
      ref={ref}
      variant="text"
      size="small"
      csx={merge(
        {
          width: '100%',
          minHeight: 20,
          paddingY: '0.25rem',
          height: 'auto',
          marginY: 1,
          textAlign: 'left',
          backgroundColor: selected ? 'listBoxItem.mainSelected' : 'sidebar',
          '> div': {
            justifyContent: 'start',
            fontSize: '14px',
            fontSettings: selected ? 'medium' : 'regular',
            color: selected ? 'listBoxItem.mainSelected' : 'sidebar',
          },
          ':active': {
            backgroundColor: 'listBoxItem.mainPressed',
            '> div': {
              color: 'listBoxItem.mainPressed',
            },
          },
          ':hover': {
            backgroundColor: 'listBoxItem.mainHover',
            '> div': {
              color: 'listBoxItem.mainHover',
            },
          },
        },
        buttonProps.csx
      )}
      {...compositeProps}
      {...buttonProps}
      onKeyDown={handleOnKeyDown}
    >
      {children}
    </Button>
  )
})

type IntrinsicProps = Omit<ButtonProps, 'ref'>

export interface SidebarSectionItem extends IntrinsicProps {
  /** Sidebar section item content */
  children: ReactNode
  /**
   * Whether this item is selected or not
   * @default false
   * */
  selected?: boolean
}
