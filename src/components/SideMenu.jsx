/* eslint-disable react/prop-types */
import { useState } from 'react';
import './sideMenu.css';
import navListData from '../data/navListData';
import { NavLisItem } from './NavLisItem';


export const SideMenu = ({ active, sectionActive }) => {
    
    const [navData, setNavData] = useState(navListData)  //ตั้ง state navData === navListData
  
    const handleNavOnClick = (id, target) => {
        
        const newNavData = navData.map(nav => {
            nav.active = false;
            if (nav._id === id) nav.active = true;
            return nav;
        });
        setNavData(newNavData);
        sectionActive(target);
    };

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
        <a href="" className='logo'>
            <i className="bi bi-film"></i>
            <span className="brand">Fav Movies</span>
        </a>

        <ul className='nav'>
            {navData.map(item => (
                <NavLisItem 
                    key={item._id} 
                    item={item} 
                    navOnClick={handleNavOnClick} /> //ส่งค่า parameter item ไปที่ NavLisItem
            ))}
        </ul>
    </div>
  )
}
