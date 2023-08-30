import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPages from './pages/login/index'
import RegisterPages from './pages/register'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPages from './pages/404/index'
import ProductPages from './pages/products/index'
import App from './App'
import ProfilePages from './pages/profile'
import DetailProductPages from './pages/detailProduct'
import store from './redux/store'
import { Provider } from 'react-redux'

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
  {
    path: '/profile',
    element: <ProfilePages />,
  },
  {
    path: '/product/:id',
    element: <DetailProductPages />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
