import { products } from '@/data/products';

export const commerceService = {
  listProducts: () => products,
  byCategory: (category: string) => products.filter((p) => p.category === category)
};
