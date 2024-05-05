import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/camperSlice";
import { selectFavoriteCampers } from "../../redux/selectors";

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
        <li key={camper._id}>
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