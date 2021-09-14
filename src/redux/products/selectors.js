const getItems = state => state.products.items;
const getProduct = state => state.products.product;
const getLoading = state => state.products.loading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getItems,
  getProduct,
  getLoading,
};
