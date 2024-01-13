import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./CategoriesMovie.module.css";

const CategoriesMovie = ({ title }) => {

    return (
        <div className={cl.container}>
            <NavBarLink path={'/'} text={'Главная'} />
            |
            <NavBarLink path={'/Categories'} text={'Категории'} />
            |
            <p>
                {title}
            </p>
        </div>
    );
};

export default CategoriesMovie;