import { useParams } from "react-router-dom";
import { TRANSLATOR_RU_TO_EN } from "../../../../CONSTANTS/CONSTANTS";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../../../FireBase/FireBase";
import RenderMovies from "../../../../2MODULES/RenderMovies/RenderMovies";
import cl from "./CategoryPage.module.css";

const CategoryPage = () => {

    const param = useParams();
    const category = TRANSLATOR_RU_TO_EN[param.category];
    const [data, setData] = useState([]);

    useEffect(() => {
        const cat = ref(database, `/Movies/Cateogries/${category}`);
        onValue(cat, snapshot => {
            setData(Object.values(snapshot.val()));
        })
        // eslint-disable-next-line  
    }, [])

    return (
        <div className={cl.categoryPageWrapper}>
            <div className={cl.categoryPageWrapperInset}>
                <h2>{param.category}</h2>
                <RenderMovies data={data} />
            </div>
        </div>
    );
};



export default CategoryPage;