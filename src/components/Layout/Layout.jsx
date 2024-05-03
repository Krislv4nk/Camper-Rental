import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
// import { Loader } from "components/Loader/Loader"


export const Layout = ({ children }) => {

    return (
        <div>
            <header className={css.header}>
                <nav>
                    <ul className={css.headerList}>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Home</NavLink></li>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/catalog">Catalog</NavLink></li>

                       <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/favorites">Favorites</NavLink></li> 
          
          <Outlet />
        
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            
        </div>)
}