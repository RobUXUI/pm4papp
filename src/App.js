import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './componentes/header/Header.jsx';
// import Footer from './componentes/footer/Footer.jsx';
import Home from './views/Home/Home';
import Nosotros from './views/Nosotros/Nosotros';
import Menu from './views/Menu/Menu';
import Reservas from './views/Reservas/Reservas'


function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <Footer/>
     
    // </div>
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/reservas" element={<Reservas/>}/>
      </Routes>
    </div>
  );
}

export default App;
