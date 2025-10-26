import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalQuantity: 0, 
  totalPrice: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const price = parseFloat(product.price);
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, price: price, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        const price = parseFloat(existingItem.price);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    // ✅ NUEVA ACCIÓN
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        const price = parseFloat(existingItem.price);
        const difference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += difference;
        state.totalPrice += price * difference;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;