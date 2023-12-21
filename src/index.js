import ReactDOM from 'react-dom/client';
import routes from './routes';
import { RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={routes}/>
);
