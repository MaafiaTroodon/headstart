import { Product } from '@/types/models';

const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/800`;

export const products: Product[] = [
  { id: 'r1', name: 'Diadem Elevate V3 98', brand: 'Diadem', category: 'Racquets', price: 289, imageUrl: img('r1'), inStock: true },
  { id: 'r2', name: 'Headstart Team 100', brand: 'Headstart', category: 'Racquets', price: 159, imageUrl: img('r2'), inStock: true },
  { id: 's1', name: 'Nike Court Air Zoom Pro', brand: 'Nike', category: 'Shoes', price: 175, imageUrl: img('s1'), sizes: ['8', '9', '10', '11'], inStock: true },
  { id: 's2', name: 'Diadem Court Lite', brand: 'Diadem', category: 'Shoes', price: 135, imageUrl: img('s2'), sizes: ['7', '8', '9', '10'], inStock: true },
  { id: 'a1', name: 'Nike Dri-FIT Match Tee', brand: 'Nike', category: 'Apparel', price: 58, imageUrl: img('a1'), sizes: ['S', 'M', 'L', 'XL'], inStock: true },
  { id: 'a2', name: 'Headstart Academy Hoodie', brand: 'Headstart', category: 'Apparel', price: 79, imageUrl: img('a2'), sizes: ['S', 'M', 'L'], inStock: true },
  { id: 'x1', name: 'Diadem Tour Overgrip 3-Pack', brand: 'Diadem', category: 'Accessories', price: 14, imageUrl: img('x1'), inStock: true },
  { id: 'x2', name: 'Headstart Dampener Set', brand: 'Headstart', category: 'Accessories', price: 12, imageUrl: img('x2'), inStock: true },
  { id: 'b1', name: 'Nike Court Backpack 26L', brand: 'Nike', category: 'Bags', price: 105, imageUrl: img('b1'), inStock: false },
  { id: 'b2', name: 'Diadem 9-Pack Pro Bag', brand: 'Diadem', category: 'Bags', price: 145, imageUrl: img('b2'), inStock: true }
];
