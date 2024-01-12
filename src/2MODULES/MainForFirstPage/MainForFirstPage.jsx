import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = () => {

    return (
        <main className={cl.mainWrapper}>
            <StringMovies category="Комедии" />
            <StringMovies category="Фантастика" />
            <StringMovies category="Ужасы" />
        </main>
    )
}

export default MainForFirstPage;