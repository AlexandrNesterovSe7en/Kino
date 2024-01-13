import { useParams } from "react-router-dom";
import cl from "./FilmPage.module.css";
import { useEffect, useState } from "react";
import { get, onValue, ref, remove, set, update } from "firebase/database";
import { auth, database } from "../../../FireBase/FireBase";



const FilmPage = () => {

    const param = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const movieRef = ref(database, `Movies/${param.filmId}`)

        onValue(movieRef, snap => {
            setMovie(snap.val())
        })

        window.scrollTo(0, 0);
    }, [])

    function addFavotire() {
        const movieRef = ref(database, `Movies/${param.filmId}`)
        const favoriteRef = ref(database, `Users/${auth.currentUser.uid}/Favorite`)

        get(favoriteRef).then(snap => {
                if(snap.hasChild(param.filmId)) {
                    update(favoriteRef, {
                        [param.filmId]: null
                    })
                }else{
                    onValue(movieRef, snap => {
                        update(ref(database, `Users/${auth.currentUser.uid}/Favorite`), {
                            [param.filmId]: snap.val()
                        })
                    })
                }  
        })
    }

    return (
        <div className={cl.container}>
            <div className={cl.imgContainer}>
                <img src={movie.bigImg} fetchpriority="high" alt="Poster"/>
            </div>
            <div>
                Фильмы
                |
                [Название фильма]    
            </div>
            <div className={cl.contentContainer}>
                <div>[Название фильима] [рейтинг]</div>
                <div>[жанр: комедия]</div>
                <div>[Кнопка смотреть фильм]</div>
            </div>
            <div>
                <button onClick={addFavotire}>Добавить в избранное</button>
            </div>
        </div>
    );
};

export default FilmPage;