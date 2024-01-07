import { useEffect, useState } from "react";
import SeparateCategoryButton from "../../4UI/Buttons/SeparateCategoryButton/SeparateCategoryButton"
import cl from "./StringMovies.module.css";
import { limitToFirst, onValue, query, ref } from "firebase/database";
import { database } from "../../FireBase/FireBase";
import RenderMovies from "../../2MODULES/RenderMovies/RenderMovies";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const StringMovies = ({ path, categoryText, category }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Получание 6-ти фильмов из БД
        const cat = query(ref(database, `/Movies/Cateogries/${category}`), limitToFirst(6));
        onValue(cat, snapshot => {
            setData(Object.values(snapshot.val()));
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div className={cl.stringMoviesWrapper}>
            <SeparateCategoryButton path={path} category={categoryText} />
            <RenderMovies data={data} />
        </div>

    )
}

export default StringMovies;