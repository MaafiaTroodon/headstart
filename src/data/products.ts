import { Product } from '@/types/models';

const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/800`;

export const products: Product[] = [
  {
    id: 'r1',
    name: 'Diadem Elevate V3 98',
    brand: 'Diadem',
    category: 'Racquets',
    price: 289,
    imageUrl: 'https://diademsports.com/cdn/shop/files/Elevate_V3_Teal_Tour_9985_small.png?v=1765046067',
    inStock: true
  },
  { id: 'r2', name: 'Headstart Team 100', brand: 'Headstart', category: 'Racquets', price: 159, imageUrl: img('r2'), inStock: true },
  {
    id: 's1',
    name: 'Nike Court Air Zoom Pro',
    brand: 'Nike',
    category: 'Shoes',
    price: 175,
    imageUrl:
      'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/9c4f300d-f94a-4809-b0fc-c00fb605bc94/M%2BZOOM%2BVAPOR%2BPRO%2B3%2BHC.png',
    sizes: ['8', '9', '10', '11'],
    inStock: true
  },
  {
    id: 's2',
    name: 'Diadem Court Lite',
    brand: 'Diadem',
    category: 'Shoes',
    price: 135,
    imageUrl: 'https://diademsports.com/cdn/shop/files/E_commerce_Size_black_white_hanging_backward.png?v=1769802091&width=5000',
    sizes: ['7', '8', '9', '10'],
    inStock: true
  },
  {
    id: 'a1',
    name: 'Nike Dri-FIT Match Tee',
    brand: 'Nike',
    category: 'Apparel',
    price: 58,
    imageUrl:
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/f68ca627-6a14-41f4-bc6b-f3f31395ab8e/M+NKCT+DF+ADVNTGE+TOP.png',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  { id: 'a2', name: 'Headstart Academy Hoodie', brand: 'Headstart', category: 'Apparel', price: 79, imageUrl: img('a2'), sizes: ['S', 'M', 'L'], inStock: true },
  {
    id: 'x1',
    name: 'Diadem Tour Overgrip 3-Pack',
    brand: 'Diadem',
    category: 'Accessories',
    price: 14,
    imageUrl: 'https://diademsports.com/cdn/shop/files/Pro_Feel_Grips-3_pack.png?v=1762450887&width=5000',
    inStock: true
  },
  { id: 'x2', name: 'Headstart Dampener Set', brand: 'Headstart', category: 'Accessories', price: 12, imageUrl: img('x2'), inStock: true },
  {
    id: 'b1',
    name: 'Nike Court Backpack 26L',
    brand: 'Nike',
    category: 'Bags',
    price: 105,
    imageUrl:
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/dfe9ab8b-f88d-4b50-ae53-0afdf3c068cf/NIKE%2BHAYWARD%2BBKPK.png',
    inStock: false
  },
  {
    id: 'b2',
    name: 'Diadem 9-Pack Pro Bag',
    brand: 'Diadem',
    category: 'Bags',
    price: 145,
    imageUrl: 'https://diademsports.com/cdn/shop/files/Tour_v3_9pk_Black_Background_4.png?v=1748444738&width=2500',
    inStock: true
  }
];
