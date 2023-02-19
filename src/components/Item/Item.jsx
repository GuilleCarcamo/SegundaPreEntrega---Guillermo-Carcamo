import { Link } from "react-router-dom"


const Item = ({producto}) => {
  return (
    <div key={producto.id} className="card w-25 mt-3">
               <div className="card-header">
                 Nombre: {producto.name}
               </div>
               <div className="card-body" >
                 <img className="w-100" src={producto.foto} />
                 <br />
                 <label>Categoria: {producto.categoria} </label>
                 <br></br>
                 <label>Precio: {producto.price} </label>
                 <br></br>
                 <label>stock: {producto.stock} </label>

               </div>
               <div className="card-footer"></div>

               
               <Link to={`/detalle/${producto.id}`}>
               <button className="btn btn-outline-dark w-100">Detalle</button>
               </Link>
    
           </div>
  )
}

export default Item