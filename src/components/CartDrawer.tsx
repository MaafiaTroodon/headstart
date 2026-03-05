'use client';

import { useAppStore } from '@/store/useAppStore';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const cart = useAppStore((s) => s.cart);
  const removeFromCart = useAppStore((s) => s.removeFromCart);
  const clearCart = useAppStore((s) => s.clearCart);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <button type="button" className="btn-secondary" onClick={() => setOpen(true)}>
        Cart ({cart.length})
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/35">
          <aside className="h-full w-full max-w-md overflow-y-auto bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">Shopping Cart</h3>
              <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
                Close
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {cart.length === 0 ? <p className="text-sm text-slate-500">Your cart is empty.</p> : null}
              {cart.map((item) => (
                <div key={item.id} className="card p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-slate-500">
                        {item.qty} x {formatCurrency(item.price)}
                      </p>
                    </div>
                    <button type="button" className="text-sm text-red-600" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="font-semibold">Total: {formatCurrency(total)}</p>
              <button type="button" className="btn-primary mt-3 w-full" onClick={clearCart}>
                Mock Checkout
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
