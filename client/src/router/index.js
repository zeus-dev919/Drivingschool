import React from 'react'
import { useRoutes } from 'react-router-dom';

import HomePage from '../pages/home'

import AdminLayout from '../components/layout/AdminLayout'
import Admin from '../pages/adminpages/Admin'
import AddTest from '../pages/adminpages/AddTest'

import MainAdd from '../pages/adminpages/MainAdd';

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
        { path: 'addtest', element: <AddTest /> },
      ]
    },
    {
      path: '/testadd',
      element: <MainAdd />
    },
  ];

  return useRoutes(router)
}