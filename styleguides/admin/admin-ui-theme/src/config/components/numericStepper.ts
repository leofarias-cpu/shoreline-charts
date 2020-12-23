const styles = {
  width: 106,
  height: 48,
  appearance: 'none',
  '::-webkit-inner-spin-button ': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  paddingLeft: 36,
  paddingRight: 36,
  textAlign: 'center',
  color: 'dark.primary',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: 'mid.primary',
  borderRadius: 'default',
  backgroundColor: 'light.primary',
  ':hover': {
    borderColor: 'dark.primary',
  },
  ':disabled': {
    backgroundColor: 'light.secondary',
    color: 'mid.primary',
  },
  ':focus:not([data-focus-visible-added])': {
    outline: 'none',
    boxShadow: 'none',
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'focus',
  },
}

const containerStyles = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 48,
  width: 106,
  paddingY: 12,
}

export default {
  'default-error': {
    ...styles,
    borderColor: 'red',
    ':hover': {
      borderColor: 'red',
    },
    ':focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
  default: styles,
  container: containerStyles,
}
