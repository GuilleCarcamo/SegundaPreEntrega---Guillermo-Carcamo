import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'
import cart from './assets/img/cart.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a la tienda!' />} />
        
        
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
