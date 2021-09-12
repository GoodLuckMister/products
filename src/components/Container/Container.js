import { useEffect, useCallback } from 'react';
import Home from '../HomePage';
import Modal from '../Modal';
import { productOperations, productSelectors } from '../../redux/products';
import { useSelector, useDispatch } from 'react-redux';

export default function Container() {
  const items = useSelector(productSelectors.getItems);
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
      <Modal />

      {items.length > 0 ? <Home /> : null}
    </>
  );
}
