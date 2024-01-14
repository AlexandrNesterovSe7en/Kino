import { useEffect, useState } from "react";
import SeparateCategoryButton from "../../4UI/Buttons/SeparateCategoryButton/SeparateCategoryButton"
import cl from "./StringMovies.module.css";
import { equalTo, get, limitToFirst, orderByChild, query, ref, startAt } from "firebase/database";
import { database } from "../../FireBase/FireBase";
import Card from "../Card/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const StringMovies = ({ category, limit }) => {

    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const cat = ref(database, 'Movies');
        const queryCat = query(cat, orderByChild(`categories/${category}`), equalTo(true), limitToFirst(limit));

        get(queryCat).then(snap => {
            if (snap.exists) {
                setData(Object.entries(snap.val()));
                setFetching(false);
            }
        }, { onclyOnce: true }
        )
        // eslint-disable-next-line
    }, [])

    function renderSkeleton() {
        const skeletonLoaders = []

        for (let i = 0; i < limit; i++) {
            skeletonLoaders.push(
                <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
                    <div>
                        <Skeleton count={1} width={"158px"} height={"228px"} borderRadius={"10px"} />
                        <div style={{ marginTop: "10px" }}>
                            <Skeleton count={1} width={"158px"} height={"20px"} borderRadius={"10px"} />
                            <div style={{ marginTop: "3px" }}>
                                <Skeleton count={1} width={"108px"} height={"17px"} borderRadius={"10px"} />
                            </div>
                        </div>
                    </div>
                </SkeletonTheme>)
        }

        return skeletonLoaders
    }

    return (
        <div className={cl.stringMoviesWrapper}>
            <SeparateCategoryButton category={category} />
            <div className={cl.listMovies}>
                {
                    fetching
                        ?
                        renderSkeleton()
                        :
                        data.map(([uid, movie]) => {
                            return <Card uid={uid} img={movie?.img} title={movie?.title} inSub={movie?.inSub} key={uid} rating={movie?.rating} />;
                        })
                }
            </div>
        </div>

    )
}

export default StringMovies;