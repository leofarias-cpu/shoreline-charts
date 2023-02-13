import React from 'react'
import type { Story, Meta } from '@storybook/react'

import { Box } from '../../box'
import type { SkeletonProps } from '../index'
import { Skeleton } from '../index'
import { Button } from '../../button'
import { Heading } from '../../heading'
import { Paragraph } from '../../components/Paragraph'
import { Stack } from '../../stack'

export default {
  title: 'admin-ui-review/skeleton',
  component: Skeleton,
} as Meta

export const Playground: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />
}

Playground.args = {
  shape: 'rect',
  csx: {
    height: 128,
    width: 128,
  },
}

export const Rect = () => {
  return <Skeleton csx={{ height: 128, width: 128 }} />
}

export const Circle = () => {
  return <Skeleton shape="circle" csx={{ width: 100, height: 100 }} />
}

export const Fluid = () => {
  return (
    <Box csx={{ width: 'full', height: 192 }}>
      <Skeleton />
    </Box>
  )
}

export const TextExample = () => {
  const [loading, setLoading] = React.useState(true)

  return (
    <Box csx={{ width: 'sm' }}>
      {loading ? (
        <Stack>
          <Skeleton csx={{ height: 24, width: '5/12' }} />
          <Skeleton csx={{ height: 16 }} />
          <Skeleton csx={{ height: 16 }} />
          <Skeleton csx={{ height: 16 }} />
          <Skeleton csx={{ height: 16 }} />
          <Skeleton csx={{ height: 16 }} />
          <Skeleton csx={{ height: 16, width: '1/2' }} />
        </Stack>
      ) : (
        <Box>
          <Heading>Developing</Heading>
          <Paragraph>
            The VTEX team welcomes and thanks you for developing with us. We are
            committed in provide the best developer experience through
            consistency and quality of our guidelines. We are open and
            appreciate all the feedbacks, tips and ideas to keep this experience
            the best as possible. Bellow we describe the way we work and the
            best practices.
          </Paragraph>
        </Box>
      )}
      <Button onClick={() => setLoading((s) => !s)}>Toggle Loading</Button>
    </Box>
  )
}
