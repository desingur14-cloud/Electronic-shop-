
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nebula Pro X Smartphone',
    description: 'The ultimate flagship with a revolutionary 200MP camera and hyper-fast processing.',
    price: 999.99,
    category: Category.PHONES,
    image: 'https://picsum.photos/seed/phone1/600/600',
    rating: 4.8,
    specifications: ['12GB RAM', '256GB Storage', 'A15 Chipset', '6.7" OLED']
  },
  {
    id: '2',
    name: 'Zenith Book 14',
    description: 'Sleek, powerful, and built for creators. Experience true color with our 4K Mini-LED display.',
    price: 1499.00,
    category: Category.LAPTOPS,
    image: 'https://picsum.photos/seed/laptop1/600/600',
    rating: 4.9,
    specifications: ['M3 Pro Max', '32GB RAM', '1TB NVMe', 'Liquid Retina']
  },
  {
    id: '3',
    name: 'SonicWave Elite Headphones',
    description: 'Immersive noise-cancelling audio that adapts to your environment in real-time.',
    price: 349.50,
    category: Category.AUDIO,
    image: 'https://picsum.photos/seed/audio1/600/600',
    rating: 4.7,
    specifications: ['Active ANC', '50hr Battery', 'Hi-Res Audio', 'Bluetooth 5.3']
  },
  {
    id: '4',
    name: 'Vanguard Smartwatch Series 9',
    description: 'Your health, elevated. Track everything from heart rate to blood oxygen with precision.',
    price: 299.00,
    category: Category.WEARABLES,
    image: 'https://picsum.photos/seed/watch1/600/600',
    rating: 4.6,
    specifications: ['GPS Built-in', 'ECG App', 'Water Resistant', '7-Day Battery']
  },
  {
    id: '5',
    name: 'Apex Console X',
    description: 'Next-gen gaming at 120FPS. The future of interactive entertainment is here.',
    price: 499.00,
    category: Category.GAMING,
    image: 'https://picsum.photos/seed/gaming1/600/600',
    rating: 4.9,
    specifications: ['Ray Tracing', 'Custom SSD', 'Adaptive Triggers', '8K Support']
  },
  {
    id: '6',
    name: 'PixelTab Ultra',
    description: 'The thinnest, most powerful tablet ever. Perfect for artists and professionals on the go.',
    price: 799.00,
    category: Category.LAPTOPS,
    image: 'https://picsum.photos/seed/tablet1/600/600',
    rating: 4.5,
    specifications: ['Stylus Included', 'Quad Speakers', 'HDR10+', 'FaceID']
  },
  {
    id: '7',
    name: 'Orion Buds Pro',
    description: 'Tiny size, massive sound. Spatial audio that puts you in the center of the action.',
    price: 199.00,
    category: Category.AUDIO,
    image: 'https://picsum.photos/seed/buds1/600/600',
    rating: 4.4,
    specifications: ['Transparency Mode', 'MagSafe Charging', 'Sweatproof', 'Siri/Google integration']
  },
  {
    id: '8',
    name: 'GamerFlow 3000',
    description: 'Professional mechanical gaming keyboard with ultra-responsive switches.',
    price: 159.00,
    category: Category.GAMING,
    image: 'https://picsum.photos/seed/keyboard1/600/600',
    rating: 4.7,
    specifications: ['RGB Backlit', 'Optical Switches', 'Aluminum Frame', 'Macros']
  }
];
