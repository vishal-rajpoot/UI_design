import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login.jsx';
import './index.css';
import ErrorPage from './components/ErrorPage.jsx';
import { About } from './components/About.jsx';
import { Home } from './components/Home.jsx';
import { Contact } from './components/Contact.jsx';
import PassGen from './components/PassGen.jsx';
import Layout from './Layout.jsx';
import { SignUp } from './components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/password-generator",
        element: <PassGen/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
    ]
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
