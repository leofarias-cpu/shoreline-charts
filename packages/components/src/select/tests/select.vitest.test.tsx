import React from 'react'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { Select, SelectProvider, SelectOption, SelectPopover } from '../index'

describe('select', () => {
  test('renders', () => {
    const { container } = render(
      <SelectProvider>
        <Select>Label</Select>
        <SelectPopover>
          <SelectOption value="option">Option</SelectOption>
        </SelectPopover>
      </SelectProvider>
    )

    expect(container.querySelector('[data-sl-select]')).toBeInTheDocument()
    expect(
      container.querySelector('[data-sl-select-popover]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-sl-select-option]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-sl-select-option-check]')
    ).toBeInTheDocument()
  })
})
