import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
     
    const { movieResults, movieNames } = useSelector(store=>store.gpt)
    if(!movieNames) return null
  return ( 
    <div className=' text-white'>
        <div>

            <div>
            {movieNames.map((movie,i)=><MovieList key={movie} title={movie} movies={movieResults[i]} />)}
           
            </div>
            
        </div>
    </div>
  )
}

export default GptMovieSuggestion