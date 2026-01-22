
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale scale-105 animate-[pulse_8s_ease-in-out_infinite]"
            alt="Corporate Architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20"></div>
        </div>

        <div className="relative z-30 text-center max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-lg shadow-primary/5">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Skict : Le Prestige Digital au Bénin
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
            SKICT : VOTRE <br/><span className="text-primary italic">STANDARD.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Plus qu'une agence, Skict est un partenaire d'exception. Nous fusionnons luxe et technologie pour des résultats hors normes.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/catalog" 
              className="group px-12 h-16 bg-primary text-black rounded-full font-black text-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] gap-3"
            >
              Explorer les Services
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </Link>
            <Link 
              to="/contact" 
              className="px-12 h-16 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-black text-lg flex items-center justify-center transition-all backdrop-blur-md"
            >
              Consultation VIP
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Projets Skict', val: '150+' },
          { label: 'Satisfaction Client', val: '99%' },
          { label: 'Pays Couverts', val: '12' },
          { label: 'Prix Innovation', val: '08' },
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2 p-8 bg-surface rounded-2xl border border-white/5">
            <p className="text-4xl md:text-5xl font-black text-white">{stat.val}</p>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Expertise Skict</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">Solutions de <br/>Haute Technologie</h2>
          </div>
          <Link to="/catalog" className="group text-white font-bold flex items-center gap-3 hover:text-primary transition-all uppercase tracking-widest text-xs border-b border-white/10 pb-2">
            Voir le catalogue complet <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">east</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map(service => (
            <Link 
              key={service.id}
              to={`/service/${service.id}`}
              className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all flex flex-col hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="aspect-[5/4] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4">
                   <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-black text-primary uppercase tracking-widest">
                     {service.category}
                   </div>
                </div>
              </div>
              <div className="p-10 space-y-4 flex-grow">
                <h3 className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{service.description}</p>
              </div>
              <div className="p-10 pt-0 flex justify-between items-center">
                <div className="space-y-1">
                   <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">À partir de</p>
                   <span className="text-2xl font-black text-white">{service.price}€</span>
                </div>
                <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                   <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-primary/5 py-32 border-y border-white/5 relative overflow-hidden">
        <div className="absolute -left-20 top-0 size-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="material-symbols-outlined text-primary text-7xl mb-10">bolt</span>
          <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight leading-tight uppercase">La Rigueur de Skict, <br/>L'Élégance d'une Marque.</h2>
          <p className="text-xl md:text-2xl font-light italic leading-relaxed text-slate-400">
            "Chez Skict, nous croyons que la perfection n'est pas un luxe mais une nécessité digitale. Chaque ligne de code est pensée pour transcender l'ordinaire."
          </p>
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-center">
             <div className="size-16 rounded-full overflow-hidden border-2 border-primary mb-4">
                <img src="https://ui-avatars.com/api/?name=Arsene+Djivoedo&background=10b981&color=000" alt="Founder Skict" />
             </div>
             <p className="font-black text-xl uppercase tracking-widest">DJIVOEDO Arsène</p>
             <p className="text-primary text-xs font-bold mt-1 uppercase tracking-[0.2em]">Fondateur de Skict & Développeur Lead</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="luxury-gradient p-12 md:p-24 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative group">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 text-black max-w-xl text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">SKICT : VOTRE <br/>FUTUR ICI.</h2>
            <p className="text-lg md:text-xl font-bold opacity-70 leading-relaxed">Prêt à dominer votre marché avec Skict ?</p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <Link 
              to="/contact" 
              className="px-12 h-20 bg-black text-primary rounded-full font-black text-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl gap-3"
            >
              Collaborer avec Skict <span className="material-symbols-outlined font-black">launch</span>
            </Link>
            <p className="text-center md:text-right text-[10px] font-black uppercase text-black/50 tracking-widest">Réponse garantie sous 12h</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
