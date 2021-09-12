import { createAction } from '@reduxjs/toolkit';

const fetchProductRequest = createAction('products/FetchProductRequest');
const fetchProductSuccess = createAction('products/FetchProductSuccess');
const fetchProductError = createAction('products/FetchProductError');

const addProductRequest = createAction('products/AddProductRequest');
const addProductSuccess = createAction('products/AddProductSuccess');
const addProductError = createAction('products/AddProductError');

const updateProductRequest = createAction('products/updateProductRequest');
const updateProductSuccess = createAction('products/updateProductSuccess');
const updateProductError = createAction('products/updateProductError');

const deleteProductRequest = createAction('products/DeleteProductRequest');
const deleteProductSuccess = createAction('products/DeleteProductSuccess');
const deleteProductError = createAction('products/DeleteProductError');

const filterChanged = createAction('products/Filter/Changed');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
  filterChanged,
};
