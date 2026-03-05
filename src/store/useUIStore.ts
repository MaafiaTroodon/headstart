'use client';

import { create } from 'zustand';

interface Toast {
  id: string;
  message: string;
}

interface UIState {
  toasts: Toast[];
  pushToast: (message: string) => void;
  dismissToast: (id: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  toasts: [],
  pushToast: (message) => {
    const id = Math.random().toString(36).slice(2);
    set((state) => ({ toasts: [...state.toasts, { id, message }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 2800);
  },
  dismissToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
}));
