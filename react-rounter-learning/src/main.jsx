import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<div>Hello I am React Router</div>
    },
    {
      path: "about",
      element: <div>Here's the about section</div>
    },
    {
      path: "blogs",
      element: <div>Read the blogs here</div>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
