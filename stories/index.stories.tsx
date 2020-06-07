import React from 'react'
import { LiteYouTubeEmbed } from '../src/index'
import { storiesOf } from '@storybook/react'

storiesOf('LiteYouTubeEmbed', module)
  .add('Basic', () => (
    <LiteYouTubeEmbed videoId='S8JBXrLDkGs' />
  ))
