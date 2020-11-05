import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Anchor, AnchorProps } from './index'
import { Paragraph } from '../Paragraph'
import { List } from '../List'

export default {
  title: 'beta/anchor',
  component: Anchor,
} as Meta

export const Basic: Story<AnchorProps> = () => {
  return <Anchor href="/?path=/story/beta-link--basic">Link 1</Anchor>
}

export const withinAParagraph: Story<AnchorProps> = () => {
  return (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
      aliquam ex, quis pretium enim. Sed cursus quam ac lorem efficitur, ac
      sodales lorem convallis. Ut scelerisque mauris velit, sit amet iaculis
      elit feugiat commodo. Etiam egestas ante nibh, eget pulvinar erat ultrices
      et. In quis ante aliquam, ullamcorper leo et, porta sapien. Quisque
      lobortis eu velit at molestie. Ut vel gravida lorem, in efficitur nulla.
      Vestibulum tincidunt, nulla in semper dignissim, eros lacus molestie quam,
      sit amet tempus ante quam at mauris. Duis urna eros, cursus eget leo sit
      amet, sollicitudin blandit nibh. Cras pellentesque sapien nibh, eget
      finibus neque ultrices ut. Phasellus fermentum urna at ex rhoncus aliquam{' '}
      <Anchor href="/?path=/story/beta-link--variants">Link 1</Anchor>
    </Paragraph>
  )
}

export const withinAList: Story<AnchorProps> = () => {
  return (
    <List style="none">
      <List.Item styleOverrides={{ mb: '2' }}>
        <Anchor href="/?path=/story/beta-link--variants">Link 1</Anchor>
      </List.Item>
      <List.Item styleOverrides={{ mb: '2' }}>
        <Anchor href="/?path=/story/beta-link--variants">Link 2</Anchor>
      </List.Item>
      <List.Item styleOverrides={{ mb: '2' }}>
        <Anchor href="/?path=/story/beta-link--variants">Link 3</Anchor>
      </List.Item>
    </List>
  )
}
