import type { Ref } from 'react'
import React, { forwardRef } from 'react'

import type { ButtonProps } from '../button'
import { Button } from '../button'
import { pageHeaderButtonTheme } from './page.style'

/**
 * Page header button component
 *
 * @example
 * import { PageHeader, PageHeaderTop, PageHeaderActions, PageHeaderButton } from "@vtex/admin-ui"
 *
 * <PageHeader>
 *  <PageHeaderTop>
 *    <PageHeaderTitle>
 *      Product #123
 *    </PageHeaderTitle>
 *    <PageHeaderActions>
 *      <PageHeaderButton>Create</PageHeaderButton>
 *      <PageHeaderButton variant="critical">Delete</PageHeaderButton>
 *    </PageHeaderActions>
 *  </PageHeaderTop>
 * </PageHeader>
 */
export const PageHeaderButton = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { size = 'large', ...buttonProps } = props

    return (
      <Button
        className={pageHeaderButtonTheme}
        size={size}
        ref={ref}
        {...buttonProps}
      />
    )
  }
)
