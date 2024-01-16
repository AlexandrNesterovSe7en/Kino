import Category from "../../3COMPONENTS/Category/Category";
import { useEffect, useState } from "react";
import cl from './RenderCategoriesCards.module.css';
import { onValue, ref } from "@firebase/database";
import { database } from "../../FireBase/FireBase";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";

const RenderCategoriesCards = () => {
    const [categories, setCategories] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [catMargin, setCatMargin] = useState(0);
    const [movieMargin, setMovieMargin] = useState(0);

    console.log(document.body.style.width);

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
                <div key={i} className={cl.skeletonConatiner}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444" display="flex">
                        <Skeleton count={1} width={"195px"} height={"195px"} borderRadius={"30px"} />
                    </SkeletonTheme>
                </div>)
        }

        return skeletonLoaders
    }

    function next() {
        setCatMargin(prev => prev - 3420)
    }

    function back() {
        setCatMargin(prev => prev + 3420)
    }
    
    function next1() {
        setMovieMargin(prev => prev - 820)
    }

    function back1() {
        setMovieMargin(prev => prev + 820)
    }

    return (
        <>
            {
                <div className={cl.container} >
                    <div className={cl.categoryString} style={{ marginLeft: `${catMargin}px` }}>
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
                                {
                                    catMargin > -1400 ?
                                        <div className={cl.nextButton} onClick={next}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35" fill="white"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                                        </div>
                                        :
                                        null
                                }
                                {
                                    catMargin < 0 ?
                                        <div className={cl.backButton} onClick={back}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                                        </div>
                                        :
                                        null
                                }

                            </>

                    }
                    </div>
                        <div className={cl.recommendation} style={{marginLeft: `${movieMargin}px`}}>
                            <StringMovies category="Рекомендуем" limit={14} movieMargin={movieMargin}/>
                        </div>
                        {
                            movieMargin > -820 ?
                                <div className={cl.nextButton1} onClick={next1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35" fill="white"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                                </div>
                                    :
                                null
                        }
                        {
                            movieMargin < 0 ?
                                <div className={cl.backButton1} onClick={back1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                                </div>
                                :
                                null
                        }
                </div>
            }
        </>
    );
};

export default RenderCategoriesCards;