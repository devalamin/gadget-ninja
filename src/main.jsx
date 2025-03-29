import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Home2 from './components/Home2/Home2.jsx'
import Cart from './components/Cart/Cart.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home2></Home2>
      },
      {
        path: '/details/:id',
        loader: () => fetch('/electronicsData.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
