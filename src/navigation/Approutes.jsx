import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../componentes/layout/Layout';
import Home from '../vistas/home/Home';
import Nosotros from '../vistas/nosotros/Nosotros';
import Menu from '../vistas/menu/Menu';
import Reservas from '../vistas/reservas/Reservas';

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
