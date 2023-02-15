import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const {idProducto} = useParams()
 
   
 
     
    return (
        <div>ItemDetailContainer id: {idProducto}</div>
    ) 

}

export default ItemDetailContainer 