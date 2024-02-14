import React from 'react'
import { baseImageUrl } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='movie_poster' src={baseImageUrl + poster}/>
    </div>
  )
}

export default MovieCard