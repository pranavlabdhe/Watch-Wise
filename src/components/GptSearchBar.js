import React, { useRef } from 'react'
import langConst from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
   const dispatch = useDispatch()
   const langKey = useSelector((store)=>store.config.lang) 
   console.log(langConst[langKey]?.search); // Accessing the 'search' key based on langKey value
   const searchTxt = useRef(null)

    //Search movie    
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        
        const json = await data.json()
        return json.results
    }

   const handleGptSearchClick = async () => {
        console.log(searchTxt.current.value);

        const  gptQuery = "Act as a Moviie Recommendation system and suggest some movies for the query :" + searchTxt.current.value + " .only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Don, Sholay, YesBoss, Golmaal, Koi mil gaya "

        const gptResults =  await openai.chat.completions.create({
            messages: [{ role: 'user', content:gptQuery}],
            model: 'gpt-3.5-turbo',
          });
          if(!gptResults.choices) {
            alert('No Result Found')
          }

          console.log(gptResults.choices?.[0]?.message.content);
           
// "Kingsman: The Secret Service, Mission: Impossible - Fallout, Skyfall, Casino Royale, Tinker Tailor Soldier Spy"
        const gptMovies= gptResults.choices?.[0]?.message.content.split(",")

        const promiseArray = gptMovies.map(movie=> searchMovieTMDB(movie))
        
        const tmdbResults = await Promise.all(promiseArray)
        console.log(tmdbResults);

        dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
        
    }
   
  return (
    <div>
        <form className=' bg-black gpt_form' 
        onSubmit={(e)=>e.preventDefault()}
        > 
            <input type='text'className='p-4 ms-2 me-2 col-10 'placeholder={langConst[langKey].gptSearchPlaceHolder} 
            ref={searchTxt}
            />
            <div>
            <button className='py-2 mt-3 search_btn px-4 ' onClick={handleGptSearchClick}>
                {langConst[langKey]?.search}
                </button>
            </div>
        </form>
    </div>
  )
}

export default GptSearchBar