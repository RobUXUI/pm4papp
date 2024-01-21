import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../componentes/layout/Layout';
import Home from '../views/home/Home.jsx';
import Nosotros from '../views/nosotros/Nosotros.jsx';
import Menu from '../views/menu/Menu.jsx';
import Reservas from '../views/reservas/Reservas.jsx';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="nosotros" element={<Nosotros/>} />
          <Route path="menu" element={<Menu/>} />
          <Route path="reservas" element={<Reservas/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
