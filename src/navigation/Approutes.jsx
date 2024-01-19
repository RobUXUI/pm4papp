import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home.jsx';
import Nosotros from '../views/Nosotros/Nosotros.jsx';
import Menu from '../views/Menu/Menu.jsx';
import Reservas from '../views/Reservas/Reservas.jsx';
import Layout from '../layout/layout';

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Nosotros" element={<Nosotros />}/>
      <Route path="/Menu" element={<Menu />}/>
      <Route path="/Reservas" element={<Reservas />}/>
      </Route>
    </Routes>
  );
}

export default Approutes;
