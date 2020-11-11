import React, { createElement } from 'react'
import { graphql } from 'gatsby'
import RehypeReact from 'rehype-react'

import { ThemeProvider, Paragraph, cn, Text } from '../../../admin-ui/src'
import Anchor from '../components/Anchor'
import List from '../components/List'
import Kbd from '../components/Kbd'
import Blockquote from '../components/Blockquote'
import Next from '../icons/Next'
import Heading from '../components/Heading'
import Seo from '../components/SEO'
import DocsBackNext from '../components/DocsBackNext'
import Summary from '../components/Summary'
import { Proptypes } from '../components/Proptypes'
import CodeBlock from '../components/Codeblock'
import PaletteBlock from '../components/PaletteBlock'
import PropDetails from '../components/PropDetails'
import ThemeAwareProps from '../components/ThemeAwareProps'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      title
      htmlAst
      excerpt
      frontmatter {
        path
      }
    }
  }
`

const { Compiler: renderAst } = new RehypeReact({
  createElement,
  components: {
    a: Anchor,
    proptypes: Proptypes,
    highlight: function Render(props) {
      const { message, ...restProps } = props

      return (
        <Text
          {...restProps}
          padding={1}
          styles={{ bg: 'muted.4', color: 'text' }}
        >
          {message}
        </Text>
      )
    },
    themeawareprops: ThemeAwareProps,
    p: function Render(props) {
      return (
        <Paragraph
          text="body"
          styleOverrides={{
            color: 'text',
            fontSize: 2,
            marginY: 4,
            textAlign: 'justify',
            code: {
              fontFamily:
                'VTEXTrustVF, -apple-system, system-ui, BlinkMacSystemFont, sans-serif !important',
              bg: 'muted.4',
              color: 'text',
            },
          }}
          {...props}
        />
      )
    },
    ul: List,
    ol: function Render(props) {
      return <List el="ol" {...props} />
    },
    kbd: Kbd,
    blockquote: Blockquote,
    summary: Summary,
    propdetails: PropDetails,
    h1: Heading,
    h2: function Render(props) {
      return <Heading element="h2" {...props} />
    },
    h3: function Render(props) {
      return <Heading element="h3" {...props} />
    },
    h4: function Render(props) {
      return <Heading element="h4" {...props} />
    },
    h5: function Render(props) {
      return <Heading element="h5" {...props} />
    },
    h6: function Render(props) {
      return <Heading element="h6" {...props} />
    },
    span: function Render({
      title,
      children,
      ...props
    }: React.HTMLAttributes<unknown>) {
      return (
        <span {...props}>
          {children}
          {title === 'Next' && <Next />}
        </span>
      )
    },
    pre: CodeBlock,
    table: function Render(props) {
      return (
        <table
          className={cn({
            borderRadius: 3,
            borderCollapse: 'collapse',
            verticalAlign: 'middle',
          })}
          {...props}
        />
      )
    },
    tr: function Render(props) {
      return <tr className={cn({ textAlign: 'left', height: 48 })} {...props} />
    },
    paletteblock: PaletteBlock,
    th: function Render(props) {
      return (
        <th
          className={cn({
            paddingX: 3,
            borderBottomColor: 'muted.2',
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            verticalAlign: 'middle',
          })}
          {...props}
        />
      )
    },
    td: function Render(props) {
      return (
        <td
          className={cn({
            paddingX: 3,
            borderBottomColor: 'muted.2',
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            verticalAlign: 'middle',
          })}
          {...props}
        />
      )
    },
  },
})

export default function Docs({ data, pageContext }: DocsProps) {
  const {
    markdownRemark: { title, htmlAst, excerpt },
  } = data

  const { nextPagePath, prevPagePath } = pageContext

  return (
    <ThemeProvider>
      <Seo title={`${title} – AdminUI`} description={excerpt} />
      <Heading>{title}</Heading>
      {renderAst(htmlAst)}
      <DocsBackNext nextPath={nextPagePath} prevPath={prevPagePath} />
    </ThemeProvider>
  )
}

type DocsProps = {
  pageContext: {
    sourceUrl: string
    readmeUrl: string
    tableOfContentsAst: string
    nextPagePath: string
    prevPagePath: string
  }
  data: {
    markdownRemark: {
      title: string
      htmlAst: object
      excerpt: string
      frontmatter: {
        path: string
        next: boolean
      }
    }
  }
}
