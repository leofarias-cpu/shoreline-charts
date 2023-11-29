import React from 'react'
import { describe, expect, it, render } from '@vtex/shoreline-test-utils'

import { Button } from '../button'

describe('button', () => {
  it('renders', () => {
    const { container } = render(<Button>Text</Button>)

    expect(container.querySelector('[data-sl-button]')).toBeInTheDocument()
  })
})
