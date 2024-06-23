import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from "./pages/register";
import Sites from './pages/sites.jsx';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const router = createBrowserRouter([
  {
   path:'/',
   element:<App/>,
   errorElement:<h2>error</h2>
  },
  {
   path:'/register',
   element:<Register/>
  },
  {
    path:'/sites/:sitename',
    element:<Sites/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
