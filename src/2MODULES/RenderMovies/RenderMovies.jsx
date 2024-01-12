import Card from "../../3COMPONENTS/Card/Card";
import cl from "./RenderMovies.module.css";



const RenderMovies = ({ data }) => {

    console.log(data);

    return (
        <div className={cl.listMovies}>
            {
                data.map(([uid, movie]) => {
                    return <Card uid={uid} img={movie?.img} title={movie?.title} inSub={movie?.inSub} key={uid} rating={movie?.rating} />;
                })
            }
        </div>
    );
};

export default RenderMovies;