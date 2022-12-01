import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  // const [movieList, setMovieList] = useState(""); // this is needed for both AddMovie and MovieList so we are
  // sharing as a props 
  return (
    <div className='add-movie'>
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} className='movie-name' type='text' />
      <TextField id="outlined-basic" label="Poster-URL" variant="outlined" onChange={(event) => setPoster(event.target.value)} className='movie-picture' type='text' />
      <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} className='movie-rate' type='text' />
      <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} className='movie-sum' type='text' />
      <Button variant="contained" onClick={() => setMovieList([...movieList,
      ({
        name: name,
        poster: poster,
        rating: rating,
        summary: summary
      })
      ])} className='submit'>Add Movie</Button>

    </div>
  );
}
