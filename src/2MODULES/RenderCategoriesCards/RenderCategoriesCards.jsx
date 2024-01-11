import Category from "../../3COMPONENTS/Category/Category";
import { useEffect, useState } from "react";
import { TRANSLATOR_EN_TO_RU } from "../../CONSTANTS/CONSTANTS";
import cl from './RenderCategoriesCards.module.css';
import MainSpinner from "../../4UI/Spinner/MainSpinner/MainSpinner";
import { onValue, ref } from "@firebase/database";
import { database } from "../../FireBase/FireBase";

const RenderCategoriesCards = () => {
    const [categories, setCategories] = useState([]);
    const [fetching, setFetching] = useState(true);
    const translate = TRANSLATOR_EN_TO_RU;

    useEffect(() => {
        const refCategories = ref(database, 'MovieCategory');

        onValue(refCategories, (snapshot) => {
            if (snapshot.exists()) {
                setCategories(Object.values(snapshot.val()));
                setFetching(false);
            }
        }, {onlyOnce: true});
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
                                return <Category key={title} title={title} path={title} />
                            })
                        }
                    </>
            }
        </div>
    );
};

export default RenderCategoriesCards;