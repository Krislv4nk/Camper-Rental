import React from "react";
import css from './Header.module.css'


export const Footer = () => {

    return (
        <footer className={css.footer}><div className={css.wrapper}>
                <p className={css.footerText}>© 2024</p>
                <p className={css.footerText}>All rights reserved</p>
</div>
            </footer>
    )
}