import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ProductBody from './components/ProductBody/ProductBody';

const App = () => {
  const [cartShowing, setCartShowing] = useState(false);
  const [showCartCount, setShowCartCount] = useState(0);

  const cartItemCount = (count, action) => {
    if (action === 'add') {
      setShowCartCount(count);
    } else if (showCartCount > 0) {      
      if (action === 'increment') {
        setShowCartCount(prevCount => prevCount + 1);
      }
      else if (action === 'decrement') {
        if (showCartCount > 0) {
          setShowCartCount(prevCount => prevCount - 1);
        } else {
          setShowCartCount(0);
        }
      } else {
        setShowCartCount(0);
      }
    }
  }

  return (
    <main className='body-main'>
      <NavBar showCart={() => setCartShowing(!cartShowing)} cartCount={showCartCount} />
      <ProductBody showCart={cartShowing} cartItemCount={cartItemCount} />
    </main>
  )
}

export default App;
