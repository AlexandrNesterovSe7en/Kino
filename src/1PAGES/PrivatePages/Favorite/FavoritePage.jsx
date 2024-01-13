import { useEffect, useState } from "react";
import { auth, database } from "../../../FireBase/FireBase";
import cl from "./FavoritePage.module.css";
import { get, ref } from "firebase/database";
import Card from "../../../3COMPONENTS/Card/Card";
import { LIMIT } from "../../../CONSTANTS/CONSTANTS";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useThrottle from "../../../HOOKS/useThrottle";



const FavoritePage = () => {

    const [data, setData] = useState([])
    const [limit, setLimitPage] = useState(LIMIT);
    const [fetching, setFetching] = useState(true);

    const throttle = useThrottle();

    const boundary = 200;

    const getData = throttle(100, () => {
        setFetching(false)
        const favoriteRef = ref(database, `Users/${auth.currentUser.uid}/Favorite`)
        get(favoriteRef).then(snap => {
            if(snap.exists()) {
                setLimitPage(prev => prev + LIMIT)
                setData(Object.entries(snap.val()))
                setFetching(true)
            }
        })
    })

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

    function renderSkeleton() {
        const skeletonLoaders = []

        for (let i = 0; i < 30; i++) {
            skeletonLoaders.push(
                <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
                    <p>
                        <Skeleton count={1} width={"158px"} height={"228px"} borderRadius={"10px"} />
                        <div style={{ marginTop: "10px" }}>
                            <Skeleton count={1} width={"158px"} height={"20px"} borderRadius={"10px"} />
                            <div style={{ marginTop: "3px"}}>
                                <Skeleton count={1} width={"108px"} height={"17px"} borderRadius={"10px"} />
                            </div>
                        </div>
                    </p>
                </SkeletonTheme>)
        }

        return skeletonLoaders
    }

    return (
        <div>
            <div className={cl.favoritePageWrapper}>
                <div className={cl.favoritePageWrapperInset}>
                    <h2>Избранное</h2>
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
        </div>
    );
};

export default FavoritePage;