import { useParams } from "react-router-dom";
import cl from "./FilmPage.module.css";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../../FireBase/FireBase";



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

    localStorage.setItem("bigImg", movie.bigImg);

    return (
        <div className={cl.container}>
            <div className={cl.imgContainer}>
                <img src={localStorage.getItem("bigImg")} alt=""/>
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
            <div>[Кнопка добавить в избранное]</div>
        </div>
    );
};

export default FilmPage;