import { genCssVariables } from '../gen-css-variables'

function removeSpaces(str: string) {
  return str.replace(/\s/g, '')
}

test('should render css variables', () => {
  const result = removeSpaces(
    genCssVariables({
      '--sl-color-blue-100': 'blue',
    })
  )

  const expected = removeSpaces(`
    @layer sl-tokens {
      :root {
        --sl-color-blue-100: blue;
      }
    }
  `)

  expect(result).toStrictEqual(expected)
})
