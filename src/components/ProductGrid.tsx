'use client';

import Image from 'next/image';
import { Product } from '@/types/models';
import { formatCurrency } from '@/lib/utils';
import { useAppStore } from '@/store/useAppStore';
import { useUIStore } from '@/store/useUIStore';

export function ProductGrid({ products }: { products: Product[] }) {
  const addToCart = useAppStore((s) => s.addToCart);
  const pushToast = useUIStore((s) => s.pushToast);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="card overflow-hidden">
          <Image src={product.imageUrl} alt={product.name} width={800} height={800} className="h-48 w-full object-cover" loading="lazy" />
          <div className="p-4">
            <p className="text-xs uppercase text-teal-700">{product.brand}</p>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-slate-500">{product.category}</p>
            <p className="mt-2 font-semibold">{formatCurrency(product.price)}</p>
            <button
              type="button"
              className="btn-primary mt-3 w-full"
              disabled={!product.inStock}
              onClick={() => {
                addToCart({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl });
                pushToast(`${product.name} added to cart`);
              }}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
