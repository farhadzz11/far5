import React, { useRef } from 'react'
import video_t from '../../assets/7971025-uhd_3840_2160_24fps.mp4'
import './VideoPlayer.css'

function VideoPlayer({setStatePlayer ,statePlayer}) {
    const player = useRef(null);
    const closeplayer = (e)=>{
        if(e.target === player.current){
            setStatePlayer(false)
        }

    }
  return (
    <div className={`video-player ${statePlayer ? '' : 'hide'} `}ref={player}
    onClick={closeplayer}>
        <video src={video_t} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
