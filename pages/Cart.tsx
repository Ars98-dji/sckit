
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsOrdering(true);
    // Simulation d'un processus de paiement pro
    setTimeout(() => {
      setIsOrdering(false);
      setOrderComplete(true);
      clearCart();
    }, 2500);
  };

  if (orderComplete) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="size-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30 text-primary">
          <span className="material-symbols-outlined text-6xl font-bold">celebration</span>
        </div>
        <h1 className="text-5xl font-black">Commande Confirmée !</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
          Merci de votre confiance. Un consultant de <span className="text-primary font-bold">Luxe Agency</span> vous contactera dans les prochaines 24h pour débuter votre projet d'exception.
        </p>
        <div className="pt-8">
          <Link to="/" className="inline-block px-12 h-16 bg-primary text-black rounded-full font-black text-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all w-fit mx-auto shadow-2xl shadow-primary/20">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-8">
        <div className="size-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
          <span className="material-symbols-outlined text-5xl text-slate-700">shopping_cart</span>
        </div>
        <h1 className="text-4xl font-black">Votre panier est vide</h1>
        <p className="text-slate-400 max-w-md mx-auto">Explorez nos services d'exception et donnez une nouvelle dimension à vos projets.</p>
        <Link to="/catalog" className="inline-block px-10 h-16 bg-primary text-black rounded-full font-black text-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all w-fit mx-auto">
          Voir le catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-black mb-12">Votre <span className="text-primary">Panier.</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          {cart.map(item => (
            <div key={item.id} className="bg-surface p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 group hover:border-primary/30 transition-all">
              <div className="w-full md:w-32 aspect-square rounded-xl overflow-hidden shrink-0 border border-white/5">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-slate-500 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-500/10">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-4 bg-background p-1 rounded-full border border-white/5">
                    <button onClick={() => updateQuantity(item.id, -1)} className="size-8 rounded-full hover:bg-white/5 flex items-center justify-center font-bold text-slate-400 hover:text-white">-</button>
                    <span className="font-bold w-6 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="size-8 rounded-full hover:bg-white/5 flex items-center justify-center font-bold text-slate-400 hover:text-white">+</button>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter mb-1">Investissement</p>
                    <p className="text-xl font-black">{item.price * item.quantity}€</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-32 glass border border-white/10 p-8 rounded-3xl space-y-8 shadow-2xl">
            <h2 className="text-xl font-black uppercase tracking-widest border-b border-white/10 pb-4">Résumé du Projet</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Sous-total HT</span>
                <span className="text-white font-bold">{subtotal}€</span>
              </div>
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Frais de service (5%)</span>
                <span className="text-white font-bold">{Math.round(subtotal * 0.05)}€</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="text-xl font-bold uppercase tracking-tight">Total TTC</span>
                <div className="text-right">
                  <p className="text-3xl font-black text-primary">{Math.round(subtotal * 1.05)}€</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Contrat de service inclus</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isOrdering}
              className={`w-full h-16 rounded-full font-black text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 ${
                isOrdering 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-primary text-black hover:scale-[1.02] active:scale-95'
              }`}
            >
              {isOrdering ? (
                <>
                  <div className="size-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Traitement...
                </>
              ) : (
                <>
                  Finaliser la demande <span className="material-symbols-outlined font-bold">lock</span>
                </>
              )}
            </button>

            <div className="bg-background/50 p-4 rounded-xl border border-white/5 space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Confidentialité garantie</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="material-symbols-outlined text-primary text-sm">support_agent</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Support VIP prioritaire</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
