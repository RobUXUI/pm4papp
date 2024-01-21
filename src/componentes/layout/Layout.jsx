
import {Outlet} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer"
import Navigation from "../../navigation/Navigation";

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;