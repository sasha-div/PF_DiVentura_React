import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Conocenos from './components/Conocenos/Conocenos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { Carrito } from './components/Carrito/Carrito';
import { Checkout } from './components/Checkout/Checkout';

function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/product/:platform' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/conocenos' element={<Conocenos />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>No se encontró la página que buscas.</h1>} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;