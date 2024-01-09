import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './1PAGES/PublicPages/HelpersPages/Error/ErrorPage';
import LoaderPage from './1PAGES/PublicPages/HelpersPages/Loader/LoaderPage';
import RequirePage from './1PAGES/RequirePage/RequirePage';

// Все роуты проекта находятся здесь

const routes = createHashRouter(
    createRoutesFromElements(
        // Main Page - Главная страница, public route
        <Route element={<LoaderPage />} errorElement={<ErrorPage />}>
            <Route
                path='/'
                lazy={async function () {
                    const MainPage = await import('./1PAGES/PublicPages/Main/MainPage');
                    return { Component: MainPage.default }
                }}
            />
            <Route
                path='/signUp'
                lazy={async function () {
                    const AuthPage = await import('./1PAGES/PublicPages/HelpersPages/Auth/AuthPage');
                    return { Component: AuthPage.default }
                }}
            />
            <Route
                path='/signIn'
                lazy={async function () {
                    const SignInPage = await import('./1PAGES/PublicPages/HelpersPages/Auth/SignInPage');
                    return { Component: SignInPage.default }
                }}
            />

            <Route element={<RequirePage />}>
                {/* Categories Page - Страница категории, private route */}
                <Route path='/Categories' lazy={async function () {
                    const CategoriesPage = await import('./1PAGES/PrivatePages/Categories/CategoriesPage');
                    return { Component: CategoriesPage.default };
                }}>
                    <Route path=':category' lazy={async function () {
                        const CategoryPage = await import('./1PAGES/PrivatePages/Categories/CategoryPage/CategoryPage');
                        return { Component: CategoryPage.default };
                    }}></Route>
                </Route>

                {/* Favorite Page  - Страница с избранными фильмами, private route */}
                <Route path='/FavoritePage' lazy={async function () {
                    const FavoritePage = await import('./1PAGES/PrivatePages/Favorite/FavoritePage');
                    return { Component: FavoritePage.default };
                }} />

                {/* Film Page - Страница Фильма, private route  */}
                <Route path='/FilmPage' lazy={async function () {
                    const FilmPage = await import('./1PAGES/PrivatePages/Film/FilmPage');
                    return { Component: FilmPage.default };
                }} />
            </Route>
        </Route>
    )
)

export default routes;