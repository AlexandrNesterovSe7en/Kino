import SeparateCategoryButton from "../../4UI/Buttons/SeparateCategoryButton/SeparateCategoryButton"
import Card from "../Card/Card";
import cl from "./StringMovies.module.css";


const StringMovies = ({ path, category, data }) => {
    
    return (
        <div className={cl.stringMoviesWrapper}>
            <SeparateCategoryButton path={path} category={category}/>
            <div className={cl.listMovies}>
                {
                    data.map(movie => {
                        return movie.id < 7 ? <Card img={movie.img} title={movie.title} inSub={movie.inSub} key={movie.id}/> : null;
                    })
                }
            </div>
        </div>
    )
}

export default StringMovies;