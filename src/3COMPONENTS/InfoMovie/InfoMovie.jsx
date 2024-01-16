import { Link } from 'react-router-dom';
import cl from './InfoMovie.module.css';
import NavBarLink from '../../4UI/Buttons/NavBarLink/NavBarLink';

const InfoMovie = ({ country, categories }) => {
    const categoriesArr = Object.keys(categories);

    return (
        <div className={cl.container}>
            <h2>Информация</h2>
            <div className={cl.container_info}>
                <h3>Страна</h3>
                <p>{country}</p>
            </div>
            <div className={cl.container_info}>
                <h3>Жанры</h3>
                <div className={cl.container_categories}>{
                    categoriesArr.map(category => {
                        return (
                            <NavBarLink key={category} path={'/Categories/' + category} text={categoriesArr.indexOf(category) === categoriesArr.length - 1 ? category : category + ','} className={cl.link}/>
                        );
                    })
                }</div>
            </div>
        </div>
    );
};

export default InfoMovie;