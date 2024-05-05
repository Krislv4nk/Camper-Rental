
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCampersThunk } from '../../redux/operations';
import { addFavorite, addFavorites } from "../../redux/camperSlice";
import { selectFavoriteCampers, selectCampers } from '../../redux/selectors';
import { Camper } from "components/Camper/Camper";

export const CatalogList = () => {
    const dispatch = useDispatch();
    const allAds = useSelector(selectCampers);
    console.log(allAds);
    const favorites = useSelector(selectFavoriteCampers);
    console.log(favorites);
    const adsPerPage = 4;
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getCampersThunk());
    }, [dispatch]);

    const handleLoadMoreClick = () => {
        setPage(page + 1);
    };

    const handleFavoriteClick = () => {
        dispatch(addFavorite());
    };

    const adsToShow = allAds.slice(0, page * adsPerPage);

    return (
        <div>

                {adsToShow.map(camper => (
                    <Camper key={camper.id} camper={camper}  onFavoriteClick={handleFavoriteClick} />
            ))}
            {adsToShow.length < allAds.length && (
                <button onClick={handleLoadMoreClick}>Load more</button>
            )}
        
        </div>
    );
};