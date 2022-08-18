import type { CheckboxProps as ReakitProps, CheckboxStateReturn } from 'reakit'
import type { ComponentPropsWithRef, ReactNode } from 'react'

import type { SwitchButton } from './switch-button'

export type SwitchState = Pick<ReakitProps, 'state' | 'setState'>

export interface SwitchOptions {
  label: ReactNode
  state?: SwitchState
  helpText?: ReactNode
  errorText?: ReactNode
  error?: boolean
}

export type SwitchProps = ComponentPropsWithRef<typeof SwitchButton> &
  SwitchOptions

export type SwitchStateReturn = CheckboxStateReturn
