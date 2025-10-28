import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Home from './components/Home/Home.jsx';
const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        {index: true, Component: Home},
        {path: "mobiles" , Component: Mobiles},
        {path: "laptops", Component: Laptops}
      ]
    },
    {
      path: "about",
      element: <div>Here's the about section</div>
    },
    {
      path: "blogs",
      element: <div>Read the blogs here</div>
    },
    {
      path: 'app',
      element: <App></App>
    },
    {
      path: 'app2',
      Component: App
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
