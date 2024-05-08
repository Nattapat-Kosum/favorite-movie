/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../App';
import './header.css'


export const Header = ({ toggleActive }) => {

    const {fav} = useContext(AppContext);

  return (
    <header>
            <a href="#" className="menu" onClick={toggleActive}>
                <i className="bi bi-sliders"></i>
            </a>

            <div className="Items">
                <a href="#" className="icon">
                    <i className="bi bi-star-fill"></i>
                    <span className="like">{fav.length}</span>
                </a>
            </div>
    </header>
  )
}
