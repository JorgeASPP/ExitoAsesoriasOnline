import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './views/login';
import Home from './views/home';
import Register from './views/register';
import Tutors from './views/tutors';
import Profile from './views/profile';
import Agendar from './views/agendar';
import SesionesAgendadas from './views/sesionesAgendadas'; // Importa la nueva vista de SesionesAgendadas

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/login', element: <Login/> },
  { path: '/register', element: <Register/> },
  { path: '/tutors', element: <Tutors/> },
  { path: '/profile', element: <Profile/> },
  { path: '/schedule', element: <Agendar/> },
  { path: '/sesiones-agendadas', element: <SesionesAgendadas/> }, // Nueva ruta
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
