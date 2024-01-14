
import SearchInputCard from "../../3COMPONENTS/SearchInputCard/SearchInputCard";
import cl from "./RenderSearchInputModal.module.css";

const RenderSearchInputModal = ({ data }) => {


    return (
        <div className={cl.renderWrapper}>
            {
                data.map(movie => {
                    return <SearchInputCard key={movie.id} img={movie.img} title={movie.title} rating={movie.rating}/>
                })
            }
        </div>
    );
};

export default RenderSearchInputModal;