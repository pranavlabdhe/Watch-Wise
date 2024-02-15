import React from 'react';
import { useSelector } from 'react-redux';
import { baseImageUrl } from '../utils/constants';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ backdrop_path,movieId }) => {
    const trailerVideoKey = useSelector(store => store.movies?.trailerVideo?.key);

    useMovieTrailer(movieId)
    const fullTrailerVideoUrl = `https://www.youtube.com/embed/${trailerVideoKey}?autoplay=1&mute=1`;
    // console.log(fullTrailerVideoUrl); 
    
    // console.log(trailerVideoKey);
    return (
        <div >
            <iframe
                className='iframe_div  w-screen aspect-video'
                src={fullTrailerVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
 
            {/* <img src={baseImageUrl + backdrop_path} /> */}
        </div>
    );
};

export default VideoBackground;
