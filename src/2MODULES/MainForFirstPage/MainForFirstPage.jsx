import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import movieImg from "../../4UI/Img/Frostbitten.jpg"
import secondMovieImg from "../../4UI/Img/difficultTeenagers.jpg"
import thirdMovieImg from "../../4UI/Img/fearlessFlyers.jpg";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = ({ fighters, serials }) => {


    // return (
    //     <main>
    //         {
    //             data.map(movie => {
    //                 return (
    //                     <StringMovies firstImg={movie.img} secondImg={movie.img} thirdImg={movie.img} />
    //                 )
    //             })
    //         }
    //     </main>
    // )

    return (
        <main className={cl.mainWrapper}>
            <StringMovies data={fighters} path="/Categories" category="Боевики"/>
            <StringMovies data={serials} path="/Categories" category="Сериалы"/>
            {/* <StringMovies data={data} firstImg={secondMovieImg} secondImg={secondMovieImg} thirdImg={secondMovieImg} fourthImg={secondMovieImg} fifthImg={secondMovieImg} sixthImg={secondMovieImg}
                            firstTitle="Трудные подростки" secondTitle="Трудные подростки" thirdTitle="Трудные подростки" fourthTitle="Трудные подростки" fifthTitle="Трудные подростки" sixthTitle="Трудные подростки"
                            path="/Categories" category="Сериалы"/>
            <StringMovies data={data} firstImg={thirdMovieImg} secondImg={thirdMovieImg} thirdImg={thirdMovieImg} fourthImg={thirdMovieImg} fifthImg={thirdMovieImg} sixthImg={thirdMovieImg}
                            firstTitle="Бесстрашные летуны" secondTitle="Бесстрашные летуны" thirdTitle="Бесстрашные летуны" fourthTitle="Бесстрашные летуны" fifthTitle="Бесстрашные летуны" sixthTitle="Бесстрашные летуны"
                            path="/Categories" category="Рекомендации"/> */}
        </main>
    )
}

export default MainForFirstPage;