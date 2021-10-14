import { Tab as ReakitTab } from 'reakit'
import { jsx } from '@vtex/admin-ui-react'
import { get } from '@vtex/admin-ui-util'

import { useTabsContext } from '../context'

export const Tab = jsx(ReakitTab)(
  {
    fontFamily: 'sans',
    fontSettings: 'regular',
    border: 'none',
    borderRadius: 'default',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: 'transparent',
    borderTopWidth: '2px',
    height: 44,
    minWidth: 110,
    cursor: 'pointer',
    position: 'relative',
    ':focus:not([data-focus-visible-added])': {
      outline: 'none',
      boxShadow: 'none',
    },
    ':focus': {
      outline: 'none',
      boxShadow: 'focus',
    },
    paddingX: 6,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    color: 'base',
  },
  {
    options: [],
    useOptions(_, props) {
      const { id, csx, ...htmlProps } = props
      const { state } = useTabsContext()

      const selected = state.selectedId === id

      return {
        ...htmlProps,
        ...state,
        id,
        csx: {
          ...(selected
            ? {
                borderBottomColor: (theme: any) =>
                  get(theme, 'foreground.action.main.text'),
                color: 'action.main.text',
              }
            : {
                ':hover': {
                  color: 'action.main.text',
                },
              }),
          ...csx,
        },
      }
    },
  }
)

export type TabProps = React.ComponentPropsWithRef<typeof Tab>
