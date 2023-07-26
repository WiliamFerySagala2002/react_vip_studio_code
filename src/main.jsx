import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPages from './pages/login'
import RegisterPages from './pages/register'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPages from './pages/404'
import ProductPages from './pages/products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPages />,
  },
  {
    path: '/login',
    element: <LoginPages />,
  },
  {
    path: '/register',
    element: <RegisterPages />,
  },
  {
    path: '/products',
    element: <ProductPages />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
