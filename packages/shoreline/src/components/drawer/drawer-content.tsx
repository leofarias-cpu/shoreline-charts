import { Content } from '../content'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

/**
 * Drawer's content
 */
export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(props: DrawerContentProps, ref) {
    const { children, ...rest } = props

    return (
      <Content data-sl-drawer-content narrow ref={ref} {...rest}>
        {children}
      </Content>
    )
  }
)

export type DrawerContentProps = ComponentPropsWithoutRef<'div'>
