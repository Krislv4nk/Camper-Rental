import React from "react";
import { NavLink } from 'react-router-dom';
import { icons } from '../../assets';
import css from './Header.module.css';


export const Header = () => {
    return (
      <header className={css.header}>
        <div className={css.logoWrapper}>
          <svg width="40" height="40"><use href={`${icons}#icon-camper`}></use></svg>
          <p className={css.name}>CamperClub</p>
        </div>
                <nav className={css.wrapper}>
                    <div >
                    <ul className={css.headerList}>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Home</NavLink></li><div className={css.catalogWrapper}>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/catalog">Catalog</NavLink></li>

                       <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/favorites">Favorites</NavLink></li></div>
          
          
                        </ul>
                        </div>
                </nav>
            </header>
    )
}