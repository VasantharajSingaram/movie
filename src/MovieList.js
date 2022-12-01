import { useState } from 'react';
import { Movie } from './Movie.1';
import { AddMovie } from './AddMovie';

// Movies
export function MovieList({movieList}) {


 
  return (
    <div>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}

      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>


  );

}
