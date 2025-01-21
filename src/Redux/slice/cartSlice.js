import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    CartArr: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.CartArr.findIndex(
        (p) => p.id === action.payload.id
      );
      if (productIndex === -1) {
        state.CartArr.push({ ...action.payload, quantity: 1 });
      } else {
        state.CartArr[productIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.CartArr));
    },
    deleteProduct: (state, action) => {
      const productIndexRemove = action.payload.id;
      const newCart = state.CartArr.filter(
        (item) => item.id !== productIndexRemove
      );
      return { ...state, CartArr: newCart };
    },
  },
});

export const { addProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
