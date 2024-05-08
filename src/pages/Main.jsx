/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import { Header } from './Header';
import { SideMenu } from '../components/SideMenu';
import { Home } from './Home';
import { AllMovies } from './AllMovies';
import { MyFavMovies } from './MyFavMovies';


import './main.css';

const Main = () => {

  const {fav} = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [movies, setMovies] = useState([]);

  const homeRef = useRef();
  const moviesRef = useRef();
  const favmoviesRef = useRef();

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'allmovies',
      ref: moviesRef,
      active: false,
    },
    {
      name: 'favmovies',
      ref: favmoviesRef,
      active: false,
    },
  ];

  const handelToggleActive = () => {
    setActive(!active); //เปลี่ยนค่าตรงข้ามกับค่าปัจจุบัน
  };

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ff12c84f56410c7259242ffbf6dd1e03&page=5');
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />

      {/* ส่ง func ไปที่ Header เช็ค banner มีการคลิก ? ถ้ามีให้ active หรือไม่ได้คลิก undefined*/}
      <div className={`banner ${active ? 'active': undefined}`}> 
        <Header toggleActive={handelToggleActive} />

        <div className="container-fliud">

          {movies && movies.length > 0 && (
            <>
            <Home movies={movies} reference={homeRef}/>
            <AllMovies movies={movies} reference={moviesRef} />
            <MyFavMovies movies={fav} reference={favmoviesRef} />
            </>
          )}
        </div>
        
      </div>
      
    </main>
  );
}

export default Main;