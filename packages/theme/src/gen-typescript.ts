import { constants } from '@vtex/shoreline-utils'
import { format } from 'prettier'

import { parseTokens } from './parse-tokens'
import type { ShorelineConfig } from './config'

export async function genTypescript(config: ShorelineConfig): Promise<Buffer> {
  const templateLiterals = getTemplateLiterals(config)
  const tsDeclaration = `export type Token = ${templateLiterals};`

  const tsCode = await format(tsDeclaration, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
  })

  return Buffer.from(tsCode)
}

function getTemplateLiterals(config: ShorelineConfig) {
  const { tokens = {}, prefix } = config

  let returnString = ''
  const unPrefixedTokens = parseTokens({
    tokens,
    prefix,
    unprefixed: true,
  })

  for (const key in unPrefixedTokens) {
    returnString += `'${constants.tokenPrefix}${key}' |`
  }

  return returnString.slice(0, -1).trim()
}
