
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Service, CartItem } from './types';
import { SERVICES } from './constants';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ServiceDetail from './pages/ServiceDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (service: Service) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === service.id);
      if (existing) {
        return prev.map(item => item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...service, quantity: 1 }];
    });
    setNotification(`${service.name} ajouté au panier`);
  };

  const clearCart = () => setCart([]);

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
            <Route path="/service/:id" element={<ServiceDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {notification && <Toast message={notification} onClose={() => setNotification(null)} />}
        <AIAssistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
