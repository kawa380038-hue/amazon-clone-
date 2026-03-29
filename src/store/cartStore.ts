import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types/product';
import { CartItem, CartStore } from '@/types/cart';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product, quantity: number = 1) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity }],
          });
        }
      },
      
      removeItem: (productId: string) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity < 1) return;
        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'amazon-cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
