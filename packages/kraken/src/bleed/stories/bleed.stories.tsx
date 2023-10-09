import '../bleed.css'

import React from 'react'

import { Bleed } from '../index'
import { containerStyle } from './bleed.stories.css'

export default {
  title: 'kc/bleed',
}

export function Default() {
  return (
    <div className={containerStyle}>
      <Bleed horizontal="16px" vertical="8px">
        <button>Button</button>
      </Bleed>
    </div>
  )
}
