
import logo from "../../assets/logo.png"
import { Div, Img } from "./styles";

const HomePage = () => {
  return (
    <Div>
      <h1>Bienvenidos</h1>
      <Img src={logo} alt="logo"/>
    </Div>
  );
};

export default HomePage