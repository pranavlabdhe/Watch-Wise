import React from "react";
import MovieCard from "./MovieCard";
import { Scrollbars } from "react-custom-scrollbars";

const MovieList = ({ title, movies }) => {
  console.log("ML", movies);
  return (
    <div className="px-6">
      <h1 className="fw-b text-capitalize py-4">{title}</h1>
      <div className="flex overflow-x-scroll pt-3 scroll-container">
        <div className="flex">
          {movies?.map((m) => {
            return (
            <div key={m.id}>
             <MovieCard  poster={m.poster_path} />
            </div>
           );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
