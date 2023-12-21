import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from './1PAGES/MainPage/MainPage';
import ErrorPage from './1PAGES/ErrorPage/ErrorPage';
const routes = createHashRouter(
    createRoutesFromElements(
      <Route 
        path='/'
        element={<MainPage />}
        errorElement={<ErrorPage />}
        >
      </Route>
    )
)

export default routes;