import { useEffect, useState } from "react";
import SeparateCategoryButton from "../../4UI/Buttons/SeparateCategoryButton/SeparateCategoryButton"
import cl from "./StringMovies.module.css";
import { endAt, equalTo, get, limitToFirst, limitToLast, orderByChild, query, ref, startAt } from "firebase/database";
import { database } from "../../FireBase/FireBase";
import Card from "../Card/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./StringMovies.css";

import 'swiper/css';
import 'swiper/css/navigation';


const StringMovies = ({ category, limit }) => {

    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const cat = ref(database, 'Movies');
        const queryCat = query(cat, orderByChild(`categories/${category}`), equalTo(true), limitToFirst(limit));
        const recCat = query(cat, orderByChild("rating"), endAt('9.2'), limitToLast(limit))

        get(category === "Рекомендуем" ? recCat : queryCat).then(snap => {
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
            <SeparateCategoryButton category={category} className={category === "Рекомендуем" ? cl.rec : null} />
            <div className={cl.listMovies} style={{display: fetching ? "flex" : category === "Рекомендуем" ? null : "flex", flexWrap: category === "Рекомендуем" ? "nowrap" : "wrap"}}>
                {
                    fetching
                        ?
                        renderSkeleton()
                        :
                        category === "Рекомендуем" ?
                        <Swiper 
                                spaceBetween={"30px"}
                                speed={1300}
                                rewind={true}
                                navigation={{
                                    prevEl: ".swiper-button-prev",
                                    nextEl: ".swiper-button-next"
                                }}
                                modules={[Navigation]}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                        spaceBetween: 10
                                    },
                                    480: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                        spaceBetween: 20
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                        spaceBetween: 20
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        slidesPerGroup: 5,
                                        spaceBetween: 20
                                    },
                                    1440: {
                                        slidesPerView: 7,
                                        slidesPerGroup: 7,
                                        spaceBetween: 20
                                    },
                                    1920: {
                                        slidesPerView: 10,
                                        slidesPerGroup: 10,
                                        spaceBetween: 20
                                    }
                                }}
                                className="mySwiper2">
                                    <button className="swiper-button-prev"></button>
                                        {
                                            data.map(([uid, movie]) => {
                                                return <SwiperSlide><Card uid={uid} img={movie?.img} title={movie?.title} inSub={movie?.inSub} key={uid} rating={movie?.rating} /></SwiperSlide>;
                                            })
                                        } 
                                    <button className="swiper-button-next"></button>
                        </Swiper>
                        :
                        <>
                            {
                                data.map(([uid, movie]) => {
                                    return <Card uid={uid} img={movie?.img} title={movie?.title} inSub={movie?.inSub} key={uid} rating={movie?.rating} />;
                                })
                            }
                        </>
                }
            </div>
        </div>

    )
}

export default StringMovies;