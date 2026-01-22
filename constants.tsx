
import { Service, ServiceCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Identité Visuelle Premium',
    category: ServiceCategory.BRANDING,
    description: 'Création d\'une charte graphique luxueuse incluant logo, typographies et palette exclusive.',
    price: 2500,
    image: 'https://picsum.photos/seed/branding/800/600',
    features: ['Logo Vectoriel', 'Charte Graphique', 'Cartes de Visite', 'Réseaux Sociaux']
  },
  {
    id: 's2',
    name: 'Plateforme E-commerce sur Mesure',
    category: ServiceCategory.DEVELOPMENT,
    description: 'Développement d\'une boutique en ligne haute performance avec React et backend sécurisé.',
    price: 5000,
    image: 'https://picsum.photos/seed/dev/800/600',
    features: ['Design Responsive', 'Paiement Sécurisé', 'Tableau de bord', 'Optimisation SEO']
  },
  {
    id: 's3',
    name: 'Campagne Influence de Luxe',
    category: ServiceCategory.MARKETING,
    description: 'Partenariats stratégiques avec des influenceurs haut de gamme pour booster votre visibilité.',
    price: 3500,
    image: 'https://picsum.photos/seed/marketing/800/600',
    features: ['Sélection VIP', 'Gestion des Contrats', 'Reporting Analytics', 'Shooting Photos']
  },
  {
    id: 's4',
    name: 'Application Mobile iOS/Android',
    category: ServiceCategory.DEVELOPMENT,
    description: 'Une application native pour offrir une expérience mobile exclusive à vos clients.',
    price: 8000,
    image: 'https://picsum.photos/seed/mobile/800/600',
    features: ['React Native', 'Push Notifications', 'Offline Mode', 'Store Deployment']
  },
  {
    id: 's5',
    name: 'SEO & Content Strategy',
    category: ServiceCategory.MARKETING,
    description: 'Dominez les résultats de recherche avec un contenu raffiné et optimisé.',
    price: 1800,
    image: 'https://picsum.photos/seed/seo/800/600',
    features: ['Audit Complet', 'Copywriting Luxe', 'Backlinks Qualité', 'Suivi Mensuel']
  },
  {
    id: 's6',
    name: 'Accompagnement VIP 24/7',
    category: ServiceCategory.CONCIERGERIE,
    description: 'Une assistance dédiée pour tous vos besoins digitaux et logistiques de prestige.',
    price: 1200,
    image: 'https://picsum.photos/seed/vip/800/600',
    features: ['Manager Dédié', 'Réponse < 1h', 'Maintenance Illimitée', 'Accès Événements']
  }
];

export const APP_CONFIG = {
  developer: {
    name: "DJIVOEDO Arsène",
    role: "Développeur Fullstack (Frontend React – Backend FastAPI/Django sur demande)",
    email: "djivoedoarsene@gmail.com",
    phone: "+229 01 46 42 47 87",
    location: "Bénin"
  }
};
