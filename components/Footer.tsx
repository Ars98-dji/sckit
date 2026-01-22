
import React from 'react';
import { APP_CONFIG } from '../constants';

const Footer: React.FC = () => {
  const { developer } = APP_CONFIG;

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-black">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Skict <span className="text-primary">Agency</span></h2>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed">
              Skict redéfinit l'excellence digitale pour les marques de prestige. Nous concevons des expériences mémorables et des solutions technologiques de pointe.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conditions de Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Notre Vision</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface p-8 rounded-xl border border-white/5 shadow-2xl">
              <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Contact Développeur</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <div>
                    <p className="font-bold text-white">{developer.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter mt-1">{developer.role}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <a href={`mailto:${developer.email}`} className="text-slate-400 hover:text-primary text-sm transition-colors break-all">
                    {developer.email}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <p className="text-slate-400 text-sm">{developer.phone}</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <p className="text-slate-400 text-sm">{developer.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© 2024 SKICT AGENCY. TOUS DROITS RÉSERVÉS.</p>
          <p>DÉVELOPPÉ AVEC PASSION PAR {developer.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
