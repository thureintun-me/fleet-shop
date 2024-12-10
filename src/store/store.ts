import {create} from 'zustand'
import {ThemeType} from "../types/AppThemeType";
import {Product} from "../types/ProductType";

interface CartItem extends Product {
    quantity: number;
}

export interface FleetAppSate {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void;
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearProductFromCart: (id: number) => void;
    clearCart: () => void;
}

const useFleetAppStore = create<FleetAppSate>()((set) => ({
    theme: "default",
    setTheme: (theme: ThemeType) => set({theme}),
    cart: [],
    addToCart: (product: Product) =>
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Update the quantity if the product already exists
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
                    // Decrease the quantity if greater than 1
                    return {
                        cart: state.cart.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                    };
                }
                // Remove the product if quantity is 1
                return {
                    cart: state.cart.filter((item) => item.id !== id),
                };
            }
            // Return the current state if the product doesn't exist
            return state;
        }),
    clearCart: () => set({ cart: [] }),
    clearProductFromCart: (id: number) =>
        set((state) => ({
            // Remove the product with the matching id from the cart
            cart: state.cart.filter((item) => item.id !== id),
        })),

}))

export default useFleetAppStore;
