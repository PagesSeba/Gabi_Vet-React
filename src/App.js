// react
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';

// pages
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductosDetalle from './pages/ProductosDetalle';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import Faqs from './pages/Faqs';

// context
import {CartProvider} from './context/CartContext';


function App() {
  return (
    <div className="App">
        
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<Error404 />}/>
                <Route path="/:category" element={<Productos />} />
                <Route path="/:category/:id" element={<ProductosDetalle />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path='/faqs' element={<Faqs />} />
                <Route path="/cart" element={<Carrito />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    
    </div>
  );
}

export default App;
