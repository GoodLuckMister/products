import { createAction } from '@reduxjs/toolkit';

const fetchProductRequest = createAction('products/FetchProductRequest');
const fetchProductSuccess = createAction('products/FetchProductSuccess');
const fetchProductError = createAction('products/FetchProductError');

const addProductRequest = createAction('products/AddProductRequest');
const addProductSuccess = createAction('products/AddProductSuccess');
const addProductError = createAction('products/AddProductError');

const getProductRequest = createAction('products/getProductRequest');
const getProductSuccess = createAction('products/getProductSuccess');
const getProductError = createAction('products/getProductError');

const updateProductRequest = createAction('products/updateProductRequest');
const updateProductSuccess = createAction('products/updateProductSuccess');
const updateProductError = createAction('products/updateProductError');

const updateProductCommentRequest = createAction(
  'products/updateProductCommentRequest',
);
const updateProductCommentSuccess = createAction(
  'products/updateProductCommentSuccess',
);
const updateProductCommentError = createAction(
  'products/updateProductCommentError',
);

const deleteProductRequest = createAction('products/DeleteProductRequest');
const deleteProductSuccess = createAction('products/DeleteProductSuccess');
const deleteProductError = createAction('products/DeleteProductError');

export const filterChanged = createAction('products/Filter/Changed');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductRequest,
  getProductSuccess,
  getProductError,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  updateProductCommentRequest,
  updateProductCommentSuccess,
  updateProductCommentError,
  filterChanged,
};
