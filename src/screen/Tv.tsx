import ReactPlayer from 'react-player'
import { MutableRefObject, SyntheticEvent, useRef } from 'react'
import screenfull from 'screenfull'

let TvVivo = () => {
  const refPlayer: any = useRef()
  document.body.requestFullscreen()
  return <>
    <ReactPlayer
      url={"https://hls.servidor.stream/storage/canal39.m3u8"}
      controls
      playing={true}
      width="100%"
      height="100%"
      ref={refPlayer}
    />
  </>
}
export default TvVivo