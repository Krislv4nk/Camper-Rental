import React from "react";
import css from "./Home.module.css";
import heroImage from '../assets/lake.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       <div className={css.wrapper}>
            <div className={css.hero} style={{ backgroundImage: `url(${heroImage})` }}>
               <div className={css.heroWrapper}><h2 className={css.heroTitle}>We know what you need</h2>
                    <Link className={css.link} to="/catalog">Check it!</Link>
            </div></div>

</div>

    );
};
export default Home;