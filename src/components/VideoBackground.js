import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { baseImageUrl } from '../utils/constants'


const VideoBackground = ({movieId, backdrop_path, title}) => {
 
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    //fetching the trailer and updating the store with trailer video data
   
    useMovieTrailer(movieId)
    // https://www.youtube.com/embed/${trailerVideo?.key}&autoplay=1&mute=1

    
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    //     title + ' trailer'
    // )}&key=90e073658be625bb25af58d553173fcc&type=video&videoEmbeddable=true&maxResults=1
    const trailerUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        title + ' trailer'
    )}&key=90e073658be625bb25af58d553173fcc&type=video&videoEmbeddable=true&maxResults=1`
  return (
    <div>
      {/* <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailerVideo?.key}&autoplay=1&mute=1`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
      {/* <iframe
                title="trailer"
                width="560"
                height="315"
                src={trailerUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe> */}
        
   
        <img src={ baseImageUrl + backdrop_path} />
    </div>
  )
}

export default VideoBackground