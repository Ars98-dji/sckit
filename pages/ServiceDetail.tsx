
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface DetailProps {
  addToCart: (service: Service) => void;
}

const ServiceDetail: React.FC<DetailProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-black mb-6">Service introuvable</h1>
        <Link to="/catalog" className="text-primary font-bold">Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/catalog" className="inline-flex items-center gap-2 text-slate-400 font-bold mb-12 hover:text-primary transition-colors">
        <span className="material-symbols-outlined">arrow_back</span>
        Retour au catalogue
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-12">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">{service.name}</h1>
            <p className="text-primary font-black uppercase tracking-[0.3em]">{service.category}</p>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-32 glass border border-white/10 p-10 rounded-3xl space-y-8 shadow-2xl">
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Prix Forfaitaire</p>
              <h2 className="text-5xl font-black text-primary">{service.price}€</h2>
            </div>

            <div className="space-y-4">
              <p className="font-bold uppercase tracking-widest text-sm text-white">Inclus dans ce service :</p>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-primary text-sm">verified</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-4">
              <button 
                onClick={() => {
                  addToCart(service);
                  navigate('/cart');
                }}
                className="w-full h-16 bg-primary text-black rounded-full font-black text-lg uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Réserver ce service
              </button>
              <button 
                onClick={() => addToCart(service)}
                className="w-full h-16 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-black text-lg uppercase tracking-widest transition-all"
              >
                Ajouter au panier
              </button>
            </div>

            <div className="p-4 bg-background rounded-xl border border-white/5 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">security</span>
              <p className="text-[10px] font-bold text-slate-500 uppercase leading-tight">
                Paiement sécurisé et contrat de service garanti par Luxe Agency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
