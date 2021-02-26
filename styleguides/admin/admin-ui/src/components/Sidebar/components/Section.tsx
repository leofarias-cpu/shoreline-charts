import React, { FunctionComponentElement, ReactNode, useEffect } from 'react'
import { ReakitMenu } from './AriaSidebar'
import { SidebarSubItemProps } from './SubItem'
import { useSystem } from '@vtex/admin-core'
import { useSidebarContext } from '../context'
import { Set } from '../../Set'
import { Text } from '../../Text'
import { SystemComponent } from '../../../types'
import { SidebarSecretProps } from '../utils'

export interface SidebarSectionProps
  extends SystemComponent,
    SidebarSecretProps {
  title: ReactNode
  children: FunctionComponentElement<SidebarSubItemProps>[]
}

export function SidebarSection(props: Omit<SidebarSectionProps, 'secret'>) {
  const { title, children, ...baseProps } = props
  const { cn } = useSystem()
  const { direction, setCollapsed } = useSidebarContext()

  const {
    secret: { state },
    // @ts-ignore
  } = props as SidebarSecretProps

  useEffect(() => {
    setCollapsed(!state.visible)
  }, [state])

  return (
    <ReakitMenu
      className={cn({
        [direction]: `56px !important`,
        transform: 'unset !important',
        outline: 'none',
        backgroundColor: '#F8F9FA',
        height: '100%',
        padding: '1.875rem 0.875rem',
        borderRight: '1px solid #E0E2E7',
      })}
      {...state}
      {...baseProps}
    >
      <Set
        spacing={0.5}
        orientation="vertical"
        styleOverrides={{
          width: 'calc(200px - 1.75rem)',
          height: 'inherit',
        }}
      >
        <Text
          variant="action"
          styleOverrides={{
            color: 'gray',
            fontSize: '11px',
            paddingBottom: '12px',
          }}
        >
          {title}
        </Text>
        {children}
      </Set>
    </ReakitMenu>
  )
}
