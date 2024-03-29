import React, { useEffect } from "react";
import { Header } from "./Header";
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
