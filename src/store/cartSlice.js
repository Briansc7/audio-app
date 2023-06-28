import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let exist = state.cart.some(
        (product) => product.id === action.payload.id
      );
      if (exist) {
        let newArr = state.cart.map((element) => {
          if (element.id === action.payload.id) {
            return {
              ...element,
              quantity: element.quantity + action.payload.quantity,
            };
          } else {
            return element;
          }
        });
        state.cart = newArr;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
