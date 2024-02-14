import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("ML", movies);
  return (
    <div className="px-6">
      <h1 className="fw-b text-capitalize py-4">{title}</h1>
      <div className="flex overflow-x-scroll pt-3">
        <div className="flex">
          {movies?.map((m) => {
            return <MovieCard key={m.id} poster={m.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
