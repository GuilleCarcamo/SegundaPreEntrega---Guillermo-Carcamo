import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idProducto} = useParams()
  //  const {agregarCart} = useCartContext()
   
    useEffect(()=>{
    gFetch(idProducto)
    .then(resp => setProduct(resp))
    },[])

    return (
        <ItemDetail product={product} /> 
    )
}

export default ItemDetailContainer 