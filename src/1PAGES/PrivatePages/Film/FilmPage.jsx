import { useParams } from "react-router-dom";
import cl from "./FilmPage.module.css";
import { useEffect, useState } from "react";
import { get, onValue, ref, remove, set, update } from "firebase/database";
import { auth, database } from "../../../FireBase/FireBase";
import CategoriesMovie from "../../../2MODULES/CategoriesMovie/CategoriesMovie";
import MovieContent from "../../../2MODULES/MovieContent/MovieContent";



const FilmPage = () => {

    const param = useParams();
    const [movie, setMovie] = useState({})
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const movieRef = ref(database, `Movies/${param.filmId}`)

        onValue(movieRef, snap => {
            setMovie(snap.val())
            setFetching(false);
        }, { onlyOnce: true })

        window.scrollTo(0, 0);
    }, [])

    function addFavotire() {
        const movieRef = ref(database, `Movies/${param.filmId}`)
        const favoriteRef = ref(database, `Users/${auth.currentUser.uid}/Favorite`)

        get(favoriteRef).then(snap => {
            if (snap.hasChild(param.filmId)) {
                update(favoriteRef, {
                    [param.filmId]: null
                })
            } else {
                onValue(movieRef, snap => {
                    update(ref(database, `Users/${auth.currentUser.uid}/Favorite`), {
                        [param.filmId]: snap.val()
                    })
                })
            }
        })
    }

    return (
        <>
            {fetching ?
                null
                :
                <div className={cl.container}>
                    <div className={cl.imgContainer}>
                        <img src={movie.bigImg} fetchpriority="high" alt="Poster" />
                    </div>
                    <CategoriesMovie categories={movie?.categories} title={movie?.title}/>
                    <MovieContent movieData={movie}/>
                    <div>
                        <button onClick={addFavotire}>Добавить в избранное</button>
                    </div>
                </div>
            }
        </>
    );
};

export default FilmPage;