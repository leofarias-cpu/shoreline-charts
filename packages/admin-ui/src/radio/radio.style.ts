import type { Theme } from '@vtex/admin-ui-core'
import { csx, focusVisible, style } from '@vtex/admin-ui-core'
import { get } from '@vtex/admin-ui-util'

export const checkmark = style({
  content: '""',
  position: 'absolute',
  display: 'block',
  borderRadius: '$pill',
  size: '0.5rem',
  bg: '$form.control',
})

export const disabled = style({
  ':disabled': {
    bg: '$disabled',
    border: '$disabled',
    color: '$disabled',
    cursor: 'not-allowed',
    '+ div': {
      label: {
        cursor: 'not-allowed',
        color: '$disabled',
      },
    },
  },
})

export const baseline = style({
  ...focusVisible('neutral'),
  size: '1.25rem',
  border: '$form.control',
  appearance: 'none',
  position: 'relative',
  borderRadius: '$pill',
  cursor: 'pointer',
  display: 'flex',
  margin: '$space-0',
  alignItems: 'center',
  justifyContent: 'center',

  ':hover:not(:disabled)': {
    bg: '$form.controlHover',
    border: '$form.controlHover',
  },
  ...disabled,
})

export const checked = style({
  ...focusVisible('main'),
  bg: '$form.controlChecked',
  color: '$form.controlChecked',
  border: '$form.controlChecked',
  position: 'relative',

  '&:after': {
    ...checkmark,
    bg: (theme: Theme) => get(theme, 'fg.form.controlChecked', ''),
  },

  ':hover:not(:disabled)': {
    bg: '$form.controlCheckedHover',
    border: '$form.controlCheckedHover',
  },

  '&[disabled]:after': {
    ...checkmark,
    bg: (theme: Theme) => get(theme, 'fg.disabled', ''),
  },

  ...disabled,
})

export const radioButtonStyle = style({
  ...baseline,
  ':after': checkmark,
  ':checked': checked,
})

export const labelTheme = csx({
  cursor: 'pointer',
})
