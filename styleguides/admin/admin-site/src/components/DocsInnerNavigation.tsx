import React, { useState, createElement, useEffect } from 'react'
import { cn, VisuallyHidden } from '@vtex/admin-ui'
import RehypeReact from 'rehype-react'
import { unstable_useId as useId } from 'reakit'

import { useCollectionContext, useScrollSpyContext } from './ScrollSpy'

type Props = {
  readmeUrl: string
  sourceUrl: string
  title: string
  tableOfContentsAst: Record<string, unknown>
}

const { Compiler: renderAst } = new RehypeReact({
  createElement,
  components: {
    p: function Render(props: React.PropsWithChildren<unknown>) {
      return <span {...props} />
    },
    a: function Render(props: React.AnchorHTMLAttributes<unknown>) {
      const [href] = useState(() => props.href?.replace(/^.*(#.+)$/, '$1'))

      const id = href?.substr(1)
      const { add, remove } = useCollectionContext()
      const { currentId } = useScrollSpyContext()

      useEffect(() => {
        if (!id) return undefined
        add(id)

        return () => remove(id)
      }, [id, add, remove])

      if (href) {
        return (
          <a
            {...props}
            href={href}
            aria-current={currentId === id ? 'page' : undefined}
            className={cn({
              color: 'dark.secondary',
              fontSize: 2,
              textDecoration: 'none',
              transition: 'all 150ms ease',
              position: 'relative',
              paddingY: 2,
              ':hover': {
                color: '#F71963',
              },
              "&[aria-current='page']": {
                color: '#F71963',
                '::before': {
                  content: "' '",
                  height: '80%',
                  width: 2,
                  position: 'absolute',
                  bg: '#F71963',
                  left: -4,
                },
              },
            })}
          >
            {props.children}
          </a>
        )
      }

      return <a {...props}>{props.children}</a>
    },
  },
})

export default function DocsInnerNavigation(props: Props) {
  const { title, tableOfContentsAst } = props

  const { id } = useId()

  return (
    <aside
      className={cn({
        fontSize: '0.875em',
        bg: 'light.primary',
        borderLeftColor: 'light.secondary',
        borderLeftWidth: 2,
        borderLeftStyle: 'solid',
        nav: {
          listStyle: 'none',
          margin: 0,
          padding: 0,
          li: {
            display: 'flex',
            flexDirection: 'column',
          },
          ul: {
            paddingY: 1,
            listStyle: 'none',
            paddingLeft: 4,
          },
        },
      })}
      key={title}
    >
      <VisuallyHidden id={id}>{title} Sections</VisuallyHidden>
      <nav aria-labelledby={id}>{renderAst(tableOfContentsAst)}</nav>
    </aside>
  )
}
