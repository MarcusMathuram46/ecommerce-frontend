import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import productReducer from '../features/products/productSlice';
import blogReducer from '../features/blogs/blogSlice';
import contactReducer from '../features/contact/contactSlice';
import couponReducer from "../features/coupon/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
    coupon: couponReducer,
  },
  // Optional: Disable serializability check for non-serializable actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/get-wishlist/rejected'], // Ignore the action for wishlist error
        ignoredPaths: ['payload'], // Ignore payload in these actions
      },
    }),
});
