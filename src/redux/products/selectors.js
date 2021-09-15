import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.products.items;
const getProduct = state => state.products.product;
const getFilter = state => state.products.filter;
const getLoading = state => state.products.loading;

const changeFilterItems = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getItems,
  getProduct,
  getLoading,
  changeFilterItems,
  getFilter,
};
