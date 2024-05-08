/* eslint-disable react/prop-types */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './movieSwiper.css';

export const MovieSlide = ({ movie }) => {

    const urlPoster=`https://image.tmdb.org/t/p/w500/`;

  return (
                    <div className="movieSlide">
                        <img src= {urlPoster + movie.poster_path} alt="Movie Image" />
                     
                        <div className="content">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                
  )
}
