const getItems = state => state.products.items;
const getFilter = state => state.products.filter;
const getLoading = state => state.products.loading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getItems,
  getFilter,
  getLoading,
};
