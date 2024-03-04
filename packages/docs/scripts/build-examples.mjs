import fse from 'fs-extra'
import path from 'path'
import { codeToHtml } from 'shiki'
import { format } from 'prettier'

const inputDirectory = `${path.dirname('')}/examples`
const outputDirectory = `${path.dirname('')}/__examples__`
const outputFile = 'index.ts'

let tsCode = `
// This file is autogenerated by scripts/build-examples.mjs
// Do not edit this file directly.
import * as React from "react"

export default {
`

async function main() {
  fse.removeSync(outputDirectory)

  const files = fse.readdirSync(inputDirectory)

  const promises = files.map((file) => {
    const fileBuffer = fse.readFileSync(`${inputDirectory}/${file}`)
    const code = fileBuffer.toString()

    return codeToHtml(code, {
      lang: 'tsx',
      theme: 'material-theme-palenight',
    })
  })

  const codes = await Promise.all(promises)

  for (const i in files) {
    const file = files[i]
    const fileName = file.split('.')[0]

    tsCode += `
      "${fileName}": {
        component: React.lazy(() => import('../examples/${fileName}')),
        code: \`${codes[i]}\`,
      },
      `
  }

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
      console.log('✅ Examples generated')
    }
  })
}

main()
