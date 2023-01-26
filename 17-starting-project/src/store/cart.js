import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total += existingItem.price;
      } else {
        state.items.push({
          quantity: 1,
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          total: newItem.price,
        });
      }
      state.totalQuantity += 1;
    },
    remove: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity -= 1;
        existingItem.total -= existingItem.price;
      }
      state.totalQuantity -= 1;
    },
    load: (state, action) => {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
