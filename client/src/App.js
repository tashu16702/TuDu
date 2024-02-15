import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import Loginpage from './pages/Loginpage';
import Footer from './features/footer/Footer';

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
  },
 
  {
    path: '/footer',
    element: <Footer></Footer>
  },
 
])

function App() {
  return (
  <div>
          <RouterProvider router={router} />
        
  </div>
  );
}

export default App;
