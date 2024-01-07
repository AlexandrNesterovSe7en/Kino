import Category from "../../3COMPONENTS/Category/Category";
import { useEffect, useState } from "react";
import { TRANSLATOR_EN_TO_RU } from "../../CONSTANTS/CONSTANTS";
import cl from './RenderCategoriesCards.module.css';
import MainSpinner from "../../4UI/Spinner/MainSpinner/MainSpinner";

const RenderCategoriesCards = () => {
    const [categories, setCategories] = useState([]);
    const [fetching, setFetching] = useState(true);
    const translate = TRANSLATOR_EN_TO_RU;

    useEffect(() => {
        fetch('https://kinopoisk-e5c8f-default-rtdb.europe-west1.firebasedatabase.app/Movies/Cateogries.json?shallow=true')
            .then((respones) => {
                return respones.json()
            })
            .then((respCategories) => {
                setCategories(Object.keys(respCategories));
                setFetching(false)
            })

    }, [])

    return (
        <div className={cl.container}>
            {
                fetching ?
                    <div className={cl.spinner}>
                        <MainSpinner />
                    </div>
                    :
                    <>
                        {
                            categories.map((title) => {
                                return <Category key={title} title={translate[title]} path={translate[title]} />
                            })
                        }
                    </>
            }
        </div>
    );
};

export default RenderCategoriesCards;