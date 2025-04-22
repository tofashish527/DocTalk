import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Docdetail from '../Pages/Docdetail/Docdetail';
import Contact from '../Pages/Contact/Contact';
import Blogs from '../Pages/Blogs/Blogs';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:
      [
        {
            index:true,
            Component:Home,
            path:'/',
            loader:()=>fetch('Doctordata.json')
        },
        {
            path:'/docdetail/:id',
            Component:Docdetail,
            loader:()=>fetch('../Doctordata.json')
        },
        {
            path:'/blogs',
            Component:Blogs,
            loader:()=>fetch('../Blogsdata.json')
        },
        {
            path:'/Contacts',
            Component:Contact,
        }
      ]
    },
  ]);