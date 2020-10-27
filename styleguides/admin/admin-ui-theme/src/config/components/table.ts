import { merge } from '@vtex/admin-ui-system'

const styles = {
  table: {},
  'row-ltr': {
    display: 'flex',
    textAlign: 'left',
  },
  'row-rtl': {
    display: 'flex',
    textAlign: 'right',
  },
  cell: {
    bg: 'background',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'muted.3',
    display: 'flex',
    alignItems: 'center',
    paddingX: 2,
    variant: 'text.body',
  },
  columnheader: {
    bg: 'background',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    paddingX: 2,
    color: 'muted.0',
    fontWeight: 'normal',
    variant: 'text.body',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'muted.3',
  },
}

export default {
  skeleton: {
    height: 24,
  },
  image: {
    regular: {
      width: 56,
      minWidth: 56,
      height: 56,
      minHeight: 56,
      borderRadius: 4,
    },
    compact: {
      width: 32,
      minWidth: 32,
      height: 32,
      minHeight: 32,
      borderRadius: 4,
    },
    variable: {
      minWidth: 32,
      minHeight: 32,
      borderRadius: 4,
    },
  },
  'image-preview': {
    small: {
      width: 56,
      minWidth: 56,
      height: 56,
      minHeight: 56,
      borderRadius: 4,
      boxShadow: 'menu',
    },
    regular: {
      width: 156,
      minWidth: 156,
      height: 156,
      minHeight: 156,
      borderRadius: 4,
      boxShadow: 'menu',
    },
    large: {
      width: 256,
      minWidth: 256,
      height: 256,
      minHeight: 256,
      borderRadius: 4,
      boxShadow: 'menu',
    },
  },
  regular: merge(styles, {
    cell: {
      height: 80,
    },
  }),
  compact: merge(styles, {
    cell: {
      height: 48,
    },
  }),
  variable: merge(styles, {
    cell: {
      alignItems: 'flex-start',
      minHeight: 48,
      paddingY: 4,
    },
  }),
}
