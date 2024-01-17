import { useParams } from "react-router-dom";
import { LIMIT } from "../../../../CONSTANTS/CONSTANTS";
import { useEffect, useState } from "react";
import { endAt, equalTo, limitToFirst, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import { database } from "../../../../FireBase/FireBase";
import cl from "./CategoryPage.module.css";
import useThrottle from "../../../../HOOKS/useThrottle";
import Card from "../../../../3COMPONENTS/Card/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CategoryPage = () => {

    const param = useParams();
    const category = param.category;

    const [data, setData] = useState([]);
    const [limit, setLimitPage] = useState(LIMIT);
    const [fetching, setFetching] = useState(true);

    const throttle = useThrottle();

    const boundary = 200;

    const getData = throttle(100, function () {
        setFetching(false)
        const cat = ref(database, `Movies`);
        const paginationRef = query(cat, orderByChild('categories/' + category), equalTo(true), limitToFirst(limit))
        const recCat = query(cat, orderByChild("rating"), equalTo('9.2'), limitToFirst(limit))
        onValue(category === "Рекомендуем" ? recCat : paginationRef, (snap) => {
            if(snap.exists()) {
                setLimitPage(prev => prev + LIMIT)
                setData(Object.entries(snap.val()))
                setFetching(true)
            }
        }, {onlyOnce: true})
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
        // eslint-disable-next-line
    }, []);

    useEffect(() => {

        window.addEventListener('scroll', handleScrollRequest)

        return () => {
            window.removeEventListener('scroll', handleScrollRequest)

        };
        // eslint-disable-next-line
    }, [limit, fetching])

    function renderSkeleton() {
        const skeletonLoaders = []

        for (let i = 0; i < LIMIT; i++) {
            skeletonLoaders.push(
                <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
                    <div>
                        <Skeleton count={1} width={"158px"} height={"228px"} borderRadius={"10px"} />
                        <div style={{ marginTop: "10px" }}>
                            <Skeleton count={1} width={"158px"} height={"20px"} borderRadius={"10px"} />
                            <div style={{ marginTop: "3px"}}>
                                <Skeleton count={1} width={"108px"} height={"17px"} borderRadius={"10px"} />
                            </div>
                        </div>
                    </div>
                </SkeletonTheme>)
        }

        return skeletonLoaders
    }


    return (
        <>
            <div className={cl.categoryPageWrapper}>
                <div className={cl.categoryPageWrapperInset}>
                    <h2>{param.category}</h2>
                    <div className={cl.listMovies}>
                        {
                            data.map(([uid, movie]) => {
                                return <Card uid={uid} img={movie?.img} title={movie?.title} inSub={movie?.inSub} key={uid} rating={movie?.rating} />;
                            })
                        }
                        {
                            fetching ? null :
                            renderSkeleton()
                        }
                    </div>
                </div>
            </div>
        </>
    );
};



export default CategoryPage;