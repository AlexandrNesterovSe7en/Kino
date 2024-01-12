import Category from "../../3COMPONENTS/Category/Category";
import { useEffect, useState } from "react";
import { TRANSLATOR_EN_TO_RU } from "../../CONSTANTS/CONSTANTS";
import cl from './RenderCategoriesCards.module.css';
import MainSpinner from "../../4UI/Spinner/MainSpinner/MainSpinner";
import { onValue, ref } from "@firebase/database";
import { database } from "../../FireBase/FireBase";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
        }, { onlyOnce: true });
    }, [])

    function renderSkeleton() {
        const skeletonLoaders = []

        for (let i = 0; i < 15; i++) {
            skeletonLoaders.push(
                <div className={cl.skeletonConatiner}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444" display="flex">
                        <Skeleton count={1} width={"195px"} height={"195px"} borderRadius={"30px"} />
                    </SkeletonTheme>
                </div>)
        }

        return skeletonLoaders
    }

    return (
        <div className={cl.container}>
            {
                fetching ?
                    renderSkeleton()
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