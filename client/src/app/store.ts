import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice'
import { productsApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore ({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
