import axios from 'axios';
import productAction from './actions';

axios.defaults.baseURL = 'https://banks-with-users-and-mix.herokuapp.com/api/';

const addProduct = text => async dispatch => {
  dispatch(productAction.addProductRequest());
  try {
    const {
      data: {
        data: { product },
      },
    } = await axios.post('/products', text);
    dispatch(productAction.addProductSuccess(product));
  } catch ({ message }) {
    dispatch(productAction.addProductError(message));
  }
};
const deleteProduct = id => async dispatch => {
  dispatch(productAction.deleteProductRequest());
  try {
    await axios.delete(`/products/${id}`);
    dispatch(productAction.deleteProductSuccess(id));
  } catch ({ message }) {
    dispatch(productAction.deleteProductError(message));
  }
};
const fetchProduct = () => async dispatch => {
  dispatch(productAction.fetchProductRequest());
  try {
    const {
      data: {
        data: { products },
      },
    } = await axios.get('/products');
    dispatch(productAction.fetchProductSuccess(products));
  } catch ({ message }) {
    dispatch(productAction.fetchProductError(message));
  }
};
const getProductById = id => async dispatch => {
  dispatch(productAction.getProductRequest());
  try {
    const {
      data: {
        data: { product },
      },
    } = await axios.get(`/products/${id}`);
    dispatch(productAction.getProductSuccess(product));
  } catch ({ message }) {
    dispatch(productAction.getProductError(message));
  }
};
const updateProductComment = text => async dispatch => {
  dispatch(productAction.updateProductCommentRequest());

  try {
    const {
      data: {
        data: { product },
      },
    } = await axios.put(`/products/${text.productId}`, { comments: [text] });
    dispatch(productAction.updateProductCommentSuccess(product));
  } catch ({ message }) {
    dispatch(productAction.updateProductCommentError(message));
  }
};
const updateProduct = (id, text) => async dispatch => {
  dispatch(productAction.updateProductRequest());

  try {
    const {
      data: {
        data: { product },
      },
    } = await axios.put(`/products/${id}`, { ...text });
    dispatch(productAction.updateProductSuccess(product));
  } catch ({ message }) {
    dispatch(productAction.updateProductError(message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProduct,
  deleteProduct,
  updateProductComment,
  updateProduct,
  addProduct,
  getProductById,
};
