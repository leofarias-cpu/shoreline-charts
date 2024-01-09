import React, { useState } from 'react'

import type { AlertProps, AlertVariant } from '../index'
import { Alert } from '../index'
import { Stack } from '../../stack'
import { Text } from '../../text'
import { Button } from '../../button'
import type { StoryObj } from '@storybook/react'

const variants: AlertVariant[] = [
  'success',
  'critical',
  'warning',
  'informational',
]

export default {
  title: 'shoreline-components/alert',
  argTypes: {
    children: {
      control: 'text',
      description: 'Alert message',
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Alert variant',
    },
    withAction: {
      control: 'boolean',
      description: 'Whether to render an action or not',
    },
  },
  args: {
    variant: 'informational',
    children: 'Alert message',
    withAction: false,
  },
} as StoryObj<StoryArgs>

interface StoryArgs extends AlertProps {
  withAction: boolean
}

export function Playground(args: StoryArgs) {
  const { variant, children, withAction, ...props } = args

  return (
    <Alert variant={variant} {...props}>
      <Text variant="body">{children}</Text>
      {withAction && (
        <Button variant="tertiary" onClick={() => alert('Clicked')}>
          Action
        </Button>
      )}
    </Alert>
  )
}

export function Default() {
  return (
    <Alert>
      <Text variant="body">Short message</Text>
    </Alert>
  )
}

export function Variants() {
  return (
    <Stack fluid>
      <Alert>
        <Text variant="body">Short message</Text>
      </Alert>
      <Alert variant="success">
        <Text variant="body">Short message</Text>
      </Alert>
      <Alert variant="critical">
        <Text variant="body">Short message</Text>
      </Alert>
      <Alert variant="warning">
        <Text variant="body">Short message</Text>
      </Alert>
    </Stack>
  )
}

export function LongText() {
  return (
    <Stack fluid>
      <Alert>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          dapibus ex. Donec quis elit volutpat, posuere est a, ultrices urna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          maximus sapien, vel tempor diam. Aliquam id dignissim enim. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Etiam ipsum sapien, finibus quis pretium eu, suscipit ac nunc.
          Sed viverra egestas orci lacinia feugiat. Cras diam ligula, fermentum
          sit amet lacus sed, pellentesque feugiat libero. Proin et enim nulla.
          Pellentesque cursus nunc libero, at tristique eros gravida vitae.
          Donec ex nisl, dignissim id tortor vel, lobortis lobortis eros. Etiam
          et arcu sapien. Maecenas elementum lorem maximus hendrerit interdum.
        </Text>
      </Alert>
      <Alert onDismiss={() => null}>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          dapibus ex. Donec quis elit volutpat, posuere est a, ultrices urna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          maximus sapien, vel tempor diam. Aliquam id dignissim enim. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Etiam ipsum sapien, finibus quis pretium eu, suscipit ac nunc.
          Sed viverra egestas orci lacinia feugiat. Cras diam ligula, fermentum
          sit amet lacus sed, pellentesque feugiat libero. Proin et enim nulla.
          Pellentesque cursus nunc libero, at tristique eros gravida vitae.
          Donec ex nisl, dignissim id tortor vel, lobortis lobortis eros. Etiam
          et arcu sapien. Maecenas elementum lorem maximus hendrerit interdum.
        </Text>
        <Button variant="tertiary">Action</Button>
      </Alert>
    </Stack>
  )
}

export function AsAlert() {
  return (
    <Alert role="alert" variant="critical">
      Alert message
    </Alert>
  )
}

export function WithAction() {
  return (
    <Stack fluid>
      <Alert variant="warning">
        <Text variant="body">Action as button</Text>
        <Button variant="tertiary" onClick={() => alert('Clicked')}>
          Action
        </Button>
      </Alert>
      <Alert variant="warning">
        <Text variant="body">Action as link</Text>
        <Button variant="tertiary" asChild>
          <a href="htpps://vtex.com.br" target="_blank" rel="noreferrer">
            See more
          </a>
        </Button>
      </Alert>
    </Stack>
  )
}

export function Dismiss() {
  const [visible, setVisible] = useState(true)

  const toggle = () => setVisible((v) => !v)

  return (
    <div>
      {visible && (
        <Alert variant="success" onDismiss={toggle}>
          <Text variant="body">Alert message</Text>
        </Alert>
      )}
      <button onClick={toggle}>Toggle alert</button>
    </div>
  )
}
