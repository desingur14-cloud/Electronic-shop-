
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  specifications: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Category {
  ALL = 'All',
  PHONES = 'Phones',
  LAPTOPS = 'Laptops',
  AUDIO = 'Audio',
  WEARABLES = 'Wearables',
  GAMING = 'Gaming'
}
