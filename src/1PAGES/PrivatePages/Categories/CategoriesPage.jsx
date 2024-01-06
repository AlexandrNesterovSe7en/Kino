import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { database } from "../../../FireBase/FireBase"
import RenderCategories from "../../../2MODULES/RenderCategories/RenderCategories";
import cl from "./CategoriesPage.module.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CategoriesPage = () => {

    const param = useParams();
    let show = param.category ? true : false;

    return (
        <div>
            {
                show ?
                    <Outlet />
                    :
                    <div className={cl.categoriesPageWrapper}>
                        <div className={cl.categoriesPageWrapperInset}>
                            <h2 className={cl.categoryTitle}>Категории</h2>
                            <RenderCategories />
                        </div>
                    </div>
            }
        </div>
    );
};

export default CategoriesPage;