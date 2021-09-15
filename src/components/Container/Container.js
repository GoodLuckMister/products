import { useEffect, useCallback } from 'react';
import Home from '../HomePage';
import Modal from '../Modal';
import FilterProduct from '../Filter';
import { productOperations } from '../../redux/products';
import { useDispatch } from 'react-redux';

export default function Container() {
  const dispatch = useDispatch();
  const onFetchContact = useCallback(
    () => dispatch(productOperations.fetchProduct()),
    [dispatch],
  );
  useEffect(() => {
    onFetchContact();
  }, [dispatch, onFetchContact]);
  return (
    <>
      <Modal name="Create" description="Create product" />
      <FilterProduct></FilterProduct>
      <Home />
    </>
  );
}
