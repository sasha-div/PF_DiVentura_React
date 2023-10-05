import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Conocenos from './components/Conocenos/Conocenos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { CartContext } from './context/CartContext';

function App() {

  const [carrito, setCarrito] = useState([]);


  const agregarAlCarrito = (product, quantity) => {
    const productAgregado = { ...product, quantity }

    const nuevoCarrito = [...carrito];
    const enElCarrito = nuevoCarrito.find((product) => product.id === productAgregado.id);

    if (enElCarrito) {
      enElCarrito.quantity += quantity;
    } else {
      nuevoCarrito.push(productAgregado);
    }
    setCarrito(nuevoCarrito);
  }

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito }}>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/product/:platform' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/conocenos' element={<Conocenos />} />
          <Route path='*' element={<h1>No se encontró la página que buscas.</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;