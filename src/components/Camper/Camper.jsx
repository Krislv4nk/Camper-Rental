import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCampers } from "../../redux/selectors.js";
import { addCamper, removeCamper } from "../../redux/camperSlice.js";

export const Camper = ({camper}) => {
    const { _id: id, name,
        gallery,
        price,
        location,
        reviews,
        rating,
        description,
        adults,
        transmission,
        engine,
        details,
    } = camper;
    
    console.log(camper);
    const dispatch = useDispatch();
    const favoritesCampers = useSelector(selectFavoriteCampers);
    const [isFavorite, setIsFavorite] = useState(false);
    
 useEffect(() => {
    if (favoritesCampers.find((camper) => camper._id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritesCampers, id]);

    const handleFavoriteClick = () => {
        if (favoritesCampers.find((camper) => camper._id === id)) {
            dispatch(removeCamper(camper._id));
        } else {
            dispatch(addCamper(camper));
        }
    };
    return (
        <li>
            <img src={gallery[0]} alt="camper" />
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={handleFavoriteClick}>
                <svg>{isFavorite
                ?  <use></use>
                :  <use></use>}
                </svg>
            </button>
            <svg><use></use></svg>
            <p>{`${rating}(${reviews.length} Reviews)`}</p>
            <svg><use></use></svg><p>{location}</p>
            <p>{description}</p>
            <ul>
                <li><svg><use></use></svg><p>{adults}adults</p></li>
                <li><svg><use></use></svg><p>{transmission}</p></li>
                <li><svg><use></use></svg><p>{engine} Petrol</p></li>
                <li><svg><use></use></svg><p>{details.kitchen}Kitchen</p></li>
                <li><svg><use></use></svg><p>{details.beds} beds</p></li>
                <li><svg><use></use></svg><p>AC</p></li>
            </ul>
<button >Show more</button>
        </li>
    )
}