import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home.jsx';
import Router from './Components/Router.jsx';
import Services from './Components/Services.jsx';
import Blog from './Components/Blog.jsx';
import Pages from './Components/Pages.jsx';
import Contact from './Components/Contact.jsx';
import SpacialSkill from './Components/SpacialSkill.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children:
    [
      {
        path:"/",
        element:<Home></Home>,
        // children:[
        //   {
        //     path:"/spacialskill",
        //     element:<SpacialSkill></SpacialSkill>
        //   }
        // ]
      },
         {
            path:"/services",
            element:<Services></Services>
          },
          {
            path:"/blog",
            element:<Blog></Blog>
          },
          {
            path:"/pages",
            element:<Pages></Pages>
          },
          {
            path:"/contact",
            element:<Contact></Contact>
          },
          {
            path:"/spacialskill",
            element:<SpacialSkill></SpacialSkill>
          },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
