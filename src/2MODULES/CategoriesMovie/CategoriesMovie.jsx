import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./CategoriesMovie.module.css";

const CategoriesMovie = ({ title }) => {

    return (
        <div className={cl.container}>
            <NavBarLink path={'/'} text={'Главная'} className={cl.main}/>
            |
            <NavBarLink path={'/Categories'} text={'Категории'} className={cl.categories}/>
            |
            <p>
                {title}
            </p>
        </div>
    );
};

export default CategoriesMovie;