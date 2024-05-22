import React from 'react'

import { Input } from '../index'

export default {
  title: 'components/input/examples',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
}

export function Controlled() {
  const [value, setValue] = React.useState('Default value')

  return (
    <div>
      <Input value={value} onChange={setValue} />
      <p>value: {value}</p>
    </div>
  )
}
