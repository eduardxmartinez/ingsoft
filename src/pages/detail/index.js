import { useParams } from 'react-router-dom'
import { useGetProducts } from '../../useGetProducts'
import { Product } from '../../components/Product'
import { Ul } from '../../components/ProductList/styles'
import QrCode from '../../components/QrGenerator/QrCode'

const Detail = () => {
    const params = useParams()
    const products = useGetProducts();
    var data = products.filter(item => {
        return item.ProductoID == params.detailId
      })

    return(
    <Ul>
    {data.map((data) => (
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
      <QrCode id={params.detailId}/>
    </Ul>
        
        
    )
}

export default Detail