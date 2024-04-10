import { join, dirname } from 'path'
import { getReferences } from './props-utils.mjs'
import { kebabCase } from '@vtex/shoreline-utils'
import fse from 'fs-extra'
import { format } from 'prettier'

const outputDirectory = `${dirname('')}/__props__`
const outputFile = 'index.ts'

let tsCode = `
// This file is autogenerated by scripts/build-props.mjs
// Do not edit this file directly.

export default {
`

function getPath(name) {
  return join(dirname(''), `../components/src/${name}/${name}.tsx`)
}

async function main() {
  const refs = {}

  const files = [
    getPath('alert'),
    getPath('bleed'),
    getPath('button'),
    getPath('center'),
  ]

  files.forEach((file) => {
    const ref = getReferences(file)[0]

    refs[kebabCase(ref.name)] = ref

    tsCode += `
      "${kebabCase(ref.name)}": ${JSON.stringify(ref)},
      `
  })

  tsCode += '}'

  const formattedTsCode = await format(tsCode, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
  })

  fse.outputFile(`${outputDirectory}/${outputFile}`, formattedTsCode, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('✅ Props documentation generated!')
    }
  })
}

main()
