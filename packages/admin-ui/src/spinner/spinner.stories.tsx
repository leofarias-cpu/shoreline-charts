import React from 'react'
import type { Story, Meta } from '@storybook/react'

import type { SpinnerProps } from './index'
import { Spinner } from './index'
import { csx } from '@vtex/admin-ui-core'

export default {
  title: 'admin-ui/Spinner',
  component: Spinner,
} as Meta

export const Playground: Story<SpinnerProps> = (args) => {
  return <Spinner {...args} />
}

Playground.args = {
  size: 24,
}

export const Size = () => <Spinner size={100} />

export const Color = () => (
  <div
    className={csx({
      color: '$action.main.tertiary',
    })}
  >
    <p>Uses the current color</p>
    <Spinner />
  </div>
)
