import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFetch"



 const ItemListContainer = (greeting) => {
 const [productos, setProductos] = useState([])
 const [loading, setLoading ] = useState(true)

  useEffect(()=>{
   gFetch()
   .then(resp => setProductos(resp)) 
   .catch(err => console.log(err))
   .finally( ()=> setLoading(false))
},[])
  
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
                <button className="btn btn-outline-dark w-100">Detalle</button>
     
            </div>
            ))
        } 
      </div> 
       
       }  
    </div>
 ) 
}

export default ItemListContainer

