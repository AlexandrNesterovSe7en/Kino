import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = () => {

    return (
        <main className={cl.mainWrapper}>
            <StringMovies category="Комедии" limit={6}/>
            <StringMovies category="Фантастика" limit={6}/>
            <StringMovies category="Ужасы" limit={6}/>
        </main>
    )
}

export default MainForFirstPage;