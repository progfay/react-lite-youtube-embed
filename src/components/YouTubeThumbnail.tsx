import styled from 'styled-components'
import { YouTubePlayButton } from './YouTubePlayButton'

interface Props {
  videoId: string
}

export const YouTubeThumbnail = styled.div`
  width: 640px;
  min-width: 640px;
  height: 360px;
  min-height: 360px;
  background-color: black;
  background-image: ${(props: Props) => `url(https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #000;
  position: relative;
  display: block;
  contain: content;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: repeat-x;
    height: 60px;
    padding-bottom: 50px;
    width: 100%;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  lite-youtube::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }

  &:hover > ${YouTubePlayButton} {
    filter: none;
  }
`
