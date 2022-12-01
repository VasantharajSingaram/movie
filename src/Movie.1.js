import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./Counter";

export function Movie({ movie, id }) {

  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <CardMedia component="img" image={movie.poster} alt="movie.name" className='movie-poster' />
     

        
        <CardContent>
          <div className='movie-first-line'>
          <Typography gutterBottom variant="h5" component="div" className='movie-name'>
            {movie.name}
            <IconButton onClick={() => setShow(!show)} aria-label="delete" color='primary'>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}

            </IconButton>
            <IconButton
              color='primary'
              // onClick={()=>navigate('/movies/${id}')}
              onClick={() => navigate('/movies/' + id)}
            >
              <InfoIcon />
            </IconButton>
            {/* {id} */}
          </Typography>

          <p style={styles} className="movie-rating">⭐️{movie.rating}</p>

          </div>
          <div>
            <Typography variant="body2" color="text.secondary">
              {show ? <p className="movie-summary">{movie.summary}</p> : null}

            </Typography>

          </div>
          <CardActionArea>
          <Counter />
          </CardActionArea>
        </CardContent>
        

        {/* </div> */}

     
    </Card>
  );
}
