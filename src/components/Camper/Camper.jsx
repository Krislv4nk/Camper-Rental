import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/camperSlice";
import { selectCampers, selectFavoriteCampers } from "../../redux/selectors";
import { getCampersThunk } from "../../redux/operations";


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

    // const campers = useSelector(selectCampers);
    const favorites = useSelector(selectFavoriteCampers);
    const dispatch = useDispatch();

    const isFavorite = favorites.some(favorite => favorite._id === camper._id);
useEffect(() => {
        dispatch(getCampersThunk());
    }, [dispatch]);

    
    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(_id));
        } else {
            dispatch(addFavorite(_id));
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