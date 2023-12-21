import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from './1PAGES/MainPage/MainPage';
const routes = createHashRouter(
    createRoutesFromElements(
      <Route 
        path='/'
        element={<MainPage />}>
      </Route>
    )
)

export default routes;