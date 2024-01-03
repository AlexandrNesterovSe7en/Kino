import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './1PAGES/PublicPages/HelpersPages/Error/ErrorPage';
import MainPage from './1PAGES/PublicPages/Main/MainPage';
import AuthPage from './1PAGES/PublicPages/HelpersPages/Auth/AuthPage';
import LoaderPage from './1PAGES/PublicPages/HelpersPages/Loader/LoaderPage';
import RequirePage from './1PAGES/RequirePage/RequirePage';
import SignInPage from './1PAGES/PublicPages/HelpersPages/Auth/SignInPage';
import CategoryPage from './1PAGES/PrivatePages/Categories/CategoryPage/CategoryPage';

// Все роуты проекта находятся здесь
const routes = createHashRouter(
    createRoutesFromElements(
        // Main Page - Главная страница, public route
        <Route element={<LoaderPage />} errorElement={<ErrorPage />}>
            <Route
                path='/'
                element={<MainPage />}
            />
            <Route
                path='/signUp'
                element={<AuthPage />}
            />
            <Route
                path='/signIn'
                element={<SignInPage />}
            />

            <Route element={<RequirePage />}>
                {/* Categories Page - Страница категории, private route */}
                <Route path='/Categories' lazy={async function () {
                    let CategoriesPage = await import('./1PAGES/PrivatePages/Categories/CategoriesPage')
                    return { Component: CategoriesPage.default }
                }}>
                    <Route path=':category' element={<CategoryPage />}></Route>
                </Route>

                {/* Favorite Page  - Страница с избранными фильмами, private route */}
                <Route path='/FavoritePage' lazy={async function () {
                    let FavoritePage = await import('./1PAGES/PrivatePages/Favorite/FavoritePage')
                    return { Component: FavoritePage.default }
                }} />

                {/* Film Page - Страница Фильма, private route  */}
                <Route path='/FilmPage' lazy={async function () {
                    let FilmPage = await import('./1PAGES/PrivatePages/Film/FilmPage')
                    return { Component: FilmPage.default }
                }} />

                {/* List Films - Страница со списком фильмов, private route */}
                <Route path='/ListFilmsPage' lazy={async function () {
                    let ListFilmsPage = await import('./1PAGES/PrivatePages/ListFilms/ListFilmsPage')
                    return { Component: ListFilmsPage.default }
                }} />
            </Route>
        </Route>
    )
)

export default routes;