import Card from "../../3COMPONENTS/Card/Card";
import cl from "./RenderMovies.module.css";



const RenderMovies = ({ data }) => {

    return (
        <div className={cl.listMovies}>
            {
                data.map(movie => {
                    return <Card img={movie.img} title={movie.title} inSub={movie.inSub} key={movie.id} rating={movie.rating} />;
                })
            }
        </div>
    );
};

export default RenderMovies;