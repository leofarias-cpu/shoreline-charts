import '../../../dist/styles.min.css'
import React, { Fragment, useMemo } from 'react'
import '../virtual.css'

import {
  Virtual,
  VirtualContainer,
  VirtualItem,
  useVirtualizerModel,
} from '../index'

import { Center } from '../../center'

export default {
  title: 'shoreline-components/virtual',
}

export function Default() {
  const virtualizer = useVirtualizerModel({
    count: 100,
    dynamic: true,
  })

  return (
    <Virtual virtualizer={virtualizer}>
      <VirtualContainer virtualizer={virtualizer}>
        <VirtualItem asChild>
          {({ index }) => {
            return (
              <Center
                style={{
                  height: index % 2 === 0 ? '40px' : '60px',
                  background: index % 2 === 0 ? '#cecece' : 'white',
                }}
              >
                Item {index}
              </Center>
            )
          }}
        </VirtualItem>
      </VirtualContainer>
    </Virtual>
  )
}
