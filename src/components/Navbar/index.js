import logo from "../../assets/logo.png"
import { Link, Nav } from "./styles";

function Navbar() {
    return(
        <Nav className="navbar">
          <img src={logo} alt="logo" height={"50px"}/>
          <p>Punto de venta - Distribuidor autorizado Telcel</p>
          <Link>Inico</Link>
          <Link>Productos</Link>
          <Link>Contacto</Link>
        </Nav>        
    )
}

export default Navbar;
