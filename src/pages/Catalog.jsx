import React from "react";
import { Loader } from "components/Loader/Loader";
import { errorToast } from "helpers/services";


const Catalog = () => {

    return (
        <div>
            {isLoading && <Loader />}
            {error && errorToast(error)}
            {camperSlice.lengs> 0 && <CatalogList/>}
        </div>
    )
}

export default Catalog;