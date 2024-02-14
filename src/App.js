import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import Loginpage from './pages/Loginpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Loginpage></Loginpage>
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>
  }
])

function App() {
  return (
  <div>
        
          <RouterProvider router={router} />
        
  </div>
  );
}

export default App;
