import { useState } from 'react'
import {
  LINE_HEIGHT,
  MIN_TEXT_AREA_HEIGHT,
  MIN_AREA_ROWS,
  MAX_TEXT_AREA_HEIGHT,
} from './text-area-constants'

export function useTextarea() {
  const [charCount, setCharCount] = useState(0)

  const resizeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const elm = e.target as HTMLTextAreaElement

    const lineHeight = LINE_HEIGHT
    const minScrollHeight = MIN_TEXT_AREA_HEIGHT

    elm.rows = MIN_AREA_ROWS
    const newHeight = Math.min(
      elm.scrollHeight,
      MAX_TEXT_AREA_HEIGHT - lineHeight
    )

    const extraRows: number = Math.ceil(
      (newHeight - minScrollHeight) / lineHeight
    )

    elm.rows = MIN_AREA_ROWS + extraRows
  }

  const getTextareaProps = (
    customProps: React.ComponentPropsWithoutRef<'textarea'>
  ) => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.currentTarget.value.toString().length)
      customProps.onChange?.(e)
    }

    const onInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      resizeTextArea(e)
      customProps.onInput?.(e)
    }

    return {
      ...customProps,
      onInput,
      onChange,
    }
  }

  return { getTextareaProps, charCount }
}
