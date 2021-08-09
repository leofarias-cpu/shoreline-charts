import React, { useRef } from 'react'
import { axe } from 'jest-axe'
import type { RenderOptions } from '@testing-library/react'
import { render as baseRender } from '@testing-library/react'
import { ThemeProvider } from '@vtex/admin-core'
import type { ReactElement } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

function render(ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) {
  return baseRender(ui, { wrapper: ThemeProvider, ...options })
}

/**
 * HOC to wrap a component with its state hook
 * @example
 * // Cmp has the useCmp state hook
 * const StatefulCpm = withState(Cmp, () => useCmpState({ isSelected: false }))
 */
function withState(Component: any, useStateHook: () => any) {
  function StatefulComponent(props: any) {
    // Avoids an invalid hook call
    const ref = useRef(useStateHook())

    return <Component state={ref.current} {...props} />
  }

  StatefulComponent.displayName = Component.displayName

  return StatefulComponent
}

function jestMatchMedia() {
  /**
   * 🚧 Workaround for window.match media
   * @see https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
   */
  return Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

export * from '@testing-library/react'
export { render, withState, axe, jestMatchMedia, renderHook, act }
