import { useEffect, useState } from "react";
import SeparateCategoryButton from "../../4UI/Buttons/SeparateCategoryButton/SeparateCategoryButton"
import cl from "./StringMovies.module.css";
import { equalTo, get, limitToFirst, onValue, orderByChild, orderByKey, query, ref } from "firebase/database";
import { database } from "../../FireBase/FireBase";
import RenderMovies from "../../2MODULES/RenderMovies/RenderMovies";


const StringMovies = ({ path, category }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const cat = ref(database, 'Movies');
        const queryCat = query(cat, orderByChild(`categories/${category}`), equalTo(true), limitToFirst(6));

        get(queryCat).then(snap => {
            setData(Object.entries(snap.val()));
        })
    }, [])


return (
    <div className={cl.stringMoviesWrapper}>
        <SeparateCategoryButton category={category} />
        <RenderMovies data={data} />
    </div>
)
}

export default StringMovies;