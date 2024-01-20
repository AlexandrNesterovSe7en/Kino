import Category from "../../3COMPONENTS/Category/Category";
import { useEffect, useState } from "react";
import cl from './RenderCategoriesCards.module.css';
import { onValue, ref } from "@firebase/database";
import { database } from "../../FireBase/FireBase";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "./RenderCategoriesCards.css";

import 'swiper/css';
import 'swiper/css/navigation';

const RenderCategoriesCards = () => {
    const [categories, setCategories] = useState([]);
    const [fetching, setFetching] = useState(true);
    const swiper = useSwiper()

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

    return (
        <>
            {
                <div className={cl.container} >
                    <div className={cl.categoryString}>
                        {
                            fetching ?
                                renderSkeleton()
                                :
                                <Swiper 
                                    speed={1300}
                                    spaceBetween={"30px"}
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
                                            slidesPerView: 4,
                                            slidesPerGroup: 4,
                                            spaceBetween: 20
                                        },
                                        1440: {
                                            slidesPerView: 6,
                                            slidesPerGroup: 6,
                                            spaceBetween: 20
                                        },
                                        1920: {
                                            slidesPerView: 8,
                                            slidesPerGroup: 8,
                                            spaceBetween: 20
                                        }
                                    }}
                                    className="mySwiper1">
                                        <button className="swiper-button-prev"></button>
                                    {
                                        categories.map(title => {
                                            return (
                                                <SwiperSlide className={cl.swiperSlide}><Category key={title} title={title} path={title} /></SwiperSlide>
                                            )
                                        })
                                    }
                                        <button className="swiper-button-next"></button>
                                </Swiper>
                        }
                    </div>
                    <div className={cl.recommendation}>
                        <StringMovies category="Рекомендуем" limit={14} />
                    </div>
                </div>
            }
        </>
    );
};

export default RenderCategoriesCards;