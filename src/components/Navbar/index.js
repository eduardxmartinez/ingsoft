import logo from "../../assets/logo.png"
import { Nav } from "./styles";

function Navbar() {
    return(
        <Nav className="navbar">
          <img src={logo} alt="logo" height={"50px"}/>
          <p>Punto de venta - Distribuidor autorizado Telcel</p>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </Nav>        
    )
}

export default Navbar;
