'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Booking, CartItem, User } from '@/types/models';
import { uid } from '@/lib/utils';

interface Registration {
  id: string;
  programId: string;
  userId: string;
  status: 'registered' | 'waitlist';
}

interface MembershipPurchase {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  purchasedAt: string;
}

interface AppState {
  user: User | null;
  bookings: Booking[];
  registrations: Registration[];
  memberships: MembershipPurchase[];
  cart: CartItem[];
  login: (email: string, role?: 'member' | 'admin') => void;
  logout: () => void;
  addBooking: (booking: Booking) => void;
  addRegistration: (reg: Omit<Registration, 'id'>) => void;
  addMembership: (purchase: Omit<MembershipPurchase, 'id' | 'purchasedAt'>) => void;
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      bookings: [],
      registrations: [],
      memberships: [],
      cart: [],
      login: (email, role = 'member') =>
        set({
          user: {
            id: email,
            name: email.split('@')[0],
            email,
            role
          }
        }),
      logout: () => set({ user: null }),
      addBooking: (booking) => set((state) => ({ bookings: [booking, ...state.bookings] })),
      addRegistration: (reg) =>
        set((state) => ({
          registrations: [{ ...reg, id: uid('reg') }, ...state.registrations]
        })),
      addMembership: (purchase) =>
        set((state) => ({
          memberships: [{ ...purchase, id: uid('mship'), purchasedAt: new Date().toISOString() }, ...state.memberships]
        })),
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((x) => x.id === item.id);
          if (existing) {
            return {
              cart: state.cart.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))
            };
          }
          return { cart: [...state.cart, { ...item, qty: 1 }] };
        }),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'headstart-demo-store'
    }
  )
);
