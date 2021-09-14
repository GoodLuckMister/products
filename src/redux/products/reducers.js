import { createReducer, combineReducers } from '@reduxjs/toolkit';
import productAction from './actions';

const items = createReducer([], {
  [productAction.fetchProductSuccess]: (_, { payload }) => payload,
  [productAction.addProductSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [productAction.deleteProductSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [productAction.fetchProductRequest]: () => true,
  [productAction.fetchProductSuccess]: () => false,
  [productAction.fetchProductError]: () => false,
  [productAction.addProductRequest]: () => true,
  [productAction.addProductSuccess]: () => false,
  [productAction.addProductError]: () => false,
  [productAction.updateProductRequest]: () => true,
  [productAction.updateProductSuccess]: () => false,
  [productAction.updateProductError]: () => false,
  [productAction.deleteProductRequest]: () => true,
  [productAction.deleteProductSuccess]: () => false,
  [productAction.deleteProductError]: () => false,
  [productAction.getProductRequest]: () => true,
  [productAction.getProductSuccess]: () => false,
  [productAction.getProductError]: () => false,
});

const product = createReducer([], {
  [productAction.getProductSuccess]: (_, { payload }) => payload,
  [productAction.updateProductCommentSuccess]: (_, { payload }) => [payload],
  [productAction.updateProductSuccess]: (state, { payload }) => [payload],
});

export default combineReducers({ items, product, loading });
