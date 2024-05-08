/* eslint-disable react/prop-types */
import { MovieCard } from '../components/MovieCard';


// eslint-disable-next-line no-unused-vars
export const MyFavMovies = ({ movies, reference }) => {
  return (
    <section id="favmovies" className='favmovies' ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>เรื่องโปรดของฉัน</h1>
          </div>

          <div className="row">
            {
              movies.length === 0 ? (
                <h3>ยังไม่ได้เลือกหนังขณะนี้ ***</h3>
              ) : (movies.map(movie =><MovieCard key={movie.id} movie={movie}/>
            ))}
          </div>
        </div>
    </section>
  )
}
