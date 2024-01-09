import { useParams } from "react-router-dom";
import { LIMIT, TRANSLATOR_RU_TO_EN } from "../../../../CONSTANTS/CONSTANTS";
import { useEffect, useState } from "react";
import { limitToFirst, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import { database } from "../../../../FireBase/FireBase";
import RenderMovies from "../../../../2MODULES/RenderMovies/RenderMovies";
import cl from "./CategoryPage.module.css";
import useThrottle from "../../../../HOOKS/useThrottle";
import MainSpinner from "../../../../4UI/Spinner/MainSpinner/MainSpinner";

const CategoryPage = () => {

    const param = useParams();
    const category = TRANSLATOR_RU_TO_EN[param.category];


    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(0);
    const [fetching, setFetching] = useState(true);

    const throttle = useThrottle();

    const limit = LIMIT;
    const boundary = 200;

    const getData = throttle(100, function () {
        setFetching(false)
        const cat = ref(database, `/Movies/Cateogries/${category}`);
        const paginationRef = query(cat, limitToFirst(limit), startAt(nextPage), orderByChild('id'))
        onValue(paginationRef, (snapshot) => {
            if (snapshot.exists()) {
                setNextPage(prev => prev + limit)
                setData(prev => prev.concat(Object.values(snapshot.val())))
            }
            setFetching(true)
        })
    });

    const handleScrollRequest = function () {
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const scrollCurrent = document.documentElement.scrollTop + document.documentElement.clientHeight;

        if ((scrollHeight - boundary <= scrollCurrent) && fetching) {
            getData()
        }
    };

    useEffect(() => {
        handleScrollRequest()
    }, []);

    useEffect(() => {

        window.addEventListener('scroll', handleScrollRequest)

        return () => {
            window.removeEventListener('scroll', handleScrollRequest)

        };
    }, [nextPage, fetching])

    return (
        <>
            <div className={cl.categoryPageWrapper}>
                <div className={cl.categoryPageWrapperInset}>
                    <h2>{param.category}</h2>
                    <RenderMovies data={data} />
                </div>
            </div>
            {fetching ? null :
                <div className={cl.spinnerWrapper}>
                    <MainSpinner className={cl.loader} />
                </div>
            }
        </>
    );
};



export default CategoryPage;