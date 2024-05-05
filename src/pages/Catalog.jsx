import React from "react";
import { Filter } from "components/Filter/Filter";
import { CatalogList } from "components/CatalogList/CatalogList";
import css from "./Catalog.module.css"


const Catalog = () => {

    return (
        <div className={css.wrapper}>
            <Filter/>
            <CatalogList/>
        </div>
    )
}

export default Catalog;