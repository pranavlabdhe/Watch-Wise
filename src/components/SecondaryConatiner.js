import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div>
        <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"top rated movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular movies"} movies={movies.popularMovies} />
        <MovieList title={"Trending movies"} movies={movies.upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryConatiner;
