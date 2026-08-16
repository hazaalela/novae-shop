/** NOVAÉ Sessiz Atelier: localStorage destekli, kişisel mağaza davranışı. */
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number; size: string; color: string };
export type Order = { id: string; createdAt: string; items: CartItem[]; total: number; shipping: number; address: string; status: string; payment: string };

type StoreContextType = {
  cart: CartItem[];
  favorites: string[];
  orders: Order[];
  discount: number;
  cartOpen: boolean;
  addToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  toggleFavorite: (id: string) => void;
  applyDiscount: (code: string) => boolean;
  setCartOpen: (open: boolean) => void;
  checkout: (address: string, shipping: number, payment: string) => Order;
  subtotal: number;
  itemCount: number;
};

const StoreContext = createContext<StoreContextType | null>(null);
const storageKeys = { cart: "novae-cart", favorites: "novae-favorites", orders: "novae-orders" };

const read = <T,>(key: string, fallback: T): T => {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => read(storageKeys.cart, []));
  const [favorites, setFavorites] = useState<string[]>(() => read(storageKeys.favorites, []));
  const [orders, setOrders] = useState<Order[]>(() => read(storageKeys.orders, []));
  const [discount, setDiscount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => localStorage.setItem(storageKeys.cart, JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem(storageKeys.favorites, JSON.stringify(favorites)), [favorites]);
  useEffect(() => localStorage.setItem(storageKeys.orders, JSON.stringify(orders)), [orders]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [cart]);
  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const addToCart = (product: Product, size = product.sizes[0], color = product.colors[0], quantity = 1) => {
    setCart((items) => { const found = items.find((i) => i.product.id === product.id && i.size === size && i.color === color); return found ? items.map((i) => i === found ? { ...i, quantity: i.quantity + quantity } : i) : [...items, { product, size, color, quantity }]; });
    setCartOpen(true);
  };
  const updateQuantity = (id: string, size: string, color: string, quantity: number) => setCart((items) => items.flatMap((item) => item.product.id === id && item.size === size && item.color === color ? (quantity > 0 ? [{ ...item, quantity }] : []) : [item]));
  const removeFromCart = (id: string, size: string, color: string) => setCart((items) => items.filter((item) => !(item.product.id === id && item.size === size && item.color === color)));
  const toggleFavorite = (id: string) => setFavorites((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  const applyDiscount = (code: string) => { if (code.trim().toUpperCase() === "NOVA10") { setDiscount(0.1); return true; } setDiscount(0); return false; };
  const checkout = (address: string, shipping: number, payment: string) => {
    const order: Order = { id: `NV-${Math.floor(100000 + Math.random() * 899999)}`, createdAt: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }), items: cart, total: subtotal * (1 - discount) + shipping, shipping, address, status: "Processing", payment };
    setOrders((current) => [order, ...current]); setCart([]); setDiscount(0); setCartOpen(false); return order;
  };
  return <StoreContext.Provider value={{ cart, favorites, orders, discount, cartOpen, addToCart, updateQuantity, removeFromCart, toggleFavorite, applyDiscount, setCartOpen, checkout, subtotal, itemCount }}>{children}</StoreContext.Provider>;
}
export function useStore() { const context = useContext(StoreContext); if (!context) throw new Error("useStore must be used inside StoreProvider"); return context; }
