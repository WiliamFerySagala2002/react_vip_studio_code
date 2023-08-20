import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPages from './pages/login/index'
import RegisterPages from './pages/register'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPages from './pages/404/index'
import ProductPages from './pages/products/index'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
