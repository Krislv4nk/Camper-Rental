
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCampersThunk } from '../../redux/operations';
import { selectCampers } from '../../redux/selectors';
import { Camper } from "components/Camper/Camper";

export const CatalogList = () => {
    const dispatch = useDispatch();
    const allAds = useSelector(selectCampers);
    console.log(allAds);
    const adsPerPage = 4;
    const [page, setPage] = useState(1);
    const handleLoadMoreClick = () => {
        setPage(page + 1);
    };
    const adsToShow = allAds.slice(0, page * adsPerPage);
    useEffect(() => {
        dispatch(getCampersThunk());
    }, [dispatch]);
    return (
        <div>
                {adsToShow.map(camper => (
                    <Camper key={camper._id} camper={camper}  />
                ))}
            
            
            {adsToShow.length < allAds.length && (
                <button onClick={handleLoadMoreClick}>Load more</button>
            )}
        
        </div>
    );
};