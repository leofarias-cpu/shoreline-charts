import React, { forwardRef, ReactNode, Ref } from 'react'
import { Input as ReakitInput, InputProps as ReakitInputProps } from 'reakit'
import { IconCancel, IconContainer } from '@vtex/admin-ui-icons'
import { inlineVariant } from '@vtex/admin-core'
import { useSystem } from '@vtex/admin-core'

import { Button } from '../Button'
import { SystemComponentProps } from '../../types'
import { Box } from '../Box'

export const AbstractInput = forwardRef(function AbstractInput(
  props: AbstractInputProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    value = '',
    styleOverrides = {},
    error = false,
    icon,
    suffix,
    onClear,
    labelElement,
    buttonElements,
    ...inputProps
  } = props
  const { cn, stylesOf } = useSystem()

  const showClear = !!onClear && value.toString().length > 0
  const showButtons = !!suffix || !!buttonElements || onClear

  const inputClassName = cn({
    themeKey: inlineVariant('components.abstractInput.input', [
      [error, '-error'],
      [!!icon, '-icon'],
      [!!suffix, '-suffix'],
      [!!onClear, '-clear'],
    ]),
    ...styleOverrides,
  })

  return (
    <Box
      themeKey={inlineVariant('components.abstractInput.container', [
        [!!icon, '-icon'],
      ])}
    >
      {icon && (
        <IconContainer
          space="regular"
          styles={stylesOf('components.abstractInput.icon')}
        >
          {icon}
        </IconContainer>
      )}
      <ReakitInput
        value={value}
        ref={ref}
        className={inputClassName}
        {...inputProps}
      />
      {labelElement}
      {showButtons && (
        <Box themeKey="components.abstractInput.buttons">
          {showClear && (
            <Button
              icon={<IconCancel />}
              aria-label={`clear ${inputProps.id} text`}
              onClick={onClear}
              size="small"
              variant="adaptative-dark"
              styleOverrides={{
                marginTop: 2,
                marginRight: 1,
              }}
            />
          )}
          {buttonElements}
          {suffix && (
            <Box element="span" themeKey="components.abstractInput.suffix">
              {suffix}
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
})

export type AbstractInputOwnProps = Omit<
  ReakitInputProps,
  'ref' | 'as' | 'onChange'
>

export interface AbstractInputProps
  extends SystemComponentProps<AbstractInputOwnProps> {
  /** Input Icon */
  icon?: ReactNode
  /** Input Suffix */
  suffix?: string
  /** onClear input */
  onClear?: () => void
  /** Render an optional label */
  labelElement?: ReactNode
  /** Button elements */
  buttonElements?: ReactNode
  /** onChange event */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Input error state */
  error?: boolean
}
