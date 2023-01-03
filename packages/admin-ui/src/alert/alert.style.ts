import { style, styleVariants } from '@vtex/admin-ui-core'

export const baseline = style({
  text: '$detail',
  color: '$primary',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  minHeight: '3.125rem',
  height: '100%',
  paddingY: '0.9375rem',
  paddingX: '1.188rem',
  borderRadius: '$base',
  zIndex: 999,
  transition: 'pop',
})

export const action = style({
  text: '$detail',
  color: '$action.neutral.tertiary',
})

export const variants = styleVariants({
  variant: {
    critical: {
      bg: '$critical',
      border: '$critical',
    },
    positive: {
      bg: '$positive',
      border: '$positive',
    },
    warning: {
      bg: '$warning',
      border: '$warning',
    },
    info: {
      bg: '$info',
      border: '$info',
    },
  },
})

export const paragraph = style({
  maxWidth: '49rem',
})

export const iconContainer = styleVariants({
  variant: {
    warning: {
      color: '$warning',
      marginLeft: 'unset',
    },
    positive: {
      color: '$positive',
      marginLeft: 'unset',
    },
    critical: {
      color: '$critical',
      marginLeft: 'unset',
    },
    info: {
      color: '$info',
      marginLeft: 'unset',
    },
  },
})

export const button = styleVariants({
  dismissible: {
    true: {
      marginLeft: '$space-7',
      marginRight: '$space-0',
    },
    false: {
      marginLeft: '$space-7',
    },
  },
})

export const rightInline = style({ whiteSpace: 'nowrap' })
