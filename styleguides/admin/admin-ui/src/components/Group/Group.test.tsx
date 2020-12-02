import React from 'react'
import { render } from '@testing-library/react'

import { Box, BoxProps } from '../Box'
import { Group, useGroup } from '.'
import { ThemeProvider } from '../../system'

describe('Group tests', () => {
  function GroupAwareBox(props: BoxProps<'div'>) {
    const { grouped } = useGroup()

    return (
      <Box styles={{ height: grouped ? 100 : 200 }} {...props}>
        group aware box
      </Box>
    )
  }

  it('should provide a true grouped value', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Group>
          <GroupAwareBox data-testid="box" />
        </Group>
      </ThemeProvider>
    )

    expect(getByTestId('box')).toHaveStyleRule('height', '100px')
  })

  it('should provide a false grouped value', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Group grouped={false}>
          <GroupAwareBox data-testid="box" />
        </Group>
      </ThemeProvider>
    )

    expect(getByTestId('box')).toHaveStyleRule('height', '200px')
  })

  it('Group-aware components should not break if not wrapped by Group', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <GroupAwareBox data-testid="box" />
      </ThemeProvider>
    )

    expect(getByTestId('box')).toHaveStyleRule('height', '200px')
  })
})
