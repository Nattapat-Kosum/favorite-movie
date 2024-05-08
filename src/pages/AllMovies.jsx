/* eslint-disable react/prop-types */

import { useState} from 'react';
import './allMovies.css';

import { MovieCard } from '../components/MovieCard';

// eslint-disable-next-line no-unused-vars
export const AllMovies = ({ movies, reference }) => {

//ข้อมูลใช้แสดงรายการเกม
const [data, setdata] = useState(movies)

// console.log(data);

const [text, setText] = useState('');

const handleSearchMovies = e => {
    setdata(
        movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    ));
    setText(e.target.value);
};

  return (
    <section id="allmovies" className='allmovies' ref={reference}>
        <div className="container-fluid mt-2">

            <div className="row">
                <div className="col-lg-12 mb-1 d-flex align-items-center justify-content-start">
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" name='search' placeholder='Search' value={text} onChange={handleSearchMovies}/>
                    </div>
                </div>
            </div>

            <div className="row">
                {data.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
        
    </section>
  );
}
