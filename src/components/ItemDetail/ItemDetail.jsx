import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {

    function onAdd(cantidad){
        agregarCart( {...product,cantidad })
        }


  return (
    <div className="row">
            <div className="col-6">
                <div>
                    <img src={product.foto} alt="Imagen" />
                </div>
                <p className="" >Nombre: {product.name} </p>
                <p className="" >Categoria: {product.categoria} </p>
                <p className="" >Precio: {product.price} </p>
                <p className="" >Stock: {product.stock} </p>
            </div>

            <div className="col-6">
           <ItemCount initial={1} stock={10} onAdd {...onAdd} />
            </div>
        </div>
  )
}

export default ItemDetail