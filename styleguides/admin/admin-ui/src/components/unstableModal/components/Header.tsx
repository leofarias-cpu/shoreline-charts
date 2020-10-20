/** @jsx jsx */
import { jsx, SxStyleProp } from '@theme-ui/core'
import { useMemo, ReactNode } from 'react'
import { useCx } from '@vtex/admin-ui-system'

import { useModalContext } from '../context'
import { IconClose } from '../../../icons'
import { ModalButton } from './Button'
import { unstableBox as Box } from '../../unstableBox'
/**
 * Header of the modal
 * Renders a header element
 * @example
 * ```jsx
 * import { StatelessModal } from `@vtex/admin-ui`
 * <StatelessModal>
 *  <StatelessModal.Header title="Example">
 *    <Button>Cancel</Button>
 *  </StatelessModal.Header>
 * </StatelessModal>
 * ```
 */
export function ModalHeader(props: ModalHeaderProps) {
  const { children, title = null, containerStyles = {}, styles = {} } = props

  const { omitCloseButton, size } = useModalContext()
  const className = useCx({ styles }, `components.modal.header-${size}`)
  const containerCn = useCx({
    styles: { display: 'flex', alignItems: 'center', ...containerStyles },
  })

  const renderTitle = useMemo(() => {
    if (typeof title === 'string') {
      return <Box text="headline">{title}</Box>
    }

    return title
  }, [title])

  return (
    <header className={className}>
      {renderTitle}
      <div className={containerCn}>
        {children}
        {!omitCloseButton && (
          <ModalButton
            closeModalOnClick
            variant="text"
            icon={<IconClose />}
            sx={{
              color: 'text',
            }}
          />
        )}
      </div>
    </header>
  )
}

export interface ModalHeaderProps {
  /**
   * Title of the modal
   * @default null
   */
  title?: ReactNode
  /**
   * Styles of the buttons container
   * @default {}
   */
  containerStyles?: SxStyleProp
  /**
   * component children
   */
  children?: ReactNode
  /**
   * theme-ui sx prop
   */
  styles?: SxStyleProp
}
