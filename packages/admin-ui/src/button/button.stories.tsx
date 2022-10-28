import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { IconX } from '@vtex/phosphor-icons'

import type { ButtonProps } from './index'
import { Button } from './index'
import { Heading } from '../components/Heading'
import { Box } from '../box'
import { Flex } from '../flex'

export default {
  title: 'admin-ui-review/button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'critical',
        'criticalSecondary',
        'criticalTertiary',
        'neutralTertiary',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['normal', 'large'],
      control: { type: 'radio' },
    },
    iconPosition: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
  },
} as Meta

type StorybookButtonProps = Omit<ButtonProps, 'icon'> & {
  icon: boolean
}

export const Playground: Story<StorybookButtonProps> = (args) => {
  const { icon, ...props } = args

  return <Button icon={icon ? <IconX /> : undefined} {...props} />
}

Playground.args = {
  size: 'normal',
  variant: 'primary',
  icon: false,
  iconPosition: 'start',
  disabled: false,
  loading: false,
  bleedX: false,
  bleedY: false,
  children: 'Button',
  csx: {},
}

export const Bleed: Story<ButtonProps> = (args) => {
  return (
    <Box
      csx={{
        padding: '$space-3 $space-4',
        bg: '$secondary',
      }}
    >
      <Box
        csx={{
          bg: '$primary',
        }}
      >
        <Flex align="center" justify="space-between">
          <Heading>Heading</Heading>
          <Button icon={<IconX />} {...args}>
            Button with bleed
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

Bleed.args = {
  bleedX: true,
  bleedY: true,
  size: 'normal',
  variant: 'primary',
  iconPosition: 'start',
  disabled: false,
  loading: false,
}

export function UITests() {
  return (
    <>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>

      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="neutralTertiary">Neutral Tertiary</Button>
      <Button variant="critical">critical</Button>
      <Button variant="criticalSecondary">Secondary</Button>
      <Button variant="criticalTertiary">Tertiary</Button>

      <Button>Normal</Button>
      <Button size="large">Large</Button>

      <Button icon={<IconX />}>Icon start</Button>
      <Button icon={<IconX />} iconPosition="end">
        Icon end
      </Button>
      <Button aria-label="Icon only test" icon={<IconX />} />

      <Button bleedX bleedY>
        Bleed
      </Button>
    </>
  )
}

UITests.parameters = {
  chromatic: { disableSnapshot: false },
}
