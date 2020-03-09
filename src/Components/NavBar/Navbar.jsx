import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/translateWords" activeClassName={s.active}>
            <span>
               Translate words
            </span>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/chooseLessons" activeClassName={s.active}>
            <span>
               choose lessons 
            </span>
          </NavLink>
        </div>
    </nav>
    );
}

export default Navbar;