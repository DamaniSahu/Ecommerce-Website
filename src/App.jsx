import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import ProductDetailsPage from './Components/Pages/ProductDetailsPage';
import './App.css'
import NavBar from './Components/NavBar';
import ProductCart from './Components/ProductCart';
import About from './Components/Pages/About';




function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        alert(`${product.name} is already in your cart!`);
        return prevCart; 
      }
      alert(`${product.name} has been added to your cart!`); 
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    alert(`Product has been removed from your cart!`);
  };

  return (
    <div className='border-3 border-pink-700'>
      <NavBar cart={cart} />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetailsPage addToCart={addToCart} />} />
      <Route path="/ProductCart" element={<ProductCart cart={cart} removeFromCart={removeFromCart} />} />
      <Route path="/about" element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App
