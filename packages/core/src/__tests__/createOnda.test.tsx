import React from 'react'

import { createOnda, useSystem } from '../createOnda'
import { render } from '@testing-library/react'
import { createPlugin } from '@vtex/onda-system'

describe('context', () => {
  it('should execute the system', () => {
    const [Provider] = createOnda({
      name: 'onda-design-system-tst',
      description: 'test of createOnda()',
      theme: {
        space: [0, 1, 2, 4, 8],
      },
      plugins: [
        createPlugin({
          name: 'onda-plugin-space-tst',
          namespaces: ['space'],
          rules: {
            padding: 'space',
          },
        }),
      ],
      options: {
        disableCSSVariables: true,
      },
    })

    function Div() {
      const { cn } = useSystem()
      return (
        <div
          className={cn({
            padding: 4,
          })}
          data-testid="div"
        />
      )
    }

    const { getByTestId } = render(
      <Provider>
        <Div />
      </Provider>
    )

    expect(getByTestId('div')).toHaveStyleRule('padding', '8px')
  })
})
