import './videoplayer.css'
import video from '../../assets/collage-video.mp4'
import { useRef } from 'react';



const VideoPlayer = ({play, setPlay}) => {
    const player=useRef(null);

    const closePlayer=(e)=>{
        if(e.target === player.current){
            setPlay(false);
        }
    }

  return (
    <div ref={player} onClick={closePlayer} className={`video-player ${play ? '' :'hide'}`}>
     <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer