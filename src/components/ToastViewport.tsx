'use client';

import { useUIStore } from '@/store/useUIStore';

export function ToastViewport() {
  const toasts = useUIStore((s) => s.toasts);
  const dismissToast = useUIStore((s) => s.dismissToast);

  return (
    <div className="fixed right-4 top-4 z-50 flex w-80 flex-col gap-2" aria-live="polite" aria-label="Notifications">
      {toasts.map((toast) => (
        <button
          type="button"
          key={toast.id}
          onClick={() => dismissToast(toast.id)}
          className="rounded-xl border border-teal-200 bg-white px-4 py-3 text-left text-sm shadow-md"
        >
          {toast.message}
        </button>
      ))}
    </div>
  );
}
