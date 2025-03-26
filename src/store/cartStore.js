import { useEffect } from "react";
import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: [], // Se inicializa vacío en el servidor

  setCart: (cart) => set({ cart }),
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id)
      let newCart =[]
      if (existing) {
        newCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }]
      }
      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id)
      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),

  removeAllFromCart: () =>
    set((_) => {
      localStorage.removeItem("cart")
      return { cart: [] }
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        )
        .filter((item) => item.quantity > 0)
      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),
}))

// Hook para cargar el carrito después de la hidratación
export function useCartInitializer() {
  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);
}