import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './views/login';
import Home from './views/home';
import Singup from './views/singup';
import Tutors from './views/tutors';
import Profile from './views/profile';
import Agendar from './views/agendar';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/login', element: <Login/> },
  { path: '/singup', element: <Singup/> },
  { path: '/tutors', element: <Tutors/> },
  { path: '/profile', element: <Profile/> },
  { path: '/schedule', element: <Agendar/> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
