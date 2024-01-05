import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { database } from "../../../FireBase/FireBase"
import RenderCategories from "../../../2MODULES/RenderCategories/RenderCategories";
import cl from "./CategoriesPage.module.css";

const CategoriesPage = () => {

    const [data, setData] = useState([]);
    const param = useParams();
    let show = param.category ? true : false;

    useEffect(() => {
        // Получение данных из БД
        const cat = ref(database, "/Movies/Cateogries");
        onValue(cat, snapshot => {
            setData(Object.keys(snapshot.val()));
        })
    }, [])

    return (
        <div>
            {
                show ?
                    <Outlet />
                    :
                    <div className={cl.categoriesPageWrapper}>
                        <div className={cl.categoriesPageWrapperInset}>
                            <h2 className={cl.categoryTitle}>Категории</h2>
                            <RenderCategories data={data}/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CategoriesPage;