// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./pages/login"
import RegisterPage from './pages/register';
import ErrorPage from './pages/404';
import ProfilePage from './pages/profil';
import ProductPage from './pages/products';

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/login",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element: <RegisterPage />,
  },
  {
    path:"/profile",
    element: <ProfilePage />,
  },
  {
    path:"/products",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);