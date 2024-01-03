import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = ({ fighters, serials }) => {

    return (
        <main className={cl.mainWrapper}>
            <StringMovies data={fighters} path="/Categories" category="Боевики"/>
            <StringMovies data={serials} path="/Categories" category="Сериалы"/>
        </main>
    )
}

export default MainForFirstPage;