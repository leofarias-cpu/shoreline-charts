import styled from '@emotion/styled'
import BaseButton, { ButtonProps as BaseProps } from '@vtex-components/button'
import {
  spaceTokens,
  sxTokens,
  layoutTokens,
  flexTokens,
  positionTokens,
  SpaceTokensProps,
  SxTokensProps,
  FlexTokensProps,
  PositionTokensProps,
  LayoutTokensProps,
} from '@admin/style-tokens'

export type StyledButtonProps = Pick<
  BaseProps,
  | 'disabled'
  | 'focusable'
  | 'children'
  | 'id'
  | 'type'
  | 'name'
  | 'onClick'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onFocus'
  | 'onMouseOver'
  | 'value'
  | 'variant'
  | 'size'
  | 'ref'
> &
  Pick<SpaceTokensProps, 'm' | 'mt' | 'mb' | 'mr' | 'ml' | 'mx' | 'my'> &
  SxTokensProps &
  Pick<FlexTokensProps, 'self'> &
  PositionTokensProps &
  LayoutTokensProps

export const StyledButton = styled(BaseButton)<StyledButtonProps>`
  ${spaceTokens}
  ${sxTokens}
  ${flexTokens}
  ${layoutTokens}
  ${positionTokens}
`
