import { useEffect, useState } from "react";
import Category from "../../3COMPONENTS/Category/Category";
import { TRANSLATOR_EN_TO_RU } from "../../CONSTANTS/CONSTANTS";
import cl from "./RenderCategories.module.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { child, get, onValue, ref } from "firebase/database";
import { database } from "../../FireBase/FireBase";



const RenderCategories = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Получение данных из БД
        const catRef = ref(database, "/Movies/Cateogries");
        const fetchData = () => {
            onValue(catRef, snapshot => {
                setData(Object.keys(snapshot.val()));
                setLoading(false);
            });
        };

        fetchData();
    }, [])


    function renderLoaders() {
        const loaders = [];
        for (let i = 0; i < 11; i++) {
            loaders.push(<SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={1} width={"195px"} height={"195px"} borderRadius={"30px"} />
                </p>
            </SkeletonTheme>)
        }
        return loaders;
    }

    console.log(data.length);
    console.log(renderLoaders());

    return (
        <div className={cl.listCategories}>
            {
                loading ?
                    renderLoaders()
                    :
                    data.map(category => {
                        return (
                            <Category key={category} title={TRANSLATOR_EN_TO_RU[category]} path={TRANSLATOR_EN_TO_RU[category]} />
                        )
                    })
            }
        </div>
    );
};

export default RenderCategories;