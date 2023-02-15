import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"


 export const ItemListContainer = ( greeting ) => {

   const [productos, setProductos] = useState([])
   const [loading, setLoading ] = useState(true)
   const { idCategoria } = useParams()

  useEffect(()=>{
      if (idCategoria) {

        gFetch()
        .then(resp => setProductos(resp.filter(producto => producto.categoria === idCategoria))) 
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
        
      } else {

        gFetch()
        .then(resp => setProductos(resp)) 
        .catch(err => console.log(err))
        .finally( ()=> setLoading(false)) 
      }
},[idCategoria])

  
// nuevoArray []  <- [].map
 return  (
    <div>
       <h2>{greeting.saludo}</h2>

       { loading ?   
         <h2>Cargando...</h2>
         :
      <div style={{
         display: 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap'
      }}> 
        { productos.map(productos => (
            <div key={productos.id} className="card w-25 mt-3">
                <div className="card-header">
                  Nombre: {productos.name}
                </div>
                <div className="card-body" >
                  <img className="w-100" src={productos.foto} />
                  <br />
                  <label>Categoria: {productos.categoria} </label>
                  <br></br>
                  <label>Precio: {productos.price} </label>
                  <br></br>
                  <label>stock: {productos.stock} </label>

                </div>
                <div className="card-footer"></div>

                
                <Link to={`/detalle/${productos.id}`}>
                <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
     
            </div>
            ))
        } 
      </div> 
       
       }  
    </div>
 ) 
}

export default ItemListContainer