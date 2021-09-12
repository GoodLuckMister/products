import { configureStore } from '@reduxjs/toolkit';
import { productReducers } from './products';

const store = configureStore({
  reducer: {
    products: productReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
