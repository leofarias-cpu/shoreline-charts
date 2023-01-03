import type { ReactNode } from 'react'
import React from 'react'
import { createComponent } from '@vtex/admin-ui-react'
import { unstable_useId as useId } from 'reakit/Id'

import { Label } from '../components/Label'
import { Stack } from '../stack'
import { Inline } from '../inline'
import { RadioButton } from './radio-button'
import * as style from './radio.style'
import { FormControl, FormControlMessage } from '../form-control'

export const Radio = createComponent<typeof RadioButton, RadioOptions>(
  (props) => {
    const { label, helpText, id, ...radioButtonProps } = props

    const { id: baseId } = useId({ id })

    return (
      <FormControl>
        <Inline hSpace="$space-2" vSpace="">
          <RadioButton {...radioButtonProps} id={baseId} />
          <Stack space="$space-05">
            <Label htmlFor={baseId} csx={style.label}>
              {label}
            </Label>
            <FormControlMessage helpText={helpText} />
          </Stack>
        </Inline>
      </FormControl>
    )
  }
)

export interface RadioOptions {
  /**
   * Radio label
   */
  label: ReactNode
  /**
   * Helper text
   */
  helpText?: ReactNode
}

export type RadioProps = React.ComponentPropsWithoutRef<typeof Radio>
