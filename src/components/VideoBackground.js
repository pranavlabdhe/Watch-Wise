import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { baseImageUrl } from '../utils/constants'

const VideoBackground = ({movieId,backdrop_path}) => {
 
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    //fetching the trailer and updating the store with trailer video data
   
    useMovieTrailer(movieId)
    // https://www.youtube.com/embed/${trailerVideo?.key}&autoplay=1&mute=1

  return (
    <div>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailerVideo?.key}&autoplay=1&mute=1`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* <img src={ baseImageUrl + backdrop_path} /> */}
    </div>
  )
}

export default VideoBackground