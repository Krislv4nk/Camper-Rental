
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCampersThunk } from "../../redux/operations";
import { selectCampers, selectPage } from "../../redux/selectors";
import { refreshCampers, loadMore } from "../../redux/camperSlice";
import { Camper } from "components/Camper/Camper";





export const CatalogList = () => {

    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const page = useSelector(selectPage);
    const totalCampers = 13;
    const totalPages = Math.ceil(totalCampers / 4);

    const handleLoadMore = () => {
        dispatch(loadMore());
    }

    useEffect(() => {
        dispatch(getCampersThunk(page));
        console.log(page);
    }, [dispatch, page]);
    
    useEffect(() => {
        return () => {
            dispatch(refreshCampers());
        }
    }, [dispatch]);
    return (
        <div>
            <ul>
                {campers.map((camper) => (
                    <Camper key={camper.name} camper={camper} />
                ))}
            </ul>
            {page < totalPages && <button onClick={handleLoadMore}>Load More</button>}
        </div>
    );
};