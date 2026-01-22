
import React, { useState } from 'react';
import { APP_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Remplacez 'votre_id_formspree' par votre véritable identifiant Formspree
  const FORMSPREE_URL = "https://formspree.io/f/mqaevepk"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur d'envoi Formspree:", error);
      alert("Une erreur de réseau est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-black tracking-tight mb-4">Parlons <span className="text-primary italic">Projets.</span></h1>
        <p className="text-slate-400 text-lg max-w-xl">Que vous ayez une idée précise ou besoin d'un accompagnement stratégique, Skict est votre partenaire de confiance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-surface p-12 rounded-3xl border border-primary/30 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                <span className="material-symbols-outlined text-4xl font-bold">check</span>
              </div>
              <h2 className="text-3xl font-black">Message Envoyé !</h2>
              <p className="text-slate-400">Nous avons bien reçu votre demande via Formspree. Un de nos experts reviendra vers vous sous 12 heures ouvrables.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface p-10 rounded-3xl border border-white/5 space-y-6 shadow-2xl transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Nom Complet</span>
                  <input required name="name" className="bg-background border border-white/10 rounded-xl h-14 px-5 focus:ring-1 focus:ring-primary outline-none text-white transition-all hover:border-primary/30" placeholder="Jean Dupont" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Professionnel</span>
                  <input required type="email" name="email" className="bg-background border border-white/10 rounded-xl h-14 px-5 focus:ring-1 focus:ring-primary outline-none text-white transition-all hover:border-primary/30" placeholder="jean@entreprise.com" />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Type de Projet</span>
                <select name="project_type" className="bg-background border border-white/10 rounded-xl h-14 px-5 focus:ring-1 focus:ring-primary outline-none text-white transition-all appearance-none cursor-pointer hover:border-primary/30">
                  <option value="Branding">Identité Visuelle / Branding</option>
                  <option value="Dev">Développement Web / Mobile</option>
                  <option value="Marketing">Marketing Digital / Influence</option>
                  <option value="Conciergerie">Conciergerie & Lifestyle</option>
                  <option value="Autre">Autre demande spéciale</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message & Ambitions</span>
                <textarea required name="message" className="bg-background border border-white/10 rounded-xl h-40 p-5 focus:ring-1 focus:ring-primary outline-none text-white transition-all resize-none hover:border-primary/30" placeholder="Décrivez vos ambitions pour ce projet..."></textarea>
              </label>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full h-16 rounded-full font-black text-lg uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-3 ${
                  loading ? 'bg-slate-800 text-slate-500' : 'bg-primary text-black shadow-primary/20 hover:scale-[1.02] active:scale-95'
                }`}
              >
                {loading ? (
                  <>
                    <div className="size-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>Transmettre ma demande <span className="material-symbols-outlined">send</span></>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Canaux Directs</h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Expertise & Devis</p>
                  <a href={`mailto:${APP_CONFIG.developer.email}`} className="font-bold text-lg hover:text-primary transition-colors underline-offset-4 hover:underline decoration-primary/50">
                    {APP_CONFIG.developer.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">WhatsApp Business</p>
                  <p className="font-bold text-lg">{APP_CONFIG.developer.phone}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Localisation</p>
                  <p className="font-bold text-lg">Cotonou, Bénin</p>
                  <p className="text-xs text-slate-500 uppercase font-bold mt-1 tracking-tighter">Rayonnement International</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-64 border border-white/5 relative group cursor-pointer shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08759dfc1fd?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
              alt="Skict Office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-2">Skict Innovation Hub</p>
              <h4 className="text-xl font-bold">Un espace d'excellence.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
