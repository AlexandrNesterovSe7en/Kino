import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from './1PAGES/MainPage/MainPage';
import ErrorPage from './1PAGES/ErrorPage/ErrorPage';
import AuthPage from './1PAGES/AuthPage/AuthPage';

// Все роуты проекта находятся здесь
const routes = createHashRouter(
    createRoutesFromElements(
        // Main Page - Главная страница, public route
        <>
            <Route
                path='/'
                element={<MainPage />}
                errorElement={<ErrorPage />}>

            </Route>
            <Route element={<AuthPage />}>

                {/* Categories Page - Страница категории, private route */}
                <Route path='/Categories' lazy={async function () {
                    let CategoriesPage = await import('./1PAGES/Categories/CategoriesPage')
                    return { Component: CategoriesPage.default }
                }} />

                {/* Favorite Page  - Страница с избранными фильмами, private route */}
                <Route path='/FavoritePage' lazy={async function () {
                    let FavoritePage = await import('./1PAGES/Favorite/FavoritePage')
                    return { Component: FavoritePage.default }
                }} />

                {/* Film Page - Страница Фильма, private route  */}
                <Route path='/FilmPage' lazy={async function () {
                    let FilmPage = await import('./1PAGES/Film/FilmPage')
                    return { Component: FilmPage.default }
                }} />

                {/* List Films - Страница со списком фильмов, private route */}
                <Route path='/ListFilmsPage' lazy={async function () {
                    let ListFilmsPage = await import('./1PAGES/ListFilms/ListFilmsPage')
                    return { Component: ListFilmsPage.default }
                }} />
            </Route>
        </>
    )
)

export default routes;