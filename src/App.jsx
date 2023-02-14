import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'
import cart from './assets/img/cart.png'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a la tienda!' />} />
        <Route path='/detalle' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='*' element= {<Navigate to='/' />} />
        
        
        
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
