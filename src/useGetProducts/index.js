import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [items, setItems] = useState([]) 
  useEffect(() => {
      fetch("https://dbproductos-anwj.vercel.app/Productos")
        .then((res) => res.json())
        .then((response) => {
          setItems(response);
        });
    }, []);
    return items
}

