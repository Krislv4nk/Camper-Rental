import React from "react";
// import { useDispatch } from 'react-redux';
// import { getCampersThunk } from '../redux/camperSlice.operations';
// import { selectCampers } from '../redux/camperSlice.selectors';
// import { Loader } from "components/Loader/Loader";
// import { errorToast, successToast } from "helpers/services";
import  {CatalogList}  from "components/CatalogList/CatalogList";


const Catalog = () => {


    return (
        <div>
            
            
            <CatalogList/>
        </div>
    )
}

export default Catalog;