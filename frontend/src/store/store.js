import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import orderReducer from './slices/orderSlice'
import menuReducer from './slices/menuSlice'
import toastReducer from './slices/toastSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    menu: menuReducer,
    toast: toastReducer,
  },
})
