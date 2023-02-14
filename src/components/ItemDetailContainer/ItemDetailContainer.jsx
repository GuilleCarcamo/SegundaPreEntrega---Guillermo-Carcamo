import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const {IdProducto} = useParams()
    console.log(IdProducto)
     //gFetch(IdProducto) <- producto string
     
    return (
        <div>ItemDetailContainer</div>
    ) 

}

export default ItemDetailContainer 