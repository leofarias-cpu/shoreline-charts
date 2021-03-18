import React, {
  Children,
  cloneElement,
  forwardRef,
  ReactNode,
  Ref,
} from 'react'
import { isElement } from 'react-is'
import { useComposite } from './Aria'
import { SidebarSecretProps } from '../types'
import { Set } from '../../Set'
import { Text } from '../../Text'
import { SystemComponent } from '../../../types'
import { SidebarSectionItem } from './SectionItem'

const _SidebarSection = forwardRef(function SidebarSection(
  props: SidebarSectionProps,
  ref: Ref<HTMLButtonElement>
) {
  const { title, children, state, parentId } = props
  const compositeProps = useComposite(state)

  return (
    <Set
      ref={ref}
      spacing={0.5}
      orientation="vertical"
      csx={{
        themeKey: 'components.sidebar.section',
      }}
      {...compositeProps}
    >
      <Text
        variant="action"
        csx={{
          color: 'dark.primary',
          fontSize: '0.6875rem',
          paddingBottom: '0.8125rem',
          paddingX: '0.75rem',
          fontSettings: 'medium',
        }}
      >
        {title}
      </Text>
      {Children.map(
        children,
        (child, index) =>
          isElement(child) &&
          cloneElement(child, {
            parentId,
            state,
            key: index,
          })
      )}
    </Set>
  )
})

export const SidebarSection = Object.assign(_SidebarSection, {
  Item: SidebarSectionItem,
})

export interface SidebarSectionProps
  extends SystemComponent,
    SidebarSecretProps {
  /**
   * `title` of a section. This is what separates each item's section.
   */
  title: string
  /**
   * `chilren` should be multiple `<Sidebar.SubItem {...props} />` components.
   * Those are the items over which clients will interact in order to
   * navigate between different pages.
   */
  children: ReactNode
}
