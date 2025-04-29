import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Plans from './pages/Plans';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotesList from './pages/NotesList';
import AppLayout from './Component/Layouts/AppLayout';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'features',
        element: <Features />
      },
      {
        path: 'plans',
        element: <Plans />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '/noteslist',
    element: <NotesList />
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
