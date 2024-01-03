
import SeparateCategoryButton from "../../4UI/Buttons/SeparateCategoryButton/SeparateCategoryButton"
import Card from "../Card/Card";
import cl from "./StringMovies.module.css";


const StringMovies = ({ path, category, data }) => {
    




    return (
        <div className={cl.stringMoviesWrapper}>
            <SeparateCategoryButton path={path} category={category}/>
            <div className={cl.listMovies}>
                {
                    data.map((movie, index) => {
                        return index < 6 ? <Card key={movie.id} img={movie.img} title={movie.title} inSub={movie.inSub}/> : null;
                    })
                }
                {/* <Card img={firstImg} title={firstTitle}/>
                <Card img={secondImg} title={secondTitle}/>
                <Card img={thirdImg} title={thirdTitle}/>
                <Card img={fourthImg} title={fourthTitle}/>
                <Card img={fifthImg} title={fifthTitle}/>
                <Card img={sixthImg} title={sixthTitle}/> */}
            </div>
        </div>
    )
}

export default StringMovies;