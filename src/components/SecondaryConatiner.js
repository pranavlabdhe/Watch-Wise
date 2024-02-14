import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div>
        <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"trending movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming movies"} movies={movies.nowPlayingMovies} />
      </div>
    )
  );
};

export default SecondaryConatiner;
