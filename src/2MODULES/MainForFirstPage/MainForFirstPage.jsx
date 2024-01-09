import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import { auth } from "../../FireBase/FireBase";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = () => {

    return (
        <main className={cl.mainWrapper}>
            <StringMovies path="/Categories/Сериалы" categoryText="Сериалы" category="Serials"/>
            <StringMovies path="/Categories/Боевики" categoryText="Боевики" category="Fighters"/>
            <StringMovies path="/Categories/Комедии" categoryText="Комедии" category="Comedies"/>
        </main>
    )
}

export default MainForFirstPage;