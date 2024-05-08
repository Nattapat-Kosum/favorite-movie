/* eslint-disable react/prop-types */
import './movieCard.css';
import { MovieRating } from './MovieRating';
import { useContext } from 'react';
import { AppContext } from '../App';

export const MovieCard = ({ movie }) => {

    const {fav, setFav} = useContext(AppContext);

    const handleAddToLibrary = movie => {
        setFav([...fav, movie]);
    };

    const handleRemoveFromLibrary = movie => {
        setFav(fav.filter(item => item.id !== movie.id));
    };

    const urlPoster=`https://image.tmdb.org/t/p/w500/`;

  return (
    <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className="movieCard">
            <img src={urlPoster + movie.poster_path} alt={movie.title} className='img-fluid' />

            <a href="#" className={`like ${fav.includes(movie) ? 'active' : undefined}`} 
            onClick={
                fav.includes(movie) 
                ? () => handleRemoveFromLibrary(movie) 
                : () => handleAddToLibrary(movie)
            }
            >
                <i className="bi bi-star-fill"></i>
            </a>

            <div className="movieFeature d-flex justify-content-between align-items-center">
                <span className="movieType">{movie.release_date}</span>

                <MovieRating rating={movie.vote_average}/>
            </div>

            <span className='voteCount d-flex align-items-center justify-content-end mt-2'>จำนวนคะแนนจากผู้โหวต: {movie.vote_count}</span>

            <div className="movieTitle mt-4 mb-3">
                {movie.title}
            </div>
        </div>

    </div>
  )
}
