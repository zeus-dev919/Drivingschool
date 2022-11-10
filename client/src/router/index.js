import React from 'react'
import { useRoutes } from 'react-router-dom';

import HomePage from '../pages/home'

import AdminLayout from '../components/layout/AdminLayout'
import Admin from '../pages/adminpages/Admin'

import AddLayout from '../components/layout/AddLayout';

//import MainAdd from '../pages/adminpages/MainAdd';

export default function Router() {
  const router = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { path: '', element: <Admin /> },
      ]
    },
    {
      path: '/add',
      element: <AddLayout />,
      children: [
        { path: '', element: <></> },
        { path: ':id', element: <><h1>today</h1></> },
      ]
    },
    // {
    //   path: '/testadd',
    //   element: <PreAdd />
    // },
    // {
    //   path: '/testadd/:id',
    //   element: <MainAdd />
    // },
  ];

  return useRoutes(router)
}