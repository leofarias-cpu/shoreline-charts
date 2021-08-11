import React from 'react'
import type { Meta } from '@storybook/react'

import { useSearchState, Search } from '../index'
import { tag } from '@vtex/onda-react'
import { Button } from '../../Button'

export default {
  title: 'admin-ui/Search',
  component: Search,
} as Meta

export const Basic = () => {
  const state = useSearchState()

  return (
    <Search
      csx={{ width: 500 }}
      id="search"
      state={state}
      aria-label="Search"
      placeholder="Search for a product, category or brand"
    />
  )
}

export const Debounce = () => {
  const state = useSearchState({
    timeoutMs: 500,
  })

  return (
    <tag.div csx={{ width: 500 }}>
      <Search
        id="search"
        state={state}
        placeholder="Search for a product, category or brand"
      />
      <tag.div csx={{ marginTop: 4 }}>
        <tag.p>Value: {state.value}</tag.p>
        <tag.p>DebouncedValue: {state.debouncedValue}</tag.p>
      </tag.div>
    </tag.div>
  )
}

export const Loading = () => {
  const state = useSearchState()

  return (
    <tag.div csx={{ width: 500 }}>
      <Search
        id="search"
        state={state}
        placeholder="Search for a product, category or brand"
      />
      <Button
        csx={{
          marginTop: 4,
        }}
        onClick={() => state.setLoading((l) => !l)}
      >
        Toggle loading
      </Button>
    </tag.div>
  )
}

export const InitiallyLoading = () => {
  const state = useSearchState({
    initiallyLoading: true,
  })

  return (
    <tag.div csx={{ width: 500 }}>
      <Search
        id="search"
        state={state}
        placeholder="Search for a product, category or brand"
      />
      <Button
        csx={{
          marginTop: 4,
        }}
        onClick={() => state.setLoading((l) => !l)}
      >
        Toggle loading
      </Button>
    </tag.div>
  )
}
