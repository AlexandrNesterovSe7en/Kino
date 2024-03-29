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
            <Route
                path='/moreInfo'
                lazy={async function () {
                    const moreInfo = await import('./1PAGES/PublicPages/HelpersPages/MoreInfo/MoreInfo');
                    return { Component: moreInfo.default }
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
                <Route path='/FilmPage'>
                    <Route path=':filmId' lazy={async function () {
                        const FilmPage = await import('./1PAGES/PrivatePages/Film/FilmPage');
                        return { Component: FilmPage.default };
                    }} />
                </Route>

                {/* Admin Panel - Админка, private route */}
                <Route path='/Admin' lazy={async function () {
                    const AdminPanel = await import('./1PAGES/Admin/AdminPanel/AdminPanel');
                    return { Component: AdminPanel.default };
                }} />

                {/* Profile Page - Профиль, private route */}
                <Route path='/profilePage' lazy={async function () {
                    const ProfilePage = await import('./1PAGES/PrivatePages/Profile/ProfilePage');
                    return { Component: ProfilePage.default };
                }} />
            </Route>
        </Route>
    )
)

export default routes;