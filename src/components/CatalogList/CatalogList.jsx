
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { getCampersThunk } from '../../redux/operations';
import { useDispatch } from "react-redux";
import { selectCampers, selectPage} from '../../redux/selectors';
import { Camper } from "components/CamperCard/CamperCard";
import { incrementPage } from '../../redux/camperSlice';

export const CatalogList = () => {
 
        const dispatch = useDispatch();
  const allAds = useSelector(selectCampers);
  const currentPage = useSelector(selectPage);
console.log(currentPage)
    const adsPerPage = 4;

    const incrementPageAndFetch = () => (dispatch, getState) => {
  dispatch(incrementPage());
  const page = getState().campers.page;
  dispatch(getCampersThunk(page));
};

 useEffect(() => {
    dispatch(getCampersThunk(currentPage)); 
  }, [dispatch, currentPage]);
    
   const handleLoadMoreClick = () => {
    dispatch(incrementPageAndFetch());
  };

  const startIndex = (currentPage - 1) * adsPerPage;
  const endIndex = startIndex + adsPerPage;
  const adsToShow = allAds.slice(startIndex, endIndex);

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