import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: 0,
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
        localStorage.setItem("cart", JSON.stringify(newArr));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, action.payload])
        );
        state.cart = [...state.cart, action.payload];
      }

      //after adding to cart, then save into local storage
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    removeById: (state, action) => {
      let newArray = state.cart.filter(
        (product) => product.id !== action.payload
      );

      state.cart = newArray;
      localStorage.setItem("cart", newArray);
    },
    getTotalPrice: (state) => {
      const total = state.cart.reduce((acc, element) => {
        return acc + element.quantity * element.price;
      }, 0);

      state.total = total;
    },
    decrementOneById: (state, action) => {
      const id = action.payload;
      const newArray = state.cart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, quantity: prod.quantity - 1 };
        } else {
          return prod;
        }
      });
      state.cart = newArray;
      localStorage.setItem("cart", JSON.stringify(newArray));
    },
    incrementOneById: (state, action) => {
      const id = action.payload;
      const newArray = state.cart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, quantity: prod.quantity + 1 };
        } else {
          return prod;
        }
      });
      state.cart = newArray;
      localStorage.setItem("cart", JSON.stringify(newArray));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  clearCart,
  removeById,
  getTotalPrice,
  decrementOneById,
  incrementOneById,
} = cartSlice.actions;

export default cartSlice.reducer;
