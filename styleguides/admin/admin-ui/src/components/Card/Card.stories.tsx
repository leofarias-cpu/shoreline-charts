import React from 'react'
import { Meta } from '@storybook/react'

import { Card } from './index'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'

export default {
  title: 'beta/Card',
  component: Card,
} as Meta

export const Example = () => {
  return (
    <Card w="1/2">
      <Heading>Build for community</Heading>
      <Paragraph>
        It’s all about being ready to grow and reach new levels. Have a solid
        foundation, modular thinking and flexible essence, and you’re building
        for scale. We are global but we’re audacious enough to aim for the
        stars.
      </Paragraph>
    </Card>
  )
}

export const WithoutPadding = () => {
  return (
    <Card p="0" w="5/12">
      <Heading padding={6}>Our People</Heading>
      <img
        width="100%"
        src="https://careers.vtex.com/assets/media/perspectives03.jpg"
        alt=""
      />
      <Paragraph padding={6}>
        At VTEX we believe inclusion inspires innovation. We are committed to
        implement a recruiting process that guarantees equal opportunities for
        all, regardless of ethnicity, gender, disability, sexual orientation,
        gender identity or religion.
      </Paragraph>
    </Card>
  )
}
