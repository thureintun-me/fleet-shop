import {create} from 'zustand'
import {ThemeType} from "../types/AppThemeType";
import {Product} from "../types/ProductType";
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Session} from "@supabase/supabase-js";

interface CartItem extends Product {
    quantity: number;
}

export interface FleetAppState {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void;
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearProductFromCart: (id: number) => void;
    clearCart: () => void;
    session: Session | null;
    setSession: (session: Session | null) => void;
}

const useFleetAppStore = create<FleetAppState>()(
    persist(
        (set) => ({
            theme: "default",
            setTheme: (theme: ThemeType) => set({ theme }),
            cart: [],
            addToCart: (product: Product) =>
                set((state) => {
                    const existingProduct = state.cart.find((item) => item.id === product.id);
                    if (existingProduct) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    const newProduct: CartItem = { ...product, quantity: 1 };
                    return { cart: [...state.cart, newProduct] };
                }),
            removeFromCart: (id: number) =>
                set((state) => {
                    const existingProduct = state.cart.find((item) => item.id === id);
                    if (existingProduct) {
                        if (existingProduct.quantity > 1) {
                            return {
                                cart: state.cart.map((item) =>
                                    item.id === id
                                        ? { ...item, quantity: item.quantity - 1 }
                                        : item
                                ),
                            };
                        }
                        return {
                            cart: state.cart.filter((item) => item.id !== id),
                        };
                    }
                    return state;
                }),
            clearCart: () => set({ cart: [] }),
            clearProductFromCart: (id: number) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                })),
            session: null,
            setSession: (session: Session | null) => set({ session }),
        }),
        {
            name: 'fleet-app-storage', // Key to store the state in local storage
            partialize: (state) => ({ cart: state.cart, theme: state.theme }), // Persist only cart and theme
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useFleetAppStore;
