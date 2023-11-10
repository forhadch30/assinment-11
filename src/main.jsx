import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Market from './pages/Home/Home/Market/Market';
import NotFound from './Layout/NotFound/NotFound';
import AuthProvider from './Provider/AuthProvider';
import JobApplys from './pages/Home/JobApplys/JobApplys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/notfound",
        element:<NotFound></NotFound>
      },
      {
        path:"/market",
        element:<Market></Market>
      },
      {
       path:"/jobapplys",
       element:<JobApplys></JobApplys>
      }
    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>
   <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
 </div>
)
