import React, { forwardRef, Ref } from 'react'
import { createElement } from '@vtex/admin-ui-system'
import { Box as ReakitBox } from 'reakit/Box'

import { Text } from '../Text'
import { useComponent } from '../../hooks/useComponent'
import { Overridable } from '../../types'

/**
 * Component to create a user avatar from a passed label
 * It shows the first letter capitalized in the center
 * @example
 * ```jsx
 * <Avatar label="label" />
 * <Avatar label="label" palette="primary" />
 * <Avatar label="label" palette="danger" />
 * ```
 */
export const unstableAvatar = forwardRef(function Avatar(
  props: AvatarProps,
  ref: Ref<HTMLDivElement>
) {
  const { palette = 'base', label, ...containerProps } = props
  const firstLetter = label?.charAt(0)
  const avatarProps = useComponent({
    props: {
      ...containerProps,
      children: <Text variant="highlight">{firstLetter}</Text>,
    },
    themeKey: `components.avatar.${palette}`,
  })

  return createElement({
    component: ReakitBox,
    element: 'div',
    htmlProps: avatarProps,
    ref,
  })
})

export interface AvatarProps extends Overridable {
  /**
   * String that will have its first letter capitalized
   */
  label: string
  /**
   * Avatar theme
   * @default base
   */
  palette?: 'base' | 'primary' | 'danger'
}
