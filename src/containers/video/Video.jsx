import React from 'react'
import './video.css'
import { BsFillPlayFill,BsPauseFill } from 'react-icons/bs';

import {dance} from '../../constants'
import Feature from '../../components/feature/Feature'




const Video = () => {
  const vidRef = React.useRef();
  const [playVideo,setPlayVideo] = React.useState(false);

  const videoData = [
    {
      title: 'SIENTELO',
      text: 'BAILALO ',
      description :'Lorem ipsum dolor sit amet consectetur adipisicing elit.Una sensacion dificil de explicar',
    }
  ]  




   return (
  <>
    <div className='video '>
        <div className='video__content'>
        {videoData.map((item, index) => (
            <Feature title={item.title} text={item.text} description={item.description} key={item.title + index} />
        ))}       


        
        </div>
      <div className='video__video'>
        <video 
          autoPlay 
          ref={vidRef}
          src={dance}
          type="video/mp4"
          controls={false}
          muted/>
      </div>

    <div className='video__overlay flex__center '>
      <div className='video__overlay-circle flex__center'
        onClick={()=>{
          setPlayVideo(!playVideo);
          if(playVideo){
            vidRef.current.pause();
            }else{
              vidRef.current.play();
            }
          }
        } >

        {playVideo
          ?(<BsPauseFill  fontSize={40}/>)
          :(<BsFillPlayFill fontSize={40}/>)
        }
      </div>
    </div>
  </div>
   
  </>
  )    
}

export default Video


