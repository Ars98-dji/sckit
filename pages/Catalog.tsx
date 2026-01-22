
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ServiceCategory, Service } from '../types';

interface CatalogProps {
  addToCart: (service: Service) => void;
}

const Catalog: React.FC<CatalogProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');

  const categories = ['All', ...Object.values(ServiceCategory)];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-black tracking-tight mb-4">Notre <span className="text-primary italic">Catalogue.</span></h1>
        <p className="text-slate-400 text-lg max-w-xl">Une sélection rigoureuse de services digitaux haut de gamme pour répondre à vos besoins les plus complexes.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-black' 
                : 'bg-surface border border-white/5 text-slate-400 hover:border-primary/50'
            }`}
          >
            {cat === 'All' ? 'Tous' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div 
            key={service.id}
            className="group bg-surface rounded-2xl border border-white/5 hover:border-primary/50 transition-all flex flex-col h-full"
          >
            <Link to={`/service/${service.id}`} className="block aspect-[4/3] overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </Link>
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">{service.category}</p>
              <h3 className="text-xl font-bold mb-4">{service.name}</h3>
              <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">{service.description}</p>
              
              <div className="mt-auto space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Investissement</span>
                  <span className="text-2xl font-black text-white">{service.price}€</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    to={`/service/${service.id}`}
                    className="h-12 bg-white/5 rounded-full flex items-center justify-center font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                  >
                    Détails
                  </Link>
                  <button 
                    onClick={() => addToCart(service)}
                    className="h-12 bg-primary text-black rounded-full flex items-center justify-center font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
