import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Nosotros from '../views/Nosotros/Nosotros';
import Menu from '../views/Menu/Menu';
import Reservas from '../views/Reservas/Reservas';
import Layout from '../layout/layout';

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/home" element={<Home />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/reservas" element={<Reservas />}/>
      </Route>
    </Routes>
  );
}

export default Approutes;
