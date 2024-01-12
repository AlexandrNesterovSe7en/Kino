import { useEffect, useState } from "react";
import RenderMovies from "../../../2MODULES/RenderMovies/RenderMovies";
import { auth, database } from "../../../FireBase/FireBase";
import cl from "./FavoritePage.module.css";
import { onValue, ref } from "firebase/database";


const FavoritePage = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const favoriteRef = ref(database, `Users/${auth.currentUser.uid}/Favorite`)

        onValue(favoriteRef, snap => {
            setData(Object.values(snap.val()))
        })

    }, [])

    return (
        <div>
            <div className={cl.favoritePageWrapper}>
                <div className={cl.favoritePageWrapperInset}>
                    <h2>Избранное</h2>
                    <RenderMovies data={data} />
                </div>
            </div>
        </div>
    );
};

export default FavoritePage;