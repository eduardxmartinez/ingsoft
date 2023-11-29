import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { Link } from "react-router-dom";

export const Product = ({ id, name, desc, price, quant, src }) => {

  return (
    <Article>
        <>
          <Link to={`/Productos/${id}`}>
            <ImgWrapper>
              <Img src={src} /> 
            </ImgWrapper>
          <p>{name} - ${price}</p>
          <p>{desc}</p>
          {quant > 0 ? <p>Disponible</p> : <p>Agotado</p>}
          </Link>
        </>
    </Article>
  );
};