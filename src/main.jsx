import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Home2 from './components/Home2/Home2.jsx'



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
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
