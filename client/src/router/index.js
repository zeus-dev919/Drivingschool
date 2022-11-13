import React from 'react'
import { useRoutes } from 'react-router-dom';

import HomePage from '../pages/home'

import AdminLayout from '../components/layout/AdminLayout'
import Admin from '../pages/adminpages/Admin'

import AddLayout from '../components/layout/AddLayout';
import QuestionSection from '../components/admin/questionsection';

import UserLayout from '../components/layout/UserLayout';
import Content from '../components/users/common/Content';
import Exam from '../components/users/exam/Exam';

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
        { path: ':id', element: <QuestionSection /> },
      ]
    },
    {
      path: '/user',
      element: <UserLayout />,
      children: [
        { path: ':id', element: <Content /> },
      ]
    },
    {
      path: '/exam/:id',
      element: <Exam />
    }
  ];

  return useRoutes(router)
}