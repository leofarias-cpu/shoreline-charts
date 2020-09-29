import React, { ReactNode } from 'react'
import { SxStyleProp } from 'theme-ui'
import {
  useDisclosureState,
  Disclosure as ReakitDisclosure,
  DisclosureContent,
  DisclosureProps,
  DisclosureStateReturn,
} from 'reakit/Disclosure'

import { Box } from '../Box'
import { CollapsibleProvider, useCollapsibleContext } from './context'
import { IconCaret } from '../../icons'
import { Button } from '../Button'

/**
 * A Collapsible is a container that allows toggling the display of content. It can be nested as well.
 * @example
 * ```jsx
 * import { Collapsible, useCollapsible } from `@vtex/admin-ui`
 * const props = useCollapsible()
 * <Collapsible {...props}>
 *   <Collapsible.Header label="Title goes here">
 *     {children}
 *   </Collapsible.Header>
 *   <Collapsible.Content>{content}</Collapsible.Content>
 * </Collapsible>
 * ```
 */
export function Collapsible(props: CollapsibleProps) {
  const { sx, children, ...disclosureProps } = props

  return (
    <Box bg="background" bc="muted.3" bs="solid" bw="1" br="3" sx={sx}>
      <CollapsibleProvider {...disclosureProps}>{children}</CollapsibleProvider>
    </Box>
  )
}

function Header({ children, label, sx }: HeaderProps) {
  return (
    <Box display="flex" items="center" justify="between" p="6" pl="3" sx={sx}>
      <Disclosure>{label}</Disclosure>
      <Box
        display="flex"
        sx={{
          '& button:nth-of-type(n+2)': {
            marginLeft: 1,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

function Disclosure({ children }: { children: ReactNode }) {
  const { visible, ...disclosureProps } = useCollapsibleContext()

  return (
    <ReakitDisclosure visible={visible} {...disclosureProps}>
      {(enhancedProps) => {
        return (
          <Button
            {...enhancedProps}
            iconPosition="start"
            icon={<IconCaret direction={visible ? 'down' : 'right'} />}
            variant="text"
            sx={{
              color: 'text',
              '&:hover': { backgroundColor: 'transparent' },
              '&:active': { backgroundColor: 'transparent' },
            }}
          >
            {children}
          </Button>
        )
      }}
    </ReakitDisclosure>
  )
}

function Content({ children, sx }: ContentProps) {
  const props = useCollapsibleContext()

  return (
    <DisclosureContent {...props}>
      {(enhancedProps) => (
        <Box {...enhancedProps} px="6" pb="6" sx={sx}>
          {children}
        </Box>
      )}
    </DisclosureContent>
  )
}

/**
 * ```
 * Collapsible.Header is always visible.
 * Disclosure Button -> always on the left side, and is responsible for controlling the content visibility.
 * Actions Panel -> always on the right side.
 * ```
 */
Collapsible.Header = Header
/**
 * ```
 * Collapsible content.
 * Can be visible or hidden.
 * ```
 */
Collapsible.Content = Content

export interface CollapsibleProps extends DisclosureProps {
  children?: ReactNode
  sx?: SxStyleProp
}

export interface HeaderProps {
  /**
   * Disclosure Button label
   */
  label?: ReactNode
  /**
   * Actions panel
   */
  children?: ReactNode
  /** custom styles */
  sx?: SxStyleProp
}

export interface ContentProps {
  children?: ReactNode
  /** custom styles */
  sx?: SxStyleProp
}

export { useDisclosureState as useCollapsible }
export { DisclosureStateReturn }
