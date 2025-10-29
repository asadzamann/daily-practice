import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import Posts from './components/Posts/Posts.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';

const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        {index: true, Component: Home},
        {path: "mobiles" , Component: Mobiles},
        {path: "laptops", Component: Laptops},
        {
      path: 'users',
      loader: () =>
        fetch('https://jsonplaceholder.typicode.com/users'),
      Component: Users
    },
    {
      path: 'posts',
      element: <Suspense fallback={<span>Loading...</span>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
    },
    {
      path: 'users/:userID',
      Component: UserDetails
    }
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
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
