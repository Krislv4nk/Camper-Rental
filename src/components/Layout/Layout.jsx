import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
// import { Loader } from "components/Loader/Loader"


export const Layout = ({ children }) => {

    return (
        <div>
            <header className={css.header}>
                <nav>
                    <div className={css.wrapper}>
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
          
          <Outlet />
                        </ul>
                        </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className={css.footer}><div className={css.wrapper}>
                <p className={css.footerText}>© 2024</p>
                <p className={css.footerText}>All rights reserved</p>
</div>
            </footer>
        </div>)
}