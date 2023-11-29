import { useGetProducts } from "../../useGetProducts";
import { Product } from "../Product";
import { Ul } from "./styles";

export const ProductsList = ({ categoryId }) => {
  const products = useGetProducts();

  return (
    <Ul>
        {products.map((data) => (
        <Product
          key={data.ProductoID}
          id={data.ProductoID}
          name={data.Nombre}
          desc={data.Descripcion}
          price={data.Precio}
          quant={data.CantidadInventario}
          src={data.Imagen}
        />
      ))}
    </Ul>
  );
};
