import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = ({ fighters, serials, comedies }) => {

    return (
        <main className={cl.mainWrapper}>
            <StringMovies data={fighters} path="/CategoryPage" category="Боевики"/>
            <StringMovies data={serials} path="/CategoryPage" category="Сериалы"/>
            <StringMovies data={comedies} path="/CategoryPage" category="Комедии"/>
        </main>
    )
}

export default MainForFirstPage;