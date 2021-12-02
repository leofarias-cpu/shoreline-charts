import type { StyleProp } from '@vtex/admin-ui-core'
import { focusVisible } from '@vtex/admin-ui-core'

type Size = 'small' | 'regular'
type ActionTone = 'main' | 'critical'
type ActionVariant = 'primary' | 'secondary' | 'tertiary'
type IconVariant = 'none' | 'start' | 'end' | 'only'

function css(csx: StyleProp): StyleProp {
  return csx
}

export function action(options: { tone: ActionTone; variant: ActionVariant }) {
  const { tone, variant } = options

  return css({
    color: `action.${tone}.${variant}`,
    bg: `action.${tone}.${variant}`,
    ':hover': {
      bg: `action.${tone}.${variant}Hover`,
    },
    ':active': {
      bg: `action.${tone}.${variant}Pressed`,
    },
    ...focusVisible(tone),
  })
}

export const baseline = css({
  fontFamily: 'sans',
  fontSettings: 'regular',
  border: 'none',
  borderRadius: 'default',
  cursor: 'pointer',
  position: 'relative',
  ':disabled': {
    bg: '$disabled',
    color: '$disabled',
  },
})

export const neutralTertiary = css({
  bg: '$action.neutral.tertiary',
  ':hover': {
    bg: '$action.neutral.tertiaryHover',
  },
  ':active': {
    bg: '$action.neutral.tertiaryPressed',
  },
  ...focusVisible('neutral'),
})

export const small = (options: { icon: IconVariant }) => {
  const { icon = 'none' } = options

  const space = {
    none: {
      paddingLeft: 3,
      paddingRight: 3,
    },
    start: {
      paddingLeft: 2,
      paddingRight: 3,
    },
    end: {
      paddingLeft: 3,
      paddingRight: 2,
    },
    only: {
      paddingLeft: '2px',
      paddingRight: '2px',
    },
  }[icon]

  return css({
    fontSize: 0,
    height: 32,
    width: icon !== 'only' ? 'auto' : 32,
    ...space,
  })
}

export const regular = (options: { icon: IconVariant }) => {
  const { icon = 'none' } = options

  const space = {
    none: {
      paddingLeft: 4,
      paddingRight: 4,
    },
    start: {
      paddingLeft: 2,
      paddingRight: 3,
    },
    end: {
      paddingLeft: 3,
      paddingRight: 2,
    },
    only: {
      paddingLeft: 1,
      paddingRight: 1,
    },
  }[icon]

  return css({
    fontSize: 1,
    height: 40,
    width: icon !== 'only' ? 'auto' : 40,
    ...space,
  })
}

export const svg = (options: { size: Size }) => {
  const { size } = options
  const numericSize = size === 'regular' ? 24 : 20

  return css({
    size: numericSize,
    minWidth: numericSize,
    minHeight: numericSize,
    margin: 1,
  })
}

export const outerContainer = css({
  display: 'flex',
  height: 'full',
  width: 'full',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
})

export const innerContainer = (options: {
  loading: boolean
  iconEnd: boolean
}) => {
  const { loading, iconEnd } = options

  return css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: loading ? 'hidden' : 'visible',
    flexDirection: iconEnd ? 'row-reverse' : 'row',
  })
}

export const spinnerContainer = css({
  position: 'absolute',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
})
