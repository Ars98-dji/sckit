
export enum ServiceCategory {
  BRANDING = 'Branding',
  DEVELOPMENT = 'Développement Web',
  MARKETING = 'Marketing Digital',
  CONCIERGERIE = 'Conciergerie Luxe'
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export interface CartItem extends Service {
  quantity: number;
}

export interface UserMessage {
  role: 'user' | 'model';
  text: string;
}
