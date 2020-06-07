import React, { useState, useCallback } from 'react'
import { YouTubePlayer } from './YouTubePlayer'
import { YouTubeThumbnail } from './YouTubeThumbnail'
import { YouTubePlayButton } from './YouTubePlayButton'

import type { FC } from 'react'

interface Props {
  videoId: string
  title?: string
  width?: number
  height?: number
}

export const LiteYouTubeEmbed: FC<Props> = ({ videoId, title, width, height }) => {
  const [warmConnection, setWarmConnection] = useState(false)
  const onPointerOver = useCallback(() => { setWarmConnection(true) }, [])

  const [isActive, setIsActive] = useState(false)
  const onClick = useCallback(() => { setIsActive(true) }, [])

  return isActive ? (
    <YouTubePlayer
      title={title ?? videoId}
      width={width ?? 640}
      height={height ?? 360}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
      frameBorder='0'
    />
  ) : (
    <>
      {warmConnection && (
        <>
          <link rel='preconnect' crossOrigin='anonymous' href='https://www.youtube-nocookie.com' />
          <link rel='preconnect' crossOrigin='anonymous' href='https://www.google.com' />
          <link rel='preconnect' crossOrigin='anonymous' href='https://googleads.g.doubleclick.net' />
          <link rel='preconnect' crossOrigin='anonymous' href='https://static.doubleclick.net' />
        </>
      )}
      <YouTubeThumbnail videoId={videoId} onPointerOver={onPointerOver} onClick={onClick}>
        <YouTubePlayButton />
      </YouTubeThumbnail>
    </>
  )
}
