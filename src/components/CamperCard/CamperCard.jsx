import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/camperSlice";
import { selectFavoriteCampers } from "../../redux/selectors";
import css from './CamperCard.module.css'
import icons from '../../assets/icons/sprite.svg';

export const Camper = ({ camper }) => {
    const { _id, gallery,
        name,
        price,
        rating,
        reviews,
        location,
        description,
        details,
        engine,
        transmission,
        adults, } = camper;
    const favorites = useSelector(selectFavoriteCampers);
    const dispatch = useDispatch();
    const isFavorite = favorites.some(favorite => favorite._id === camper._id);
    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(_id));
        } else {
            dispatch(addFavorite(_id));
        }



        

    };
    return (
        <li key={camper._id} className={css.item}>
            <img src={gallery[0]} alt="camper" className={css.foto} />
            <div className={css.detailsWrapper}>
                <div className={css.nameWrapper}>
                    <p className={css.name}>{name}</p>
                    <div className={css.priceWrapper}>
            <p className={css.name}>€{price}</p>
            <button onClick={handleFavoriteClick}>
                <svg width={24} height={24}>{isFavorite
                        ? <use href={`${icons}#icon-like`} style={{ fill: 'red' }}></use>
                :  <use href={`${icons}#icon-unlike`} style={{  fill: 'transparent',
    stroke: 'black' }}></use>}
                </svg>
            </button></div></div>
                <div className={css.ratingWrap}><div className={css.ratingWrapper}>
                    <svg width={16} height={16}><use href={`${icons}#icon-star`}></use></svg>
                    <p>{`${rating}(${reviews.length} Reviews)`}</p></div>
                    
                <div className={css.locationWrapper}><svg width={16} height={16} className={css.svg}>
                    <use href={`${icons}#icon-map-pin`}></use></svg><p>{location}</p></div></div>
            <p className={css.description} onClick={() => {
    const p = document.querySelector(`.${css.description}`);
    if (p.style.whiteSpace === "nowrap") {
        p.style.whiteSpace = "normal";
        p.style.overflow = "visible";
        p.style.textOverflow = "clip";
        p.classList.remove('hidden-text');
    } else {
        p.style.whiteSpace = "nowrap";
        p.style.overflow = "hidden";
        p.style.textOverflow = "ellipsis";
        p.classList.add('hidden-text');
    }
}}>{description}</p>
            <ul className={css.list}>
                    <li className={css.listItem} ><svg width={20} height={20} >
                        <use href={`${icons}#icon-Users`}></use></svg> {adults} adults</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-Container`}></use></svg> {transmission}</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-orlen`}></use></svg> {engine} </li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-fork`}></use></svg> {details.kitchen} Kitchen</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-Container-1`}></use></svg> {details.beds} beds</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-ac`}></use></svg> AC</li>
            </ul>
<button className={css.button}>Show more</button></div>
        </li>
    )
}