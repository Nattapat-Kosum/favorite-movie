/* eslint-disable react/prop-types */
import { MovieCard } from '../components/MovieCard';
import { MovieSwiper } from '../components/MovieSwiper';
import './home.css';


export const Home = ({ movies, reference }) => {
  return (
    <section id="home" className='home active' ref={reference}>
        <div className="container-fluid">
            <div className="row">
                <MovieSwiper movies={movies}/>
            </div>

            <div className="row mb-4 mt-4">
                <div className="col-lg-12">
                    <h2 className="sectionTitle">ได้รับความนิยม + คะแนนสูงสุด</h2>
                </div>
            </div>

            <div className="row">
                {
                    movies
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .slice(0, 4)
                    .map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
