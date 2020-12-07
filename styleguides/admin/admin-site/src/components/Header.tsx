import React, { useRef, useEffect } from 'react'
import { Box, cn } from '@vtex/admin-ui'
import { Link } from 'gatsby'
import {
  VisuallyHidden,
  DialogDisclosure,
  useDialogState,
  Dialog,
  DialogBackdrop,
  Portal,
} from 'reakit'
import { FaGithub } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

import Logo from '../icons/LogoSkeleton'
import useViewportWidthGreaterThan from '../hooks/useViewportWidthGreaterThan'
import useLocation from '../hooks/useLocation'
import Anchor from './Anchor'
import SkipToContent from './SkipToContent'
import HiddenMediaQuery from './HiddenMediaQuery'
import DocsNavigation from './DocsNavigation'

export default function Header() {
  const ref = useRef<HTMLDivElement>(null)
  const isLarge = useViewportWidthGreaterThan(768)
  const dialog = useDialogState({ animated: true })
  const location = useLocation()

  useEffect(dialog.hide, [location.pathname])

  return (
    <Box
      element="header"
      styles={{
        border: 'divider-bottom',
        color: 'text.primary',
        bg: 'background',
        gridArea: 'header',
        width: 'full',
        display: 'flex',
        alignContent: 'center',
        zIndex: 999,
        padding: '0 56px',
        '& > *:not(:last-child)': {
          marginRight: 4,
        },
        '@media (max-width: 768px)': {
          padding: '0 8px',
          transform: 'initial',
          height: 60,
          '> *:not(:last-child)': {
            marginRight: '8px',
          },
          a: {
            fontSize: '1em !important',
          },
        },
        "a:not([href^='#'])": {
          display: 'inline-flex',
          alignItems: 'center',
          height: 'calc(100% - 5px)',
          color: 'inherit',
          marginTop: 1,
          borderBottom: '2px solid transparent',
          textTransform: 'uppercase',
          fontSize: '0.875em',
          "&:not([href='/'])": {
            paddingX: 4,
            '&:hover': {
              color: 'brand',
              textDecoration: 'none',
            },
          },
        },
      }}
    >
      <SkipToContent />
      <HiddenMediaQuery query="min-width: 769px">
        <DialogDisclosure
          {...dialog}
          className={cn({
            background: 'transparent',
            color: 'inherit',
            fontSize: '20px',
            padding: 2,
            borderRadius: '50%',
            border: 'none',
          })}
        >
          <MdMenu />
          <VisuallyHidden>Open sidebar</VisuallyHidden>
        </DialogDisclosure>
        <Portal>
          <DialogBackdrop {...dialog} animated={false} />
        </Portal>
        <Dialog
          {...dialog}
          ref={ref}
          aria-label="Sidebar"
          unstable_initialFocusRef={ref}
          className={cn({
            top: 0,
            left: 0,
            height: '100vh',
            margin: 0,
            maxHeight: 'initial',
            transition: 'transform 250ms ease-in-out',
            borderRadius: 0,
            overflow: 'auto',
            transform: 'translateX(-100%)',
            '&[data-enter]': {
              transform: 'translateX(0)',
            },
          })}
        >
          <DocsNavigation />
        </Dialog>
      </HiddenMediaQuery>
      <Anchor as={Link} to="/">
        <Logo />
        <VisuallyHidden>VTEX</VisuallyHidden>
      </Anchor>
      <Box styles={{ flex: 1 }} />
      <Anchor
        href="https://github.com/vtex/onda/tree/master/styleguides/admin/admin-ui"
        target="blank"
      >
        <FaGithub className={cn({ fontSize: '1.2em', marginRight: 2 })} />
        <HiddenMediaQuery query="max-width: 900px">GitHub</HiddenMediaQuery>
        {!isLarge && <VisuallyHidden>GitHub</VisuallyHidden>}
      </Anchor>
    </Box>
  )
}
