import ReactDOM from 'react-dom/client';
import routes from './routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
);
