import React from 'react'
import { useRoutes } from 'react-router-dom';
import AdminPage from '../pages/adminpages'

export default function Router() {
  const router = [
    {
      path: '/',
      element: <AdminPage />
    }
  ];

  return useRoutes(router)
}