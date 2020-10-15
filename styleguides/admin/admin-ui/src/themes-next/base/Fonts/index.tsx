import React, { memo } from 'react'
import { Global, css } from '@emotion/core'

import VtexTrustVariableWoff from './VtexTrustVariable.woff'
import VtexTrustVariableWoff2 from './VtexTrustVariable.woff2'

/**
 * Defines & applies VTEX Trust font
 */
function Fonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'VTEX Trust Variable';
          src: url(${VtexTrustVariableWoff2}) format('woff2'),
            url(${VtexTrustVariableWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
        }
        code > * > *,
        pre > * > *,
        code,
        pre {
          font-family: 'Dank Mono', 'Operator Mono', 'Fira Code Retina',
            'Fira Code', 'FiraCode-Retina', Consolas, Monaco, monospace !important;
        }
        html,
        body,
        * {
          font-family: 'VTEX Trust Variable', -apple-system, system-ui,
            BlinkMacSystemFont, sans-serif !important;
          font-variation-settings: 'wght' 92;
        }
      `}
    />
  )
}

export default memo(Fonts)
