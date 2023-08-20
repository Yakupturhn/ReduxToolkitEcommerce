import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
    carts: CartSlice,
    search: SearchSlice,
  },
});
