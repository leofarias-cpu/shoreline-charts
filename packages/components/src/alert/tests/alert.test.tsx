import React from 'react'
import { describe, expect, it, render } from '@vtex/shoreline-test-utils'

import { Alert } from '../alert'

describe('alert', () => {
  it('renders', () => {
    const { container, getByRole } = render(
      <Alert role="alert">Alert message</Alert>
    )

    expect(container.querySelector('[data-sl-alert]')).toBeInTheDocument()
    expect(getByRole('alert')).toBeInTheDocument()
  })
})
