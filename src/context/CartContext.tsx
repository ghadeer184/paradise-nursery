import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { Plant, CartItem, PlantCategory, CartContextType } from '../types';

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Plant; category: PlantCategory } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; change: number } };

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, category } = action.payload;
      const existingItem = state.find(item => item.id === product.id);
      
      if (existingItem) {
        return state.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...state, { ...product, quantity: 1, category }];
    }
    
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.productId);
    
    case 'UPDATE_QUANTITY': {
      const { productId, change } = action.payload;
      return state.reduce((acc: CartItem[], item) => {
        if (item.id !== productId) return [...acc, item];
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) return acc;
        return [...acc, { ...item, quantity: newQuantity }];
      }, []);
    }
    
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = useCallback((product: Plant, category: PlantCategory) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, category } });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  }, []);

  const updateQuantity = useCallback((productId: number, change: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, change } });
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};