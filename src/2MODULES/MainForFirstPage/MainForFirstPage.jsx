import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import movieImg from "../../4UI/Img/Frostbitten.jpg"
import secondMovieImg from "../../4UI/Img/difficultTeenagers.jpg"
import thirdMovieImg from "../../4UI/Img/fearlessFlyers.jpg";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = () => {
    return (
        <main className={cl.mainWrapper}>
            <StringMovies firstImg={movieImg} secondImg={movieImg} thirdImg={movieImg} fourthImg={movieImg} fifthImg={movieImg} sixthImg={movieImg}
                            firstTitle="Отмороженные" secondTitle="Отмороженные" thirdTitle="Отмороженные" fourthTitle="Отмороженные" fifthTitle="Отмороженные" sixthTitle="Отмороженные"
                            path="/Categories" category="Новинки 2023-2024"/>
            <StringMovies firstImg={secondMovieImg} secondImg={secondMovieImg} thirdImg={secondMovieImg} fourthImg={secondMovieImg} fifthImg={secondMovieImg} sixthImg={secondMovieImg}
                            firstTitle="Трудные подростки" secondTitle="Трудные подростки" thirdTitle="Трудные подростки" fourthTitle="Трудные подростки" fifthTitle="Трудные подростки" sixthTitle="Трудные подростки"
                            path="/Categories" category="Сериалы"/>
            <StringMovies firstImg={thirdMovieImg} secondImg={thirdMovieImg} thirdImg={thirdMovieImg} fourthImg={thirdMovieImg} fifthImg={thirdMovieImg} sixthImg={thirdMovieImg}
                            firstTitle="Бесстрашные летуны" secondTitle="Бесстрашные летуны" thirdTitle="Бесстрашные летуны" fourthTitle="Бесстрашные летуны" fifthTitle="Бесстрашные летуны" sixthTitle="Бесстрашные летуны"
                            path="/Categories" category="Рекомендации"/>
        </main>
    )
}

export default MainForFirstPage;