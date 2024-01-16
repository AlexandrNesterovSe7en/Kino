import { Navigate, useParams } from "react-router-dom";
import cl from "./FilmPage.module.css";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../../FireBase/FireBase";
import CategoriesMovie from "../../../2MODULES/CategoriesMovie/CategoriesMovie";
import MovieContent from "../../../2MODULES/MovieContent/MovieContent";
import AddFavoriteFilm from "../../../2MODULES/AddFavoriteFilm/AddFavoriteFilm";
import DescriptionMovie from "../../../2MODULES/DescriptionMovie/DescriptionMovie";
import Rating from "../../../2MODULES/Rating/Rating";



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
    }, [param.filmId])
    if (movie === null) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <>
            {fetching ?
                null
                :
                <>
                    <div className={cl.container}>
                        <div className={cl.imgContainer}>
                            <img src={movie.bigImg} fetchpriority="high" alt="Poster" />
                        </div>
                        <CategoriesMovie title={movie?.title} />
                        <MovieContent movieData={movie} />
                        <AddFavoriteFilm idFilm={param.filmId} />
                    </div>
                    <div className={cl.container_info}>
                        <DescriptionMovie movieData={movie} />
                        <Rating movieData={movie.rating}/>
                    </div>
                </>
            }
        </>
    );
};

export default FilmPage;