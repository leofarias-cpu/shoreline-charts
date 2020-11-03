import React from 'react'
import { Meta } from '@storybook/react'

import { Columns } from './index'
import { Box } from '../Box'

export default {
  title: 'beta/layout/columns',
} as Meta

export const Auto = () => {
  return (
    <Columns spacing={1}>
      <Columns.Item>
        <Box palette="primary" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
      <Columns.Item>
        <Box palette="inverted" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
      <Columns.Item>
        <Box palette="primary" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
    </Columns>
  )
}

export const AutoGapless = () => {
  return (
    <Columns spacing={0}>
      <Columns.Item>
        <Box palette="primary" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
      <Columns.Item>
        <Box palette="inverted" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
      <Columns.Item>
        <Box palette="primary" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
    </Columns>
  )
}

export const Units = () => {
  return (
    <Columns spacing={1}>
      <Columns.Item units={3}>
        <Box palette="primary" styles={{ padding: 2 }}>
          3 units
        </Box>
      </Columns.Item>
      <Columns.Item units={6}>
        <Box palette="inverted" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
      <Columns.Item units={3}>
        <Box palette="primary" styles={{ padding: 2 }}>
          3 units
        </Box>
      </Columns.Item>
    </Columns>
  )
}

export const ResponsiveUnits = () => {
  return (
    <Columns spacing={1}>
      <Columns.Item units={6} offset={['right', 'right', 'none']}>
        <Box palette="primary" styles={{ padding: 2 }}>
          6 units
        </Box>
      </Columns.Item>
      <Columns.Item units={3}>
        <Box palette="inverted" styles={{ padding: 2 }}>
          3 units
        </Box>
      </Columns.Item>
    </Columns>
  )
}
