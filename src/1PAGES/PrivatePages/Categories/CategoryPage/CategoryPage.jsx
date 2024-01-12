import { useParams } from "react-router-dom";
import { LIMIT, TRANSLATOR_RU_TO_EN } from "../../../../CONSTANTS/CONSTANTS";
import { useEffect, useState } from "react";
import { equalTo, get, limitToFirst, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import { database } from "../../../../FireBase/FireBase";
import RenderMovies from "../../../../2MODULES/RenderMovies/RenderMovies";
import cl from "./CategoryPage.module.css";
import useThrottle from "../../../../HOOKS/useThrottle";
import MainSpinner from "../../../../4UI/Spinner/MainSpinner/MainSpinner";

const CategoryPage = () => {

    const param = useParams();
    const category = param.category;
    console.log(category)


    const [data, setData] = useState([]);
    const [limit, setLimitPage] = useState(LIMIT);
    const [fetching, setFetching] = useState(true);

    const throttle = useThrottle();

    const boundary = 200;

    const getData = throttle(100, function () {
        setFetching(false)
        const cat = ref(database, `/Movies`);
        const paginationRef = query(cat, orderByChild('categories/' + category), equalTo(true), limitToFirst(limit))
        get(paginationRef).then(snap => {
            if(snap.exists()) {
                setLimitPage(prev => prev + LIMIT)
                setData(Object.entries(snap.val()))
                setFetching(true)
            }
        })
    });

    const handleScrollRequest = function () {
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const scrollCurrent = document.documentElement.scrollTop + document.documentElement.clientHeight;
        
        // костыль чёрт ногу сломит
        if ((scrollHeight - boundary <= scrollCurrent) && fetching) {
            if (data.length + LIMIT < limit) {
                return;
            }
            getData();
        }
    };

    useEffect(() => {
        getData()

        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {

        window.addEventListener('scroll', handleScrollRequest)

        return () => {
            window.removeEventListener('scroll', handleScrollRequest)

        };
    }, [limit, fetching])


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