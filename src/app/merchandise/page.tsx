'use client';

import { useMemo, useState } from 'react';
import { products } from '@/data/products';
import { ProductGrid } from '@/components/ProductGrid';
import { CartDrawer } from '@/components/CartDrawer';
import { ContactForm } from '@/components/ContactForm';

const categories = ['Racquets', 'Shoes', 'Apparel', 'Accessories', 'Bags'];
const brands = ['Diadem', 'Nike', 'Headstart'];

export default function MerchandisePage() {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');

  const filtered = useMemo(
    () => products.filter((p) => (category ? p.category === category : true) && (brand ? p.brand === brand : true)),
    [category, brand]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-4xl">Merchandise</h1>
        <CartDrawer />
      </div>
      <section className="card p-4">
        <div className="grid gap-3 md:grid-cols-2">
          <select className="rounded-xl border border-slate-300 px-3 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select className="rounded-xl border border-slate-300 px-3 py-2" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">All brands</option>
            {brands.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </section>
      <ProductGrid products={filtered} />
      <section>
        <h2 className="font-display text-2xl">Request special order</h2>
        <div className="mt-4 max-w-2xl">
          <ContactForm context="Special Order Request" />
        </div>
      </section>
    </div>
  );
}
