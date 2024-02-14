import React from 'react'
import  playbutton from '../assets/play.png' 
import infoButton from '../assets/information.png'
const VideoTitle = ({title,overview}) => {
  return (
    <div className='row aspect-video video_title_main absolute bg-gradient-to-r from-black '>
        <div className='col-12 col-sm-8 col-md-6 col-lg-6'>
        <h1 className='text-6xl movie_title fw-bold'>{title}</h1>
        <p className='py-6  movie_desc text-white'>{overview}</p>
        <div className='col-12 d-flex video_button_div'>
            <div>
            <button className='pt-2 pb-2 play_button d-flex ' >
                <div>
                    <img src={playbutton} alt='play_btn'/>
                </div>
                <div className='ms-2'>Trailer</div>
                </button>
            </div>
            <div>
            <button className='text-white  pt-2 pb-2 play_button_2 d-flex  ' >
                <div>
                    {/* <img src={infoButton} alt='play_btn'/> */}
                </div>
                <div className='info_font'>More Info</div>
                </button>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default VideoTitle