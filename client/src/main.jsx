import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from "./pages/register";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
   path:'/',
   element:<App/>,
   errorElement:<h2>error</h2>
  },
  {
   path:'/register',
   element:<Register/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <>
   <RouterProvider router={router}></RouterProvider>
  </>,
)
