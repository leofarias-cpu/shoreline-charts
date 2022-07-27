import React from 'react'
import {
  bgTokens,
  fgTokens,
  borderTokens,
  shadowTokens,
  theme as defaultTheme,
  get,
  extractTokenCall,
  textTokens,
  Stack,
  Text,
} from '@vtex/admin-ui'
import { replaceHslForHex, rgbaToHexA } from '../utils'

const colorFormatter = (color: string) => {
  const isHsla = /.*hsl|hsla.*/gi.test(color)
  const isRgba = /.*rgba.*/gi.test(color)

  return {
    stringfied: JSON.stringify(color),
    formatted: (
      <Stack>
        {isHsla && <Text>{replaceHslForHex(color)}</Text>}
        {isRgba && <Text>{rgbaToHexA(color)}</Text>}
        <Text>{color}</Text>
      </Stack>
    ),
  }
}

const cssWithColorFormatter = (text: string) => {
  return replaceHslForHex(text, { keepBothValues: true })
}

function createMap(
  prop: string,
  tokenCall: string,
  formatValue = (v: any) => v
) {
  return function map(token: string) {
    const formattedToken = `${tokenCall}.${extractTokenCall(token)}`

    return {
      token: `$${extractTokenCall(token)}`,
      formattedToken,
      description: '',
      value: formatValue(get(defaultTheme, formattedToken, '-')),
      type: prop,
      csx: {
        [`${prop}`]: token,
      },
    }
  }
}

export const background = bgTokens.map(
  createMap('background', 'bg', colorFormatter)
)
export const foreground = fgTokens.map(createMap('color', 'fg', colorFormatter))
export const border = borderTokens.map(
  createMap('border', 'border', cssWithColorFormatter)
)
export const shadow = shadowTokens.map(
  createMap('boxShadow', 'shadow', cssWithColorFormatter)
)

export const text = textTokens.map(
  createMap('text', 'text', (v) => {
    const keys = Object.keys(v)

    return {
      stringfied: JSON.stringify(v),
      formatted: (
        <Stack>
          {keys.map((key, index) => (
            <Text key={index}>{`${key}: ${v[key]}`}</Text>
          ))}
        </Stack>
      ),
    }
  })
)

export const tokens = [
  ...background,
  ...foreground,
  ...border,
  ...shadow,
  ...text,
].map((token, index) => ({
  id: index,
  ...token,
}))
