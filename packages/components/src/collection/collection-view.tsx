import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'
import { Skeleton } from '../skeleton'
import { EmptyState } from '../empty-state'
import { Slot } from '../slot'
import {
  IconMagnifyingGlass,
  IconPlus,
  IconPlusCircle,
  IconProhibit,
  IconWarningCircle,
} from '@vtex/shoreline-icons'
import { Heading } from '../heading'
import { Button } from '../button'
import { Text } from '../text'
import { messages } from './messages'
import { createMessageHook } from '@vtex/shoreline-primitives'

const useMessage = createMessageHook(messages)

/**
 * A collection view is a component that renders a collection based on its status
 *
 * @example
 * <Collection>
 *    <CollectionView status="loading" />
 * </Collection>
 */
export const CollectionView = forwardRef<HTMLDivElement, CollectionViewProps>(
  function CollectionMessage(props, ref) {
    const { status, children, onError, onEmpty, messages, ...otherProps } =
      props

    const getMessage = useMessage(messages)

    if (status === 'loading') {
      return (
        <div data-sl-collection-view-skeleton>
          <Skeleton {...otherProps} />
        </div>
      )
    }

    if (status === 'ready') {
      return (
        <div
          data-sl-collection-view
          data-sl-collection-view-ready
          ref={ref}
          {...otherProps}
        >
          {children}
        </div>
      )
    }

    const heading = getMessage(`${status}-heading`)
    const description = getMessage(`${status}-description`)
    const action = getMessage(`${status}-action`)

    function handleAction() {
      switch (status) {
        case 'error':
          return onError?.()

        case 'empty':
          return onEmpty?.()
      }
    }

    const actionVariant = status === 'empty' ? 'primary' : 'secondary'

    return (
      <div data-sl-collection-view ref={ref} {...otherProps}>
        <EmptyState size="large">
          <Slot name="illustration" data-sl-collection-view-illustration>
            {getIcon(status)}
          </Slot>
          <Heading data-sl-collection-view-heading>{heading}</Heading>
          {description && (
            <Text data-sl-collection-view-description>{description}</Text>
          )}
          {action && (
            <Slot>
              <Button
                data-sl-collection-view-action
                onClick={handleAction}
                variant={actionVariant}
              >
                {status === 'empty' && <IconPlus />}
                {action}
              </Button>
            </Slot>
          )}
        </EmptyState>
      </div>
    )
  }
)

function getIcon(status: CollectionViewOptions['status']) {
  switch (status) {
    case 'error':
      return <IconWarningCircle color="var(--sl-color-red-8)" />

    case 'empty':
      return <IconPlusCircle color="var(--sl-color-gray-8)" />

    case 'not-found':
      return <IconMagnifyingGlass color="var(--sl-color-gray-8)" />

    default:
      return <IconProhibit color="var(--sl-color-gray-8)" />
  }
}

export interface CollectionViewOptions {
  /**
   * Represents the status of a collection and indicates what should be rendered
   * @default 'ready'
   */
  status: 'ready' | 'error' | 'loading' | 'empty' | 'not-found' | 'unauthorized'
  /**
   * On status error action callback
   */
  onError?: () => void
  /**
   * On status empty action callback
   */
  onEmpty?: () => void
  /**
   * Collection internal messages
   */
  messages?: CollectionMessages
}

export type CollectionViewProps = CollectionViewOptions &
  ComponentPropsWithoutRef<'div'>

type CollectionMessages = Partial<{
  [key in CollectionMessagesKeys]: string
}>

/**
 * Collection internal messages intl keys
 */
type CollectionMessagesKeys =
  | 'not-found-heading'
  | 'not-found-description'
  | 'empty-heading'
  | 'empty-description'
  | 'empty-action'
  | 'error-heading'
  | 'error-action'
  | 'unauthorized-heading'
  | 'unauthorized-description'
