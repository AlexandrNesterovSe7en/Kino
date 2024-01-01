
import FooterForFirstPage from "../../2MODULES/FooterForFirstPage/FooterForFirstPage";
import Header from "../../2MODULES/Header/Header";
import MainForFirstPage from "../../2MODULES/MainForFirstPage/MainForFirstPage";
import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import cl from "./MainPage.module.css";


const MainPage = () => {
    return (
        <div>
            <Header />
            <MainForFirstPage />
            <FooterForFirstPage />
        </div>
    );
};

export default MainPage;