import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { IconCopy } from '@vtex/phosphor-icons'

import type { TooltipProps } from '../index'
import { Tooltip } from '../index'
import { Button } from '../../button'

export default {
  title: 'admin-ui-review/tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      options: [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      control: { type: 'select' },
    },
  },
} as Meta

export const Playground: Story<TooltipProps> = (args) => <Tooltip {...args} />

Playground.args = {
  label: 'Tooltip Label!',
  placement: 'bottom',
}

export const Basic: Story<TooltipProps> = (args) => (
  <Tooltip {...args} label="Basic tooltip" />
)

export const Visible: Story<TooltipProps> = (args) => (
  <Tooltip {...args} visible label="Always visible" />
)

export const WithButton: Story<TooltipProps> = (args) => (
  <Tooltip {...args} label="Copy files">
    <Button icon={<IconCopy />} variant="tertiary" />
  </Tooltip>
)
